git clone git://github.com/heroku/ruby-sample.git
cd ruby-sample

------------------------
install 
-------
install heroku via heroku-toolbelt

heroku create
git push heroku master
heroku 




heroku create
heroku push heroku master
heroku logs
heroku run rake db:migrate
heroku open


rename application
------------------
```
heroku rename railstutorial
```

create random domain name
--------------------------
￼(‘a’..’z’).to_a.shuffle[0..7].join



heroku and databases
--------------------
Heroku uses the PostgreSQL database (pronounced “post-gres-cue-ell”, and often called “Postgres” for short), which means that we need to add the pg gem in the production environment to allow Rails to talk to Postgres:


Add to your Gemfile:
```
group :production do
  gem 'pg', '0.12.2'
end
```

To install it, we run bundle install with a special flag:
```
bundle install --without production
```
The ```--without production``` option prevents the local installation of any production gems, which in this case is just pg. (Because the only gem we’ve added is restricted to a production environment, right now this command doesn’t actually install any additional local gems, but it’s needed to update Gem- file.lock since that’s what Heroku uses to infer the gem requirements of our application.)