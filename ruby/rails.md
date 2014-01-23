

# = instance method
:: = class method

Use :: for describing class methods, # for describing instance methods, and use . for example code

for example
    
    ```
    Class::method
    class = Class.new
    ```

```class.method``` should be written as ```Class#method``` in documentation
and when used in examples would be written ```class.method```




require 'mini-test/spec'

ruby minitest-cheat-sheet

https://twitter.com/tenderlove - 

youtube - confreaks
2013 rails conf aaron patterson
keynote 

http://www.youtube.com/watch?v=5kgUL_FfUZY
http://www.youtube.com/watch?v=cGdCI2HhfAU

dhh keynote

turbo links


=====================================

pwd 

rails _3.2.16_ new sample_app --skip-test-unit
rails new sample_app --skip-test-unit
cd sample app
subl .

modify gemfile with the following:
```
	source 'https://rubygems.org'

	gem 'rails', '3.2.16'
	gem 'bootstrap-sass', '2.1'
	gem 'bcrypt-ruby', '3.0.1'
	gem 'faker', '1.0.1'
	gem 'will_paginate', '3.0.3'
	gem 'bootstrap-will_paginate', '0.0.6'
	gem 'jquery-rails', '2.0.2'

	group :development, :test do
	  gem 'sqlite3', '1.3.5'
	  gem 'rspec-rails', '2.11.0'
	  gem 'guard-rspec', '1.2.1'
	  gem 'guard-spork', '1.2.0'
	  gem 'childprocess', '0.3.6'
	  gem 'spork', '0.9.2'
	end

	# Gems used only for assets and not required
	# in production environments by default.
	group :assets do
	  gem 'sass-rails',   '3.2.5'
	  gem 'coffee-rails', '3.2.2'
	  gem 'uglifier', '1.2.3'
	end

	group :test do
	  gem 'capybara', '1.1.2'
	  gem 'factory_girl_rails', '4.1.0'
	  gem 'cucumber-rails', '1.2.1', :require => false
	  gem 'database_cleaner', '0.7.0'
	  # gem 'launchy', '2.1.0'
	  # gem 'rb-fsevent', '0.9.1', :require => false
	  # gem 'growl', '1.0.3'
	end

	group :production do
	  gem 'pg', '0.12.2'
	end
```
bundle --without production

rails generate rspec:install
 - will give error because folder does not exists.. so create it

git init
add .DS_Store to .git_ignore
git add .
git commit -m "initial commit"

 heroku create --stack cedar

 git push heroku master

 will give error so need to add:
 config.assets.initialize_on_precompile = false in config/application.rb
  - additional documentation here:  http://simonecarletti.com/blog/2012/02/heroku-and-rails-3-2-assetprecompile-error/
  - 
http://guides.rubyonrails.org/asset_pipeline.html#precompiling-assets
example:
```
module SampleApp
  class Application < Rails::Application

    config.assets.initialize_on_precompile = false
```

create a static page.. public/hello.html
<!DOCTYPE html>
    <head (hit tab here for sublime to autogenerate the rest of the html)

start rails
    rails s


rails generate controller StaticPages home help

undo 
 rails destroy controller StaticPages home help

 prevent static pages from beign created

 rails generate controller StaticPages home help --no-test-framework

creates these pages
 ```
      create  app/controllers/static_pages_controller.rb
       route  get "static_pages/help"
       route  get "static_pages/home"
      invoke  erb
      create    app/views/static_pages
      create    app/views/static_pages/home.html.erb
      create    app/views/static_pages/help.html.erb
      invoke  helper
      create    app/helpers/static_pages_helper.rb
      invoke  assets
      invoke    coffee
      create      app/assets/javascripts/static_pages.js.coffee
      invoke    scss
      create      app/assets/stylesheets/static_pages.css.scss
 ```

rails generate integration_test static_pages


in spec/requests/static_pages_spec.rb
```
require 'spec_helper'

describe "StaticPages" do

 	describe "Home page" do
 		it "should have the content 'Sample App'" do
 			visit '/static_pages/home'
 			page.should have_content('Sample App')

 			---> or you can say

 			page.should have_selector('h1' :text=> 'Sample App')

 		end
 	end
end

```
run
bundle exec rspec spec/requests/static_pages_spec.rb

will fail, update /app/views/static_pages/home* to include sample app

NOTE:  can set up rspec to run from within sublime
rspec sublime setup
bit.ly/rails_tutorial_advanced_setup

also run spork to remove test overhead

command + shift + R - run rspec

bundle install --binstubs allows you to run rspec without bundle exec

modify rubytest settings:
  "check_for_rvm": true,
    "run_rspec_command": "bundle exec rspec {relative_path}",
  "run_single_rspec_command": "bundle exec rspec {relative_path} -l{line_number}",

  shift+comdand+e to run test again

  rspec spec
==============================

class ApplicationHelper
    def full_title(page_title)
        base_title = 'blah'
    if page_title.empty?
        base_title
    else
        "#{base_title} | #{page_title}"
    end
    end
end

<%= full_title(yeild(:title)) %>



app/model/concerns
concerns
 - partial for models

module <Class>
    
end

modeul ClassMethods

private

putc
puts
print

methods ending with ? should be treated as boolean methods (i.e. return true or false)

puts "one of the strings is empty" if x.empty? || y.empty?

puts "x is not empty" if !x.empty?
puts "x is not empty" unless x.empty


nil.nil?

a.sort
a.sort!

a.shuffle

a.push(6) is the same as a << 6

(0..9).to_a
a = %w[foo bar baz quux]
('a'..'e').to_a

(1..5).each { |i| puts 2 * i }
(1..5).each do |number| 
    puts 2 * |number|
end

(1..5).map { |i| i**2 }

('a'..'z').to_a.shuffle[0..7].join
premature optimization is the root of all evil

Hash
user = {}

user[:first_name] = 'mike'

:name.to_s

user = { :name => 'mike'} --- in ruby 1.9 and above is equal to
```
    user = {name: 'mike'}
```

hash of hash
------------
params = {}
params[:user] = { name: 'mike', email: 'mike@example.com' }

params.each do |key, value|
    puts "key #{key} has value #{value}"
end

puts a.inspect is the same as p a

method names do not need () for the arguments and if a hash is the last argument it does not need {}
i.e. 
style_sheet_link_tag("application", {:media => "all"}) is equal to
style_sheet_link_tag "application", :media => "all"
style_sheet_link_tag "application", media: "all"

h = Hash.new is the same as h = {}

s = "foobar"
s.class.superclass.superclass

string -> object -> basicobject -> nil

class Word < String
    def palindrome?
        self == self.reverse
    end
end

w = Word.new("level")
w.palindrome
w.length
w.class.superclass
w.class

add palindrome to String class

class String
    def palindrome?
        self == self.reverse
    end
end


20.years.ago
20.years.from_now
"".blank?
nil.blank?

class User
    attr_accessor :name, :email

    def initialize(attributes = {})  # default argument
        @name = attributes[:name]
        @email = attributes[:email]

    def formatted_email
        "#{@name} #{@email}"
    end
end



include file 

require './user'

note:  isntance variables created inside the controller are available inside the views


ruby-docs.org/core-1.9.3/String

<%= link_to 'sample app', "#", id:'logo' %>


<%= link_to image_tag('', alt: 'rails'), ''

csrf_meta_tags


app/assets/stylesheets/custom.css.scss
@import 'bootstrap'
add bootstra-sass-gem

partials start with an __
_shim.html_
include vi
render 'layouts/shim'


rails asset pipeline
 - prev versions all had them in public directory

newer versions of rails has stylesheets javascript and images in 3 places
vendor/assets/(javascripts/stylesheets) (these are for third party assets)
lib/assets --- for custom javascript / third parts
app/assets -- for this projects stuff

custom.css.scss.erb (first run ERB tehn SCSS then css)


scss every valid css file is an scss file

.center {
    
}

.center h1 {
    
}

.center h1:hover {
    
}

is euqal to in scss

.center {
    h1 {
        &:hover {
        }
    }
}

you can also use variables like:
$lightGrey = 999

bootstrap less @variable = $variable (i.e. colors) wiht the gem

named routes
============
visit root_path
visit contact_path

root :to => 'static_pages#index' (delete public index)
match '/help', to:'static_pages#help'


rails generate controller Users new --no-test-framework
match '/signup', to:'users#new'
rails generate model User name:string email:string

create_table :users do |t|
    t.string :name
    t.string :email
    t.timestamps
end

bundle exec rake db:migrate
bundle exec rake db:rollback


for irriversable migrateions use raisl

sqllgiht database browser

get info - open with (sqlight database browser) change all

sandbox 
-------
any modifications done get rolled back when you exit
rails console --sandbox 


User.new(name:"", email:"")
User.save

User.create
User.destroy
User.find(<id>)
User.first
User.find(3) # throws an exception if not found
User.find_by_id # same as find, but returns nil if not found
User.find_by_email
User.find_by_name
user.email = ""
user.save

user.update_attributes(name:"dude", email:'dud@dudeabides')
 - updates the directory directly

rake db:test:prepare


validates :name, prescence: true, length: {maximum:50}
rubular.com
VALID_EMAIL_REGEX = ''
validates :email, presence: true, format: {with: VALID_EMAIL_REGEX},
            uniqueness: {case_sensitive: false}


enforce uniqueness at the database layer as well to prevent race conditions.  rails generate migration add_index_to_users_email

class AddIndexToUsersEmail < ActiveRecord::Migration
    def change
        add_index :users, :email, unique:true
    end

define_method <string>

before_save { |user| user.email = user.email.downcase}

password_digest as a column in a database allows you to use the has_secure_password

rails generate migration add_password_digest_to_users password_digest:string

rake db:test:prepare


attr_accessible :name, :email, :password, :password_confirmation
has_secure_password

validates :password, presence: true, length: {minimum: 6}
validates :password_confirmation, presence: true

user = User.find_by_email(email)
user = user.authenticate(password)

api.rubyonraisl.org
guide.rubyonrails.org


debug(params) if Rails.env.development?

deevelopment / test / production environment
rails.env.development?


@mixin

sublime sass highligher

rake db:reset


























==========================
=====

couchbase successor to memcache

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