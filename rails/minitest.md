factory_girl

Factory.define :user do |f|
  f.username = 'foo'
  f.password = 'foobar'
  f.password_confirmation = { |u| u.password }
  f.email 'test@example.com'
end

in test_helper
require File.dirname(__FILE__) + '/factories'


============================================








rake db:create --create the database.
rake -T   ---- lists available rake commands
rails s / rails server - 
rails generate controller home index


From Rails Guids - guides.rubyonrails.org
----------------
Action Pack - gem that contains the Action Controller, Action View, and
Action Dispatch.  The VC of MVC.

- Action controller - the component that manages the controllers in a
  rails application.  Action Controller framework processes incoming
requests, extracts params, and dispatches them to the intended action.
(session management, template rendering, redirect management)

- Action View - manages teh views of a rails application.  It can create
  both HTML and XML output bu default. nested and partial templates and
includes built in ajax support

- Action Dispatch - handles routing of web requests and dispatches them
  as you want, either to your application or any other Rack application.

Action Mailer - framework for building email services.  Recieve and
process incoming email and send simple plain text or complex multipart
email based on flexible templates.

Action Model - Provides a defined interface between teh Action Pack gem
service and Object Relationship Mapping Gems such as Action Recover.
Active model allows Rails to utilize other ORM frameworks in place of
Active recovrd if your applciation needs this.























  request.env['HTTP_USER_AGENT'] 

bundle exec rake db:test:prepare
bundle exec rake db:test:load



spring (instead of spork)



running:
rake test TEST=test/controllers/restore_listing_test.rb



require 'minitest/autorun'

```
  describe Hipster, "Demonstration of MiniTest" do
    before do
      @hipster = Hipster.new
    end

    after do
      @hipster.destroy!
    end

    subject do
      Array.new.tap do |attributes|
        attributes << "silly hats"
        attributes << "skinny jeans"
      end
    end

    let(:list) { Array.new }

    describe "when asked about the font" do
      it "should be helvetica" do
        @hipster.preferred_font.must_equal "helvetica"
      end
    end

    describe "when asked about mainstream" do
      it "won't be mainstream" do
        @hipster.mainstream?.wont_equal true
      end
    end
  end
```

Matchers (must | wont)
----------------------

In most cases you can switch between must for positive expectations and wont for negative expectations.

Assertion Examples
must_be list.size.must_be :==, 0
must_be_close_to  subject.size.must_be_close_to 1,1
must_be_empty list.must_be_empty
must_be_instance_of list.must_be_instance_of Array
must_be_kind_of list.must_be_kind_of Enumerable
must_be_nil list.first.must_be_nil
must_be_same_as subject.must_be_same_as subject
must_be_silent  proc { "no stdout or stderr" }.must_be_silent
must_be_within_epsilon  subject.size.must_be_within_epsilon 1,1
must_equal  subject.size.must_equal 2
must_include  subject.must_include "skinny jeans"
must_match  subject.first.must_match /silly/
must_output proc { print "#{subject.size}!" }.must_output "2!"
must_respond_to subject.must_respond_to :count
must_raise  proc { subject.foo }.must_raise NoMethodError
must_send subject.must_send [subject, :values_at, 0]
must_throw  proc { throw :done if subject.any? }.must_throw :done
