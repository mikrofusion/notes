Rollout
-------
gem install rollout
I like to assign an instance of Rollout to a global variable.

$redis = Redis.new
$rollout = Rollout.new($redis)
I can check whether a user has access to a feature like this:

$rollout.active?(:chat, User.first) # => true/false
Let's say I want to roll out a chat feature. I'd wrap any chat-related
code in:

if $rollout.active?(:chat, @current_user)
  # chat-related code
end
The simplest way to start rolling out our chat feature is by giving
access to a single user:

$rollout.activate_user(:chat, User.find_by_nickname("jamesgolick"))
$rollout.active?(:chat, User.find_by_nickname("jamesgolick")) # => true
When alpha testing, it's convenient to be able to provide access to
whole groups of users (staff, for example) at once. We define several
groups when we initialize Rollout.

$rollout.define_group(:caretakers) do |user|
  user.caretaker?
end
To provide access to a group:

$rollout.activate_group(:chat, :caretakers)
When it's time to go live, we can slowly ramp up access:

$rollout.activate_perecentage(:chat, 10)

remove everyones access if needed:

$rollout.deactivate_all(:chat)

reference:
http://jamesgolick.com/2010/8/1/introducing-rollout-condionally-roll-out-features-with-redis..html
