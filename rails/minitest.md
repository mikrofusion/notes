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
