



create raisl project
--------------------
rails new first_app   <- note snakecase
cd first_app

open project directory
---------------------
open . 

install gems
------------
bundle install

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