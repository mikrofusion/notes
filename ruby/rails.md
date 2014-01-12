Rails
=====

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