rails _3.2.16_ new todo_mvc_rails --skip-test-unit
cd todo_mvc_rails
bundle install
add .DS_Store to .gitignore

modify Gemfile:
```
group :development, :test do
    gem 'sqlite3'
end

group :production do
    # heroku uses postgres
    gem 'pg'
end 
```

add to config/application.rb:
```
module TodoMvcRails
  class Application < Rails::Application

    config.assets.initialize_on_precompile = false
```

bundle install

git add .
git commit -m "initial commit"

heroku create
git push heroku master
heroku open

==================================================
git checkout -b "index"
rails generate model Todo title:string completed:boolean

creates the following:
    create    db/migrate/20140124064027_create_todos.rb
      create    app/models/todo.rb

rake db:migrate

 before_create :set_default_completed

  def set_default_completed
    self.completed ||= false
  end

rails c --sandbox


rails generate controller Todos list
      create  app/controllers/todos_controller.rb
       route  get "todos/list"
      invoke  erb
      create    app/views/todos
      create    app/views/todos/list.html.erb
      invoke  helper
      create    app/helpers/todos_helper.rb
      invoke  assets
      invoke    coffee
      create      app/assets/javascripts/todos.js.coffee
      invoke    scss
      create      app/assets/stylesheets/todos.css.scss

in config/routes:
  #get "todos/list"
  root to: 'todos#list'





