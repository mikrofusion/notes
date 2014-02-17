FactoryGirl
===========

create multiple factories via inheritance (note the draft post vs
published post)
----------------------------------------------------------------
FactoryGirl.define do
  factory :post do
    title 'New post'

    factory :draft_post do
      published_at nil
    end

    factory :published_post do
      published_at Date.new(2012, 12, 3)
        end
      end

  factory :page do
    title 'New page'
 
    factory :draft_page do
      published_at nil
    end

    factory :published_page do
      published_at Date.new(2012, 12, 3)
    end
  end
end

FactoryGirl.create :draft_page
FactoryGirl.create :published_post

traits (better way to refactor the above inheritance)
------------------------------------------------------

FactoryGirl.define do
  factory :post do
    title 'New post'
  end

  factory :page do
    title 'New page'
  end

  trait :published do
    published_at Date.new(2012, 12, 3)
  end

  trait :draft do
    published_at nil
  end
end

FactoryGirl.create :post, :published
FactoryGirl.create :page, :draft

callbacks (after_create, before_create)
---------------------------------------
FactoryGirl.define do
  factory :comment do
    author 'Anonymous'
    body 'Great post, man!'
    approved_at Date.new(2012, 3, 6)
    post
  end

  factory :post do
    title 'New post'
  end

  trait :with_comments do
    after :create do |post|
      FactoryGirl.create_list :comment, 3, :post => post
    end
  end
end

ignored attributes (better way than using callbacks)

it :with_comments do
  ignore do
    number_of_comments 3
  end
  
  after :create do |post, evaluator|
    FactoryGirl.create_list :comment, evaluator.number_of_comments,
:post => post
  end
end

Note that a special second argument is passed to the callback block, the evaluator, which knows about the ignored attributes. Now you can simply pass in the ignored attribute like you do a regular attribute:

FactoryGirl.create :post, :with_comments, :number_of_comments => 4

Sequence
--------
FactoryGirl.define do
  factory :user do
    sequence(:email) {|n| "email#{n}@factory.com" }
    password "foobar"
    password_confirmation "foobar"
  end
end


references
----------
http://arjanvandergaag.nl/blog/factory_girl_tips.html
https://github.com/thoughtbot/factory_girl/blob/master/GETTING_STARTED.md
https://github.com/thoughtbot/factory_girl/wiki/Usage
