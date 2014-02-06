


factory_girl
------------

in factories.rb
Factory.define :user do |f|
  f.username = 'foo'
  f.password = 'foobar'
  f.password_confirmation = { |u| u.password }
  f.sequence(:email) { |n| "test#{n}@example.com"
end
Factory.define :article do |f|
  f.name "Foo"
  f.association :user
end


in test_helper

Factory.build, factory.create (actually write to database),
Factory.attributes_for (returns a hash), Factory = Factory.create

require File.dirname(__FILE__) + '/factories'

describe User do
  it "should authenticate with matching username and password" do
    user = Factory.create(:user, :username => 'bob, :password =>
'secret')
    User.authenticate('bob', 'secret').should == user
  end
end



============================================
minitest
--------
rails new store -T

add to Gemfile
group :test do
  gem 'minitest'
end

test/minitest_helper.rb
ENV["RAILS_ENV"] = "test"
require File.expand_path("../../config/environment", __FILE__)
require "minitest/autorun"


test/models/product_test.rb
require "minitest_helper"

class ProductTest < MiniTest::Unit::TestCase
  def test_to_param
    product = Product.create!(name: "Hello World")
    assert_equal "#{product.id}-hello-world", product.to_param
  end
end
or

describe Product do
  it "includes name in param" do
    product = Product.create!(name: "Hello World")
    "product.to_param.must_equal #{product.id}-hello-world"
  end
end



rake db:test:prepare

lib/task/minitest.rake

require 'rake/testtask'

Rake::TestTask.new(:test => 'db:test:prepare') do |t|
  t.libs << 'test'
  t.pattern = "test/**/*_test.rb"
end

task :default => :test

turn gem









Test syntax

UNIT	SPEC	ARGUMENTS	EXAMPLES

assert_empty
refute_empty

must_be_empty
wont_be_empty

obj, msg=nil
assert_empty []

refute_empty [1,2,3]

[].must_be_empty

[1,2,3].wont_be_empty



assert_equal
refute_equal

must_equal
wont_equal

exp, act, msg=nil
assert_equal 2, 2

refute_equal 2,1

2.must_equal 2

2.wont_equal 1



assert_in_delta
refute_in_delta

must_be_within_delta
wont_be_within_delta

exp, act, dlt=0.001, msg=nil
assert_in_delta 2012, 2010, 2

refute_in_delta 2012, 3012, 2

2012.must_be_within_delta 2010, 2

2012.wont_be_within_delta 3012, 2




must_be_close_to
wont_be_close_to

act, dlt=0.001, msg=nil
2012.must_be_close_to 2010, 2

2012.wont_be_close_to 3012, 2



assert_in_epsilon
refute_in_epsilon

must_be_within_epsilon
wont_be_within_epsilon

a, b, eps=0.001, msg=nil
assert_in_epsilon 1.0, 1.02, 0.05

refute_in_epsilon 1.0, 1.06, 0.05

1.0.must_be_within_epsilon 1.02, 0.05

1.0.wont_be_within_epsilon 1.06, 0.05



assert_includes
refute_includes

must_include
wont_include

collection, obj, msg=nil
assert_includes [1, 2], 2

refute_includes [1, 2], 3

[1, 2].must_include 2

[1, 2].wont_include 3



assert_instance_of
refute_instance_of

must_be_instance_of
wont_be_instance_of

klass, obj, msg=nil
assert_instance_of String, "bar"

refute_instance_of String, 100

"bar".must_be_instance_of String

100.wont_be_instance_of String



assert_kind_of
refute_kind_of

must_be_kind_of
wont_be_kind_of

klass, obj, msg=nil
assert_kind_of Numeric, 100

refute_kind_of Numeric, "bar"

100.must_be_kind_of Numeric

"bar".wont_be_kind_of Numeric



assert_match
refute_match

must_match
wont_match

exp, act, msg=nil
assert_match /\d/, "42"

refute_match /\d/, "foo"

"42".must_match /\d/

"foo".wont_match /\d/



assert_nil
refute_nil

must_be_nil
wont_be_nil

obj, msg=nil
assert_nil [].first

refute_nil [1].first

[].first.must_be_nil

[1].first.wont_be_nil



assert_operator
refute_operator

must_be
wont_be

o1, op, o2, msg=nil
assert_operator 1, :<, 2

refute_operator 1, :>, 2

1.must_be :<, 2

1.wont_be :>, 2



assert_output

must_output

stdout = nil, stderr = nil
assert_output("hi\n"){ puts "hi" }

Proc.new{puts "hi"}.must_output "hi\n"



assert_raises

must_raise

*exp
assert_raises(NoMethodError){ nil! }

Proc.new{nil!}.must_raise NoMethodError



assert_respond_to
refute_respond_to

must_respond_to
wont_respond_to

obj, meth, msg=nil
assert_respond_to "foo",:empty?

refute_respond_to 100, :empty?

"foo".must_respond_to :empty?

100.wont_respond_to :empty?



assert_same
refute_same

must_be_same_as
wont_be_same_as

exp, act, msg=nil
assert_same :foo, :foo

refute_same ['foo'], ['foo']

:foo.must_be_same_as :foo

['foo'].wont_be_same_as ['foo']



assert_silent

must_be_silent

-
assert_silent{ 1 + 1 }

Proc.new{ 1 + 1}.must_be_silent



assert_throws

must_throw

sym, msg=nil
assert_throws(:up){ throw :up}

Proc.new{throw :up}.must_throw :up


Test Setup

UNIT	SPEC
setup()	before(type = nil, &block)
teardown()	after(type = nil, &block)










=========================================

git remote set-url origin https://github.com/mikegroseclose/notes.git

.cane
lib/tasks/cane

Ruby developers have a number of testing libraries to choose from. RSpec, Shoulda and Test::Unit are the most popular but in this episode we’re going to look at minitest. Not only is this library fast and lightweight, it comes built-in with Ruby 1.9. Rails developers should pay special attention to it as it looks like it will be the default test environment in Rails 4.0. That day is a long way off yet, so let’s take a look at what’s involved in using minitest with Rails 3.2. By the way, this episode isn’t meant to be a complete guide to testing. If you’re new to testing you should first take a look at episode 275 which covers testing from scratch.
Getting Started With Minitest
The first thing we’ll do is generate a new Rails 3.2 application. We’ll pass in the -T option to tell it not to use Test::Unit.
terminal
$ rails new store -T
As we’ve told Rails to skip the tests there’ll be no /test directory in this app and in its config/application.rb file the test_unit railtie will be commented out. This means that the test-related Rake tasks will not be available.
/config/application.rb
require File.expand_path('../boot', __FILE__)

# Pick the frameworks you want:
require "active_record/railtie"
require "action_controller/railtie"
require "action_mailer/railtie"
require "active_resource/railtie"
require "sprockets/railtie"
# require "rails/test_unit/railtie"

# rest of file omitted.
This also means that generators won’t create any test files. We’ll generate a scaffold for a product to demonstrate this.
terminal
$ rails g scaffold product name price:decimal released_on:date
      invoke  active_record
      create    db/migrate/20120226100043_create_products.rb
      create    app/models/product.rb
       route  resources :products
      invoke  scaffold_controller
      create    app/controllers/products_controller.rb
      invoke    erb
      create      app/views/products
      create      app/views/products/index.html.erb
      create      app/views/products/edit.html.erb
      create      app/views/products/show.html.erb
      create      app/views/products/new.html.erb
      create      app/views/products/_form.html.erb
      invoke    helper
      create      app/helpers/products_helper.rb
      invoke  assets
      invoke    coffee
      create      app/assets/javascripts/products.js.coffee
      invoke    scss
      create      app/assets/stylesheets/products.css.scss
      invoke  scss
      create    app/assets/stylesheets/scaffolds.css.scss
As you can see the generator didn’t create any test-related files. We’ll be using this scaffold for our tests so now’s a good time to run rake db:migrate to create the products table. Now we have a blank slate for testing so let’s add minitest. To start we’ll add its gem to the test group in the gemfile and then run bundle to install it.
/Gemfile
source 'https://rubygems.org'

gem 'rails', '3.2.1'

# Bundle edge Rails instead:
# gem 'rails', :git => 'git://github.com/rails/rails.git'

gem 'sqlite3'


# Gems used only for assets and not required
# in production environments by default.
group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'

  # See https://github.com/sstephenson/execjs#readme for more supported runtimes
  # gem 'therubyracer'

  gem 'uglifier', '>= 1.0.3'
end

gem 'jquery-rails'
group :test do
  gem 'minitest'
end
Minitest comes built-in to Ruby 1.9 but by using the gem we’re using the latest version and it’s easier to manage the version dependencies.
Our First Test
Now its time to add our first test. Before we can do this, though, we need to get minitest set up. We’ll do this inside a new/test directory with a minitest_helper.rb file.
/test/minitest_helper.rb
ENV["RAILS_ENV"] = "test"
require File.expand_path("../../config/environment", __FILE__)
require "minitest/autorun"
The first two lines of code in here should look familiar if you’ve seen the standard generated test helper. The first line forces the test environment while the second loads up the Rails application. We also need to start minitest and that’s what the last line does.
Now that we have minitest set up we’ll write our first test, which will be a model test. We’ll put this is a models directory, but you’re free to structure your tests in any way you want. There are a couple of different ways to create tests with minitest either in a Test::Unit style or in an RSpec style. We’ll use the Test::Unit style first.
/test/model/product_test.rb
require "minitest_helper"

class ProductTest < MiniTest::Unit::TestCase
  def test_to_param
    product = Product.create!(name: "Hello World")
    assert_equal "#{product.id}-hello-world", product.to_param 
  end
end
To write tests in this style we need to create a class that inherits from MiniTest::Unit::TestCase. All methods that start withtest_ are considered test methods so we’ve called ours test_to_param. Our objective here is to override the model’s to_parammethod so that it includes the name as well as the product’s id so in the test we create a new Product and use assert_equalto test that calling to_param on a product with a name of “Hello World” returns the product’s id followed by “-hello-world”.
We can run the test now and we’ll run it through the ruby command. We need to include the test directory so that it can find the minitest_helper file, so we pass in the -I option here.
terminal
$ ruby -Itest test/models/product_test.rb
When we run this we see the error Could not find table 'products'. This happens because when we ran the database migration earlier it only created the table in the development database. To get the test database into the correct state we’ll need to run rake db:test:prepare. When this command has finished we can run our tests again.
terminal
$ ruby -Itest test/models/product_test.rb 
Run options: --seed 5437

# Running tests:

F

Finished tests in 0.027575s, 36.2647 tests/s, 36.2647 assertions/s.

  1) Failure:
test_to_param(ProductTest) [test/models/product_test.rb:6]:
Expected: "1-hello-world"
  Actual: "1"

1 tests, 1 assertions, 1 failures, 0 errors, 0 skips
This time the test runs, but it fails as calling to_param on our product has returned 1 instead of 1-hello-world. This isn’t a surprise as we haven’t overridden to_param in the Product model so let’s do that now.
/app/models/product.rb
class Product < ActiveRecord::Base
  def to_param
    "#{id}-#{name.parameterize}"
  end
end
When we run the test now it passes.
terminal
$ ruby -Itest test/models/product_test.rb 
Run options: --seed 2230

# Running tests:

.

Finished tests in 0.177981s, 5.6186 tests/s, 5.6186 assertions/s.

1 tests, 1 assertions, 0 failures, 0 errors, 0 skips
Creating a Rake Task
It’s a pain to have to run that long ruby command every time we want to run our test so we’ll move it into a new Rake task.
/lib/tasks/minitest.rake
require "rake/testtask"

Rake::TestTask.new(:test => "db:test:prepare") do |t|
  t.libs << "test"
  t.pattern = "test/**/*_test.rb"
end

task :default => :test
Here we use Rake::TestTask to create a new task. This task will also run the db:test:prepare task so that we don’t need to worry about running it manually when we create further migrations. The code for this task adds the test directory to the load paths and then runs any file under the test directory whose filename ends in _test.rb. Finally we set this to be the default task so that it will run if we just run rake without any arguments.
As our test suite gets larger we could make this logic more complex and add new tasks that only run, say, the model tasks, but for our simple application this will work perfectly well. Running rake now will run our test just like the ruby command did before.
Fixtures
So now we now how to create model tests and run them easily. When we have model tests we usually have data for test models and by default in Rails this is done by using fixtures. Fixtures aren’t as popular as they once were and it’s more common now to use factories to generate model classes by using gems such as FactoryGirl or MiniSkirt. We won’t be using fixtures here, but if you do want to use them they’re easy enough to add and you can see a good example in this gist.
RSpec style tests
We mentioned earlier that minitest test can be written in either Test::Unit or RSpec styles. In order to demonstrate them both we’ll convert our existing test to the RSpec style. We can use describe blocks in minitest and also it blocks, just like we would in RSpec.
/test/models/product_test.rb
require "minitest_helper"

describe Product do
  it "includes name in to_param" do
    product = Product.create!(name: "Hello World")
    product.to_param.must_equal "#{product.id}-hello-world"
  end
end
RSpec style assertions are a little different. To test for equality we can all a must_equal method on any object and then pass a value to do an assertion. When we run rake now our Rspec-style test should pass just like the old one did.
The must_equal method that we used to do the assertion is one of the many methods that minitest provides for assertions. To see what else you can use take a look at the documentation. There’s even a negative variation of each assertion that begins withwont_.
Integration Testing
Now that we have model testing sorted out let’s move on to integration testing. This can be considered the most important kind of testing in a Rails application as it’s the only type which tests the entire stack. Capybara is a popular way to do integration testing in Rails applications so we’ll use it here. As with minitest we’ll need to add its gem to the test group and run bundle to install it.
/Gemfile
group :test do
  gem 'minitest'
  gem 'capybara'
end
We’ll create our integration tests in an integration subdirectory, though as before, you’re free to structure your tests in any way you like.
/test/integration/products_integration_test.rb
require "minitest_helper"

describe "Products integration" do
  it "shows product's name" do
    product = Product.create!(name: "Tofu")
    visit product_path(product)
    page.text.must_include "Tofu"
  end
end
This integration test is structured very similarly to the model test we wrote earlier. This time we create a new Product, visit its page and check that its name is shown. If we try to run this test it won’t work. Minitest doesn’t know about any of our app’s special methods such as product_path or about any Capybara methods. We need to add some functionality to the integration tests for this to work and we’ll do this inside our minitest_helper file.
We’ll create a new class in this file specifically for integration testing. We do this by having the class inherit fromMiniTest::Spec. To get URL helpers working we include Rails.application.routes.url_helpers. For Capybara we have to require capybara/rails at the top of the file and then include Capybara::DSL in the class.
To tell minitest to use this class for integration tests we use the class method register_spec_type. This takes a regular expression which is used to match the name passed to the describe blocks in out tests. We’ll match anything that ends inintegration. We also need to pass in the class to use and we use self here so that this class is used for all integration tests.
/test/minitest_helper.rb
ENV["RAILS_ENV"] = "test"
require File.expand_path("../../config/environment", __FILE__)
require "minitest/autorun"
require "capybara/rails"

class IntegrationTest < MiniTest::Spec
  include Rails.application.routes.url_helpers
  include Capybara::DSL
  register_spec_type(/integration$/, self)
end
Now any test whose description ends with “integration” will pick up the behaviour of the IntegrationTest class. When we run our tests now they both pass.
terminal
$ rake
Run options: --seed 40314

# Running tests:

..

Finished tests in 0.485831s, 4.1167 tests/s, 6.1750 assertions/s.

2 tests, 3 assertions, 0 failures, 0 errors, 0 skips
The integration test passes despite us not making any changes to the controller or views as the scaffolding code already has the behaviour that we’ve tested.
Testing Helpers
Now that we know how to do integration testing lets take a look at testing some of the other layers. We wouldn’t normally test views and controllers directly as we have integration tests and we can move any complex controller logic off into a model. Separate helper tests are still useful, however. We don’t have any methods in our ProductsHelper to test so instead we’ll test one of Rails’ built-in helper methods. These tests look similar again to model and integration tests.
/test/helpers/product_helper_test.rb
require "minitest_helper"

describe ProductsHelper do
  it "converts number to currency" do
    number_to_currency(5).must_equal "$5.00"
  end
end
This test will throw an error because our simple minitest doesn’t know about the number_to_currency helper method. We’ll have to add this behaviour to it and to do so we do something similar to what we did to get integration tests working.
/test/minitest_helper.rb
ENV["RAILS_ENV"] = "test"
require File.expand_path("../../config/environment", __FILE__)
require "minitest/autorun"
require "capybara/rails"
require "active_support/testing/setup_and_teardown"

class IntegrationTest < MiniTest::Spec
  include Rails.application.routes.url_helpers
  include Capybara::DSL
  register_spec_type(/integration$/, self)
end

class HelperTest < MiniTest::Spec
  include ActiveSupport::Testing::SetupAndTeardown
  include ActionView::TestCase::Behavior
  register_spec_type(/Helper$/, self)
end
We’ve created a HelperTest class similar to the IntegrationTest class we created earlier and like that class this one includes a couple of modules and then uses register_spec_type to define the tests that should use this extra behaviour. Any test whose describe block’s description ends with Helper will use this class. Note that as the ActiveSupport::Testing::SetupAndTeardownmodule isn’t included in Rails by default we’ve had to require it manually.
When we run our tests now they all pass again as the helper test has access to Rails’ helper methods.
Minitest’s Other Features
There are several features that minitest provides which we haven’t covered yet so we’ll show a few of them now.
We can mark a test as skipped in a couple of different ways. One way is to remove the block so that we just have the call to it. The other is to call skip inside the test definition.
/test/helpers/product_helper_test.rb
require "minitest_helper"

describe ProductsHelper do
  it "converts number to currency" do
    number_to_currency(5).must_equal "$5.00"
  end
  
  it "is skipped"
  
  it "is also skipped" do
    skip "Do this later"
  end
end
When we run the tests now two of them will be shown as skipped.
terminal
$ rake
Run options: --seed 10956

# Running tests:

...

Finished tests in 0.688833s, 4.3552 tests/s, 5.8069 assertions/s.

3 tests, 4 assertions, 0 failures, 0 errors, 0 skips
Another interesting part of the test output is the seed value which is shown. This is used to randomize the order in which the tests are run in minitest so that the chance that a test is only passing because of state carried over from a previous test is reduced. If we find a bug where a test fails we can rerun it using the same seed value to make sure that this problem has been fixed. We do this by passing a TESTOPTS environment variable and passing in the seed’s value like this:
terminal
$ rake TESTOPTS='--seed=44780'
Run options: --seed=44780
This will run the tests using that seed so that they’re run in the same order again.
Turn
We’ll finish this episode by showing how the tests’ output can be improved by using the Turn gem. This isn’t strictly related to minitest but it works well with it. To use it we’ll need to add it to the gemfile and then run bundle again.
/Gemfile
group :test do
  gem 'minitest'
  gem 'capybara'
  gem 'turn'
end
When we run the tests now the output is quite a bit different.
￼
By default the output is more verbose and shows more detail about each test and its status. It we look at Turn’s README we’ll see that there are many different configuration options that we can use to customize the way the output looks.
We can customize turn in our minitest_helper file by adding this line at the bottom.
/test/minitest_helper.rb
Turn.config.format = :outline
When we run the tests again the output looks quite different. If you don’t like this option there are a number of others from which you can choose.
￼
That’s it for our look at minitest with Rails. Hopefully it will have given you some idea on how you can customize minitest to fit the way you test your Rails applications. To see another approach take a look at the minitest-rails gem. This includes some generators for setting up minitest in your Rails apps and its source code is straightforward so it’s worth reading through to see how else you can set up minitest.
Finalyl we’ll mention one other gem, capybara_minitest_spec. This includes some methods that we can use in integration tests with Capybara that work very similarly to what we’d do with RSpec. If you’re missing the matchers you get with RSpec take a look as this gem.






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
