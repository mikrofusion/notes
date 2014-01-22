siege <ip> -b 15s



rails g migration <Name>
github unicorn

htop


puma -> threading request
  -> 

  haproxy -- general tool

kill -TTUO <pid>

standard practice to use rubygems..

monet - kills processes

git push -f

bundle exec rails console

~/.rbenv /versions/

-----------
ugg lost beginning of notes here
------------


config/routes.rb
	resources :users -> sets up correspondences between 
app/controller/users_controller.rb

	def index 
		@users = User.all

	end

views/users/index.html.erb
	<% @users.each do |user| %>
		<%= user.email %>
	<% end %>


HTTPRequest      URL          Action    Purpose
GET              /users       index     page to list all users
GET              /users/1     show      page to show user wiht id 1
GET              /users/new   new       page to make new user
POST             /users       create    page to create new user
GET              /users/1/edit  edit    page to edit user with id 1
PUT              /users/1       update   update user with id 1
DELETE           /users/1      destroy  delete user with id 1

rest endpoints in rails:  index, show, new, create, edit, update, destroy

representational state transfer - roy fielding.

========================
create microposts
=========================
rails generate scaffold Micropost content:string user_id:integer

update database
--------------
bundle exec rake db:migrate

now we should have:

resources :microposts
resources :users

app/models/micropost.rb
	validates :content, :length => { :maximum => 140 }
	belongs_to :user

app/models/user.rb
	has_many :microposts



ActiveRecord <- object relational database mapping




[].tap do |arr|
	arr << 
end

(1..100).to_a

2.days.ago..time.now

each_with_index.do |obj, index|
end

humanize.


--- reflection stuff

















create raisl project
--------------------
rails new first_app   <- note snakecase
cd first_app

open project directory
---------------------
open . 

install gems
------------
bundle update 
bundle install (--without production) #without production for heroku


run rails
---------
rails server

======================
go to localhost:3000


add to your gitignore
----------------------
.DS_STORE

init git
--------
git init
git add .
git status
git commit -m "intial commit"
git log

recover ..
----------
git checkout -f

git push -u (git set upstream)



===============================

workflow
========
git checkout -b "modify-README"
git mv README.rdoc README.md
git commit -am "improve readme file"
git checkout master
git merge modify-README
git branch -d modify-README
git push

// note: 

progit.org









=================================================
book
=================================================
once the project is created (see above) then use the following

```
rails generate scaffold User name:string email:string
```
will create the following files:
```
Active Record
-------------
>> database model creation ... 
 	invoke  active_record

>> create an active record migration path... ActiveRecord::Migration
	create  	db/migrate/20140120192044_create_users.rb

>> create a model that inherits from ActiveRecord::Base
	create    		app/models/user.rb

>> add test unit cases
	invoke    		test_unit
	create      		test/models/user_test.rb
	create      		test/fixtures/users.yml

Routes
------
>> create routes.
	invoke  resource_route
	route    	resources :users
	invoke  scaffold_controller
	create    	app/controllers/users_controller.rb
	invoke    	erb
	create      	app/views/users
	create      	app/views/users/index.html.erb
	create      	app/views/users/edit.html.erb
	create      	app/views/users/show.html.erb
	create      	app/views/users/new.html.erb
	create      	app/views/users/_form.html.erb
	invoke    test_unit
	create      	test/controllers/users_controller_test.rb
	invoke    helper
	create      	app/helpers/users_helper.rb
	invoke      	test_unit
	create        		test/helpers/users_helper_test.rb
	invoke    jbuilder
	create      	app/views/users/index.json.jbuilder
	create      	app/views/users/show.json.jbuilder
	invoke  assets
	invoke    	coffee
	create     	 	app/assets/javascripts/users.js.coffee
	invoke    	scss
	create      	app/assets/stylesheets/users.css.scss
	invoke  	scss
	create    		app/assets/stylesheets/scaffolds.css.scss
```

migrate the database
```
bundle exec rake db:migrate
```

run rails
```
rails s
```
rails should now be running on port 3000
=================================================
end book
=================================================

databases
=========
migrate database
----------------
bundle exec rake db:migrate

view all tasks available
---------------------
bundle exec rake -T

view databases tasks
---------------------
bundle exec rake -T db




=================================================







Rails
=====
rails -> node comparison
-------------------------
web browser         | web browser
passenger / unicorn | node server
rails router        | node router
rails action        | node app

=======
create a new rails app
----------------------
```
rails new <name>
```

most rails developers use rspec instead of the default test-unit 
--------------------------------------------------------------
create a new rails project without the test suite:
```
rails new tasks --skip-test-unit
```
or
```
rails new <name> -T
```

test driven development
------------------------
add the following to your gemfile:

```
group :development, :test do
  gem 'rspec-rails'
end
```

```
group :test, :development do
	gem 'rspec-rails'
	gem 'capybara'
	gem 'guard-rspec'
	gem 'growl_notify'
end
```
then to have rails update the gemfiles run:
```
bundle install
```
or
```
bundle
```

show which generators are available
------------------------------------
rails generator
rails g

install a generator
-------------------
rails g <generator name>


RSPEC
=====
installing rspec
-----------------
```
rails g rspec:install
```
this will create the following files:
```
      create  .rspec
      create  spec
      create  spec/spec_helper.rb
```

using rspec
-----------
```
rake rspec
```

GUARD
=====
guard allows automatic running of tests

configure guard to use rspec
----------------------------
```
gaurd init rspec
```
this will create the following file:
```
/Users/user/programming/tasks/Guardfile
```

```
rails g integration_test tasks
```
will create:
```
     create    spec/requests/tasks_spec.rb
```



Gem dependancies
----------------
update your Gemfile to include required assets.
>>>>>>> b72b1fc3cbc3677ead3dccbeac283f8cad15c1f3

console
-------
To open up a command line console (similar to IRB) run 

```
rails c
```

Databases
---------
to create a database schema you must run
```
rake db:migrate.
```

Gems
====
bundle
------
to show where your bundled gem is installed.
```
bundle show <gemname>
```

Routes
======
```
rake routes
```
or view in 
```
config/routes
```

can create routes by adding
```
:resources tasks to config/routes
```