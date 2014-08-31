PRY


---





Edit
Edit-method

edit -m (opens file where current binding pry is being called"
edit "Todo#create" (edit method where model = Todo, and method = create"

GIT WORKFLOW
============
git fetch
---------
keep in sync with other branches

PREPARE FOR PULL REQUEST
 - <on feature branch>
 - git add <files>
 - git commit -m "<commit comments>"
 - git checkout <base branch>
 - git pull --rebase
 - git reset --hard
 - git rebase -i <base branch> <feature branch>
    (alternatively could do:
      "git checkout <feature branch>"
      "git rebase <feature branch> -i"
    )
 - git push -f origin <branchname>
DO PULL REQUEST
 - git checkout <base branch>
 - git pull --rebase
 - git reset --hard
 - git merge <feature branch> --no-ff
NOTE A:  POTENTIAL FOR OTHER COMMITS TO OCCUR HERE
 - git push
NOTE:  IF AN ERROR OCCURS DUE TO A CHANGE ON BASE BRANCH INSERT NOTE B
DELETE BRANCH
 - git push origin :<feature branch>

NOTE B:
 - git reset --hard (alternatively "git reset HEAD")
 - git pull
 - git merge <feature branch>
 - git push

https://gist.github.com/staltz/868e7e9bc2a7b8c1f754

http://jsfiddle.net/staltz/8jFJH/59/
=========================

Lgtm


git commit --amend

git cherry pick commit
======================
git cherry-pick <SHA-hash>

TDD / MiniTest
==============
require "minitest_helper"

describe Controller do

  describe "POST create" do

    context "when user is <blah>" do
      let(:blah) { create(:blah) }

      before do
        blah.wont_be_nil
        foo.deleted?.must_equal true
        post :create, id: blah.id
      end

      it "will <bleh>" # skip test

      it "redirects to <x>" do
        assert_redirected_to <lkajs>
      end

      it "requires <y> to log in" do
        response.body.must_equal '<message>'
      end
    end
  end
end

whenever you run a migration::
bundle exec rake db:test:load

bundle exec rake test TEST=/test/
remove-banner-from-weedmaps-65657624

Precompile Assets
----------------
If you precompile on your local machine, then you can commit these generated assets into the repository and proceed with deployment. No need to compile them on production machine.

But it introduces a problem: now when you change source files (coffescript / scss), the app won't pick up the changes, because it will serve precompiled files instead. rake assets:clean deletes these precompiled files.

In my projects assets are precompiled as a part of deployment. Capistrano makes it very easy.

Also, I never heard of rake assets:cleanup.


look into
---------
http://en.wikipedia.org/wiki/CAP_theorem
docker ansible
elastiserach parametic

postgres vaccuum

karmi.github.io/elastisearch parametric
https://github.com/karmi/elasticsearch-paramedic

https://github.com/karmi/elasticsearch-paramedic
grape, swaggar, figaro

github &w=1 remove whitespace

! remove last command

htop

ey ssh -e


host www.google.com

https://drone.io/pricing
https://circleci.com/
https://www.codeship.io/

http://rails-bestpractices.com/posts/15-the-law-of-demeter

note:  dont use default scope
http://en.wikipedia.org/wiki/CAP_theorem

http://stevelosh.com/blog/2010/09/coming-home-to-vim/

; set leader key
nnoremap <leader>a :Ack

inoremap jj <ESC>

C + w, o - zoom in and out of window
C + w, = - make splits same size

http://www.viemu.com/a-why-vi-vim.html

github (git blame)
http://mislav.uniqpath.com/2014/02/hidden-documentation/

tmux cheat sheet
---------------
leader t
tmux notes
leader r

g - t, g shiftT
tabedit


o, ;

================

rescue boxes
cd `bundle show jquery-ui-rails`

http://blog.codeclimate.com/blog/2012/10/17/7-ways-to-decompose-fat-activerecord-models/

fibers in ruby:
http://stackoverflow.com/questions/9052621/why-do-we-need-fibers

Jasmine - Domain Specific Language (DSL) for Test Driven Development
 git checkout <branch> -- <filename>
git info <chore>

https://www.relishapp.com/rspec/rspec-rails/docs/controller-specs/anonymous-controlle://www.relishapp.com/rspec/rspec-rails/docs/controller-specs/anonymous-controller

redifine plus method.. one out of every 100 times will return 42gi

broken window syndrome
https://gist.github.com/dickeyxxx/8748418

git branching
http://nvie.com/posts/a-successful-git-branching-model/

VIM
visual block mode
-----------------
ctrl v - visual block mode
shift i - insert
shift a - insert (after)
shift c - cut
p - put
d - delete
shift r <key> - replace with key
o - move cursor

folding
-------
zi - enable / disable folding
zi/zj - move between folds



###################
#####      ########
#####      ########
###################

rspec example
http://betterspecs.org/

OJ - JSON ENCODER


DataMapper

require "{RAILS_ROOT/imports/blah.rb}`
executing commands in ruby
http://rubyquicktips.com/post/5862861056/execute-shell-commands

df -h, /etc/mtab, :x
reload - `mount -a`
confreaks

build - persist in memory, dont save unless.save is called
create - persist in database
lazy loading / eager loadinijg

Benchmark.measure

livescript

gulp / livereload
http://travismaynard.com/writing/no-need-to-grunt-take-a-gulp-of-fresh-air

logstash
logly
http://youmightnotneedjquery.com/

pow.cx
 curl get.pow.cx | sh
~/.pow $ ln -s ~/programming/project
~/.pow $ open http://project.dev

marvel - elasticsearch
socialpack
tire


To reload elasticsearch after an upgrade:
    launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.elasticsearch.plist
    launchctl load ~/Library/LaunchAgents/homebrew.mxcl.elasticsearch.plist


http://rvm.io/integration/pow
Pow has removed automated detection of rvm, here is how it can be restored by creating .powenv in the root of the project, according to Pow docs it should not be checked in to source control (unless all team members agree on that).

.powenv:

# detect `$rvm_path`
if [ -z "${rvm_path:-}" ] && [ -x "${HOME:-}/.rvm/bin/rvm" ]
then rvm_path="${HOME:-}/.rvm"
fi
if [ -z "${rvm_path:-}" ] && [ -x "/usr/local/rvm/bin/rvm" ]
then rvm_path="/usr/local/rvm"
fi

# load environment of current project ruby
if
  [ -n "${rvm_path:-}" ] &&
  [ -x "${rvm_path:-}/bin/rvm" ] &&
  rvm_project_environment=`"${rvm_path:-}/bin/rvm" . do rvm env --path 2>/dev/null` &&
  [ -n "${rvm_project_environment:-}" ] &&
  [ -s "${rvm_project_environment:-}" ]
then
  echo "RVM loading: ${rvm_project_environment:-}"
  \. "${rvm_project_environment:-}"
else
  echo "RVM project not found at: $PWD"
fi
It is important to run touch tmp/restart.txt after creating .powenv.


logweasel


iced coffee script
<- (
vim tmux navigor

vim buffer switching
':ls' + ':bn'/':bp' + ':b <part-of-name>'
map <Leader>a :bprev<Return>
map <Leader>s :bnext<Return>
map <Leader>d :bd<Return>
map <Leader>f :b 
Ctrl-w s and Ctrl-w v to split the current window
Ctrl-6 to switch back and forth between two buffers in the same window.

shift j = join line


------
new vim settup
ctrl jkl; (move between panes)
ctrl n, p (both between screens)
[, ] - b  (move between buffers)


-------
ansible
gulp

chsh -s /usr/local/bin/fish
chsh -s /bin/bash


git show --name-only <commit>


If you have them split vertically C-wJ to move one to the bottom

If you have them split horizontally C-wL to move one to the right

To rotate in a 'column' or 'row' of split windows, C-wC-r
A


http://famo.us/

http://codepen.io/befamous/pen/kbxnH

http://codepen.io/befamous/pen/EflBC

http://codepen.io/befamous/pen/yGCHs
http://www.oodesign.com/decorator-pattern-gui-example-java-sourcecode.html
o=
http://blog.elpassion.com/ruby-gotchas/

angular
-------
directives
 - data-ng-app = “”
 or 
 data ng-app

  filter
  | filter:name | orderbyL

-----------

create directory if not exists
    :!mkdir %:p:h


sidekcik


http://docs.angularjs.org/tutorial
http://javarevisited.blogspot.com/2013/03/top-15-data-structures-algorithm-interview-questions-answers-java-programming.html

http://www.oodesign.com/



http://mathworld.wolfram.com/BuffonsNeedleProblem.html


git diff --name-only


git diff --name-only HEAD~1

http://bigocheatsheet.com/


coderpad.io

http://www.elasticsearch.org/blog/elasticsearch-definitive-guide/

http://jekyllrb.com/


clean directory
git clean -f -d

replace text vim
================
:%s/foo/bar/g
Find each occurrence of 'foo' (in all lines), and replace it with 'bar'.
:s/foo/bar/g
Find each occurrence of 'foo' (in the current line only), and replace it with 'bar'.
:%s/foo/bar/gc
Change each 'foo' to 'bar', but ask for confirmation first.
:%s/\<foo\>/bar/gc
Change only whole words exactly matching 'foo' to 'bar'; ask for confirmation.
:%s/foo/bar/gci
Change each 'foo' (case insensitive) to 'bar'; ask for confirmation.
This may be wanted after using :set noignorecase to make searches case sensitive (the default).
:%s/foo/bar/gcI
Change each 'foo' (case sensitive) to 'bar'; ask for confirmation.
This may be wanted after using :set ignorecase to make searches case insensitive.


http://www.wei-wang.com/ExplainGitWithD3/#


http://blog.codeclimate.com/blog/2012/10/17/7-ways-to-decompose-fat-activerecord-models/
o


HTTP Codes
500 - internal server error
502 - bad gateway - server recieved an invalid response from anothe rserver it was assessing while
attempting to load the page
503 - service unavailable


git add -p




rake routes
    posts GET    /posts(.:format)          posts#index
          POST   /posts(.:format)          posts#create
 new_post GET    /posts/new(.:format)      posts#new
edit_post GET    /posts/:id/edit(.:format) posts#edit
     post GET    /posts/:id(.:format)      posts#show
          PATCH  /posts/:id(.:format)      posts#update
          PUT    /posts/:id(.:format)      posts#update
          DELETE /posts/:id(.:format)      posts#destroy
     root        /                         welcome#index


curl --data "latitude=100&longitude=101" localhost:3000/smokes



http://gmaps-samples-v3.googlecode.com/svn/trunk/styledmaps/wizard/index.html


carbonfive.com


go


http://en.wikipedia.org/wiki/Dart_(programming_language)

https://www.codefellows.org/blogs/complete-list-of-javascript-tools

GIT_COMMITTER_DATE="`date`" git commit --amend --date "`date`"


replace in vim
s/<word>/<replace>/gc


history| grep <command>
!<number>

http://blog.carbonfive.com/2011/09/28/destructuring-assignment-in-coffeescript/


open window in new tab :tabedit %<CR>

http://rubydoc.info/gems/coverband/0.0.23/frames

http://docs.angularjs.org/guide/directive

angularman.com

http://techcrunch.com/2011/09/11/mindjet-buys-cohuman-to-debut-cloud-based-collaboration-tool-mindjet-connect/

 VERSION=20140310170918 ber db:migrate


git reset --hard origin/develop
  
 be rake -vT
 http://githooks.com/

 hipchat
 

 ctrl - r - search through history


 tig 
http://semantic-ui.com/
 git whatchanged


mocha:
describe('gulp-obfuscate', function() {
  describe('when given an empty input buffer', function() {
    it('does nothing', function(done) {
      expect_equals('', '', done);
    });
  });


swap windows vim... c-w + r

Named groups in regex:  http://stackoverflow.com/questions/628556/returning-only-part-of-match-from-regular-expression
I like to use named groups:

Match m = Regex.Match("User Name:first.sur", @"User Name:(?<name>\w+\.\w+)");
if(m.Success)
{
   string name = m.Groups["name"].Value;
}
Putting the ?<something> at the beginning of a group in parentheses (e.g. (?<something>...)) allows you to get the value from the match using something as a key (e.g. from m.Groups["something"].Value)

If you didn't want to go to the trouble of naming your groups, you could say

Match m = Regex.Match("User Name:first.sur", @"User Name:(\w+\.\w+)");
if(m.Success)
{
   string name = m.Groups[1].Value;
}
and just get the first thing that matches. (Note that the first parenthesized group is at index 1; the whole expression that matches is at index 0)





curl -X GET http://127.0.0.1/
o
angular seed


https://github.com/angular/angular-seed


[http://nvie.com/posts/a-successful-git-branching-model/


http://www.sitepoint.com/building-recipe-search-site-angular-elasticsearch/?utm_source=javascriptweekly&utm_medium=email


http://camanjs.com/
http://camanjs.com/



jasmine statements
descibe( label, function(){ ... })
group tests together
it( label, function(){ ... })
label individual test
expect( actual )
used to compare against expected values
beforeEach­(­function(){ ... })
run prior to each it in the describe
afterEach­(function() { ... })
run after each it in the describe
xdescribe( label, functi­on(){ ... })
skip section ( note the x )
xit( label, function(){ ... })
skip test ( note the x )
 	
jasmine matchers
to(Not)Be( null | true | false )
to(Not)Equal( value )
to(Not)Match( regex | string )
toBeDefined()
toBeUndefined()
toBeNull()
toBeTruthy()
toBeFalsy()
to(Not)Contain( string )
toBeLessThan( number )
toBeGreaterThan( number )
toBeNaN()
toBeCloseTo( number, precision )
toThrow()
Matchers can be chained with a not between the actual and assertion.
 	
jasmine doubles/spies
spyOn( obj, method­_string )
obj.s­tub­bed­.­ca­lls
array
obj.s­tub­bed­.­mo­stR­ece­ntC­all
call object
obj.s­tub­bed.ca­lls­[0]­.­args
array
toHaveBeenCalled()
toHaveBeenCalled­With( array )
andCall­Through()
spy and delegate to real object
andReturn( value )
andCall­Fake­(fu­nct­ion() { ... })
jasmine.­cre­ate­Spy( id )
jasmine.­cre­ate­Spy­Obj( baseName, methods[] )
jasmine.­any( const­ructor )



http://www.railstips.org/blog/archives/2009/05/11/class-and-instance-methods-in-ruby/

CLASS METHODS
# Way 1
class Foo
  def self.bar
    puts 'class method'
  end
end

Foo.bar # "class method"

# Way 2
class Foo
  class << self
    def bar
      puts 'class method'
    end
  end
end


Foo.bar # "class method"

# Way 3
class Foo; end
def Foo.bar
  puts 'class method'
end

Foo.bar # "class method"


INSTANCE METHODS
# Way 1
class Foo
  def baz
    puts 'instance method'
  end
end

Foo.new.baz # "instance method"

# Way 2
class Foo
  attr_accessor :baz
end

foo = Foo.new
foo.baz = 'instance method'
puts foo.baz

# Way 3
class Foo; end

foo = Foo.new
def foo.bar
  puts 'instance method'
end

Foo.new.baz # "instance method"


http://regexr.com/335fm

http://stackoverflow.com/questions/10889972/regex-grouping-returns-only-the-last-match




http://flockwith.me/
( ͡° ͜ʖ ͡°)


bower

set no-paste
set paste


twitter 2000 follower limit

http://stackoverflow.com/questions/23036101/rails-api-angularjs-websocket-rails-gem
p


http://www.devthought.com/2012/02/17/npm-tricks/

http://blog.nodejs.org/2012/02/27/managing-node-js-dependencies-with-shrinkwrap/
o

http://stackoverflow.com/questions/13573204/psql-could-not-connect-to-server-no-such-file-or-directory-mac-os-x
https://www.npmjs.org/package/gulp-obfuscate


http://www.codeproject.com/Articles/380748/Inversion-of-Control-Overview-with-Examples


foreman


brew install mtr
sudo /usr/local/sbin/mtr
cyberduck


git merge-base HEAD origin/develop


http://emojicons.com/popular


http://www.sitepoint.com/practical-guide-angularjs-directives-part-two/


http://globaldev.co.uk/2014/05/ruby-2-1-in-detail/


bundle open <gem>
bundle exec gem presitne <gem>


syncronize panes tmux


http://barrister.bitmechanic.com/

http://eerolanguage.org/code_sample/index.html


var a = [];

if ('forEach' in a) { console.log('forEach in a'); }

for (var i in a) { console.log(a + 'in a'); }





var a = [];

console.log(
('forEach' in a) != 
(function() { for (var i in a) { return true; } })()
);


http://shapeshed.com/command-line-utilities-with-nodejs/



http://www.wired.com/2014/05/the-world-of-computer-go/


http://www.lgtm.in/i/LeE1
http://memecrunch.com/meme/2TFSB/lgtm/image.png
http://www.quickmeme.com/meme/35f0vs
http://i.imgur.com/iz9RzZo.gif
https://raw.githubusercontent.com/mattt/AnimatedGIFImageSerialization/master/Example/Animated%20GIF%20Example/animated.gif


http://www.lgtm.in/g
http://i.qkme.me/3ub75f.jpg
http://www.lgtm.in/i/nrJ1

http://www.lgtm.in/i/8mjwSxWNp

http://media0.giphy.com/media/LeYFkniJST8wo/giphy.gif

http://www.lgtm.in/i/sw5fljamq
http://i.imgur.com/v9wvB.gif
http://www.lgtm.in/i/PrW1
https://f.cloud.github.com/assets/1280540/336152/f4950348-9c9f-11e2-8b3d-a569a4cbcb73.jpg

http://i1.kym-cdn.com/photos/images/newsfeed/000/254/655/849.gif
http://www.lgtm.in/i/oyL90ZF3q
http://www.lgtm.in/i/kmsAjwEUs

[![LGTM](http://www.lgtm.in/p/axKnMLtbq)](http://www.lgtm.in/i/axKnMLtbq)



#!/bin/bash

figlist | while read font
do
        figlet -f $font "$font"

done


#!/bin/bash

while [ 1 ];
do
        clear
        date +%r | figlet
        sleep 1
done



member do
end
collection do
end
http://guides.rubyonrails.org/routing.html




https://www.youtube.com/watch?v=YKm0v_weFZs


http://stackoverflow.com/questions/4269922/permission-denied-publickey-when-deploying-heroku-code-fatal-the-remote-end
o


http://cachemonet.com/


jekyll


https://help.github.com/articles/setting-up-a-custom-domain-with-github-page://help.github.com/articles/setting-up-a-custom-domain-with-github-pages


egrep -i "^.is" /usr/share/dict/words | more
o
 Keybase.io. 

http://www.emojitracker.com/


js2coffee
http://onehungrymind.com/angularjs-sticky-notes-pt-2-isolated-scope/


http://repl.cc/

http://www.thinkster.io/angularjs/KnxWvHUW64/angularjs-understanding-isolate-scope


http://developer.marvel.com/
http://daneden.github.io/animate.css/


http://www.reactiongifs.com/tag/hell-yes/page/3/

named functions vs anonymous functions
bluebird vs q for promises

http://jade-lang.com/reference/


npm show {pkg} version
npm update --save
npm update --save-dev





VIMUX
 :x
 map <Leader>rb :call VimuxRunCommand("clear; rspec " . bufname("%"))<CR>

 " Prompt for a command to run
 map <Leader>vp :VimuxPromptCommand<CR>

 " Run last command executed by VimuxRunCommand
 map <Leader>vl :VimuxRunLastCommand<CR>

 " Inspect runner pane
 map <Leader>vi :VimuxInspectRunner<CR>

 " Close vim tmux runner opened by VimuxRunCommand
 map <Leader>vq :VimuxCloseRunner<CR>

 " Interrupt any command running in the runner pane
 map <Leader>vx :VimuxInterruptRunner<CR>

 " Zoom the runner pane (use <bind-key> z to restore runner pane)
 map <Leader>vz :call VimuxZoomRunner()<CR>
 :x

https://kuler.adobe.com/explore/newest/


http://lkml.iu.edu/hypermail/linux/kernel/1405.3/02592.html

http://www.modern.ie/en-us/virtualization-tools

http://javascriptissexy.com/understand-javascript-closures-with-ease/


rubyrags.com


http://jekyllrb.com/

http://blog.angularjs.org/2014/02/an-angularjs-style-guide-and-best.html
o
http://famous-bird.herokuapp.com/

http://robots.thoughtbot.com/extending-rails-vim-with-custom-commands
https://gist.github.com/crsven/5f64fad06c2aa2650615
http://blog.angularjs.org/2014/02/an-angularjs-style-guide-and-best.html
:
https://www.youtube.com/user/theActionMovieKid
http://imgur.com/W4pd0Ji
http://music-suite.github.io/docs/ref/
http://gibber.mat.ucsb.edu/
ouya
towerfall
More info on projections here: http://robots.thoughtbot.com/extending-rails-vim-with-custom-commands

My current projection file here for other vim-rails users: https://gist.github.com/crsven/5f64fad06c2aa2650615
swift:  https://developer.apple.com/swift/
paramedic plugin.. elasticsearch
 https://www.youtube.com/watch?v=tZWGb0HU2QM
 klout.com
ghost 3.0


http://toddmotto.com/
http://www.hilariousgifs.com/i-did-not-expect-this/
http://bundler.io/

"Any problem in computer science can be solved by adding a layer of indirection." - David Wheeler
http://en.wikipedia.org/wiki/David_Wheeler_(computer_scientist)
http://madhatted.com/2014/6/17/authentication-for-single-page-apps#.U6MYdhGUxMo.twitter

"\e[A": history-search-backward
"\e[B": history-search-forward
set show-all-if-ambiguous on
set completion-ignore-case on

ctrl-r
-----------------------

data:text/html, <html contenteditable>
or 
data:text/html, <style type="text/css">#e{position:absolute;top:0;right:0;bottom:0;left:0;}</style><div id="e"></div><script src="http://d1n0x3qji82z53.cloudfront.net/src-min-noconflict/ace.js" type="text/javascript" charset="utf-8"></script><script>var e=ace.edit("e");e.setTheme("ace/theme/monokai");e.getSession().setMode("ace/mode/ruby");</script>

trl-A returns cursor to the beginning of current line, Ctrl-E moves cursor to the end of the line, Ctrl-K deletes the rest of the line, beginning from the cursor.h

http://nshipster.com/reactivecocoa/
http://vimeo.com/98100160

pi noir
adafruit
raspian
git reset --hard origin/develop
newrelic vs monit
airbrake vs errbit




https://gist.github.com/adaline/7363853
https://github.com/felixge/node-form-data
aggritate roots


https://blog.heroku.com/archives/2014/3/11/node-habits
https://devcenter.heroku.com/
http://boundlessgeo.com/solutions/solutions-software/postgis/

https://gist.github.com/staltz/868e7e9bc2a7b8c1f754
https://github.com/Reactive-Extensions/RxJS
http://blog.steveklabnik.com/posts/2011-07-03-nobody-understands-rest-or-http
https://angel.co/nestdrop
domain driven design
huristics
https://www.digitalocean.com/pricing/

http://www.endalldisease.com/73-mindblowing-terence-mckenna-quotes/
“We have been to the moon, we have charted the depths of the ocean and the heart of the atom, but we have a fear of looking inward to ourselves because we sense that is where all the contradictions flow together.”
― Terence McKenna
“The problem is not to find the answer, it’s to face the answer”
– Terence McKenna
“My technique is don’t believe anything. If you believe in something, you are automatically precluded from believing its opposite.”
– Terence McKenna
“The internet is light at the end of the tunnel…it is creating a global society”
– Terrence McKenna

if value then $q.when(value) else $q.reject()
http://tholman.com/giflinks/

http://news.rapgenius.com/albums/Heroku/Routergate

 git diff --name-only HEAD~1
http://himera.herokuapp.com/synonym.html
https://github.com/clojure/clojurescript
https://github.com/lukehoban/es6features


https://github.com/atmos/heaven
https://github.com/atmos/hubot-deploy

      _.forEach opts.filters, (filter) ->
        term = {}
        term[filter] = true
        filters.push {term: term}

https://gophercasts.io/lessons/1-getting-started-with-go

http://vimeo.com/68236538
http://caniuse.com/viewport-units
http://www.twitch.tv/
http://reactive-extensions.github.io/RxJS/
https://github.com/Reactive-Extensions/RxJS/tree/master/examples

http://nullzzz.blogspot.com/2012/01/things-you-should-know-about-rx.html

oo
jo

from:  http://danwebb.net/2006/11/3/from-the-archives-cleaner-callbacks-with-partial-application
Now say you wanted to call a method on each of these such as toUpperCase(). You could do this:

var caps = map(['a', 'b', 'c'], function(letter) {
    return letter.toUpperCase();
});
But what if you find yourself wanting to call lots of methods on objects in map(). You can generalise with a partially applied function:

function callMethod(method) {
  return function(obj) {
    return obj[method]();
  }
}
This returns a function that will call the given method on any object you pass it:

var upperCase = callMethod('toUpperCase');
upperCase('a'); //=> returns 'A'
Now you can use this for your function in map:

map(['a', 'b', 'c'], callMethod('toUpperCase'));  //=> ['A', 'B', 'C']
How elegant is that? This is just a simple example but lets get on to how this helps us with callbacks. Say we have an ajax function called request. It’s takes a url and a callback function for when it’s loaded. We want to update an element with the response:

request('comment.php', function(resp) {  
  document.getElementById('item').innerHTML = resp.responseText;
});
We can generalise the update callback with a curried function like this:

function update(id) {
  return function(resp) {
    document.getElementById(id).innerHTML = resp.responseText;
  }
}
Now we can write our request call like this:

request('comment.php', update('item'));

duck typing - 'if it looks like a duck and quacks like a duck'.. basically if it responds to the same interfaces.

Currying refers to the process of transforming a function with multiple arity into the same function with less arity.
http://en.wikipedia.org/wiki/Arity

the prototype chain.


Object.prototype.extends = function (parent) {    
    for (var prop in parent) {
        if (mixin.hasOwnProperty(prop)) {
            this.prototype[prop] = mixin[prop];
        }
    }
};

o
http://nodeup.com/eleven
https://en.wikipedia.org/wiki/Thunk_(functional_programming)


Lazy evaluataion in JavaScript via Thunks
Thunks are a type of currying?

add = (a, b) ->
  () ->
    a + b

sum = a + b
console.log sum()

quadrabuzz


https://github.com/caolan/highland
http://synergy-project.org/

+# https://www.relishapp.com/rspec/rspec-rails/docs/routing-specs

 +# http://jonathanhui.com/ruby-rails-3-routing

javascript has function scope, not block scope
breach.cc
http://npmawesome.com/index.4/
parallel hiehgarchy
http://locomotivecms.com/

https://github.com/comfy/comfortable-mexican-sofa
https://github.com/jdan/rubycards
http://www.liamneesonsarm.com/posts/rails-angularjs-html5mode-true-issues-with-links
https://www.youtube.com/watch?v=mVN7aTqr550

http://12factor.net/

vi passenger-docker
http://mesos.apache.org/


docker
vagrant
guard
https://github.com/orchardup/fig
https://www.digitalocean.com/community/tutorials/docker-explained-how-to-create-docker-containers-running-memcached
bittorrentsync

http://xgrommx.github.io/rx-book/

mohca bug:
https://github.com/visionmedia/mocha/issues/911
o

https://developer.github.com/guides/getting-started/

Create = PUT with a new URI
         POST to a base URI returning a newly created URI
Read   = GET
Update = PUT with an existing URI
Delete = DELETE
PUT can map to both Create and Update depending on the existence of the URI used with the PUT.

POST maps to Create.

Correction: POST can also map to Update although it's typically used for Create. POST can also be a partial update so we don't need the proposed PATCH method.
https://github.com/balderdashy/waterline
http://blog.carbonfive.com/2011/02/13/a-3d-flocking-simulation-using-html5-canvas/
https://www.varnish-cache.org/
squid cache
p
immediately-invoked func­tion expres­sions (IIFEs)
http://usejsdoc.org/
coffee examples/test.coffee --n

coffee examples/test.coffee --nodejs
http://giphy.com/gifs/1hiVNxD34TpC0
figlet

https://medium.com/@kanyang/hooks-in-mocha-87cb43baa91c
Joeys-MacBook-Air:SocketTest joey$ mocha test.js
before
beforeEach
1
․afterEach
beforeEach
2
.afterEach
after

 2 passing (7ms)

















http://stackoverflow.com/questions/332422/how-do-i-get-the-name-of-an-objects-type-in-javascript
// using a named function:
function Foo() { this.a = 1; }
var obj = new Foo();
(obj instanceof Object);          // true
(obj instanceof Foo);             // true
(obj.constructor == Foo);         // true
(obj.constructor.name == "Foo");  // true

// let's add some prototypical inheritance
function Bar() { this.b = 2; }
Foo.prototype = new Bar();
obj = new Foo();
(obj instanceof Object);          // true
(obj instanceof Foo);             // true
(obj.constructor == Foo);         // false
(obj.constructor.name == "Foo");  // false


// using an anonymous function:
obj = new (function() { this.a = 1; })();
(obj instanceof Object);              // true
(obj.constructor == obj.constructor); // true
(obj.constructor.name == "");         // true


// using an anonymous function assigned to a variable
var Foo = function() { this.a = 1; };
obj = new Foo();
(obj instanceof Object);      // true
(obj instanceof Foo);         // true
(obj.constructor == Foo);     // true
(obj.constructor.name == ""); // true


// using object literal syntax
obj = { foo : 1 };
(obj instanceof Object);            // true
(obj.constructor == Object);        // true
(obj.constructor.name == "Object"); // true


https://gist.github.com/coolaj86/1318304

https://github.com/maxogden/art-of-node
http://www.ccs.neu.edu/research/demeter/papers/law-of-demeter/oopsla88-law-of-demeter.pdf
https://github.com/carbonfive/functional-programming-weekly-challenge/pull/13/files

http://nodejs.org/api/debugger.html

https://www.npmjs.org/package/multibuffe://www.npmjs.org/package/multibuffer
launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist
launchctl load ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist

https://www.youtube.com/watch?v=RMhCUpfwkMg&list=PL1AXWu-gGX6LNsfQ-KkeGPxL76CFONTom
http://twistedsifter.com/2014/07/thrift-store-painting-remixes-by-david-irvine/#.U9fSdiMJic0.facebook
node debugger;  http://vimeo.com/77870960
http://angular-tips.com/blog/2014/03/transclusion-and-scopes/

https://github.com/angular/angular.js/issues/4845
http://stackoverflow.com/questions/20878830/angularjs-isolated-scope-for-directives-without-own-template
https://blog.heroku.com/archives/2014/8/7/heroku-button





function clone(object) {
  function Clone() {}
  Clone.prototype = object;

  return new Clone()
}





 coffee --nodejs --debug src/bacon_and_eggs.coffee
coffee --nodejs debug src/bacon_and_eggs.coffee 

https://github.com/platanus/angular-restmod

http://replygif.net/255
http://blog.carbonfive.com/2014/05/29/an-incremental-migration-from-rails-monolithic-to-microservices/
https://www.cs.umd.edu/class/spring2003/cmsc838p/Design/criteria.pdf
http://www.bootply.com/73864

https://smacss.com/

function thisBranch {
  git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/\1/'
}
function blam() {
  git push origin $(thisBranch)
}
function kablam() {
  git push -f origin $(thisBranch)
}

 today = log --graph --since='1 Day Ago' --abbrev-commit --date=relative --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %Cblue<%an>%Creset'
  l = "log --oneline --decorate --graph --pretty='%Cred%h %Cgreen%ad%Creset%x09%s%x09%Creset%C(bold)%d %an' --date=short”

[alias]
  graph = log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%aN>%Creset'
  rollback = reset HEAD^
  commits = log --oneline
  info = !git show $1 --pretty='full'
  cherry-bomb = "!f() { git rebase -p --onto $1^ $1; }; f"
  today = log --graph --since='1 Day Ago' --abbrev-commit --date=relative --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %Cblue<%an>%Creset'

http://www.thinkster.io/angularjs/HNyZvDlCXO/angularjs-intro-to-bower

http://stackoverflow.com/questions/16828287/what-things-can-be-injected-into-others-in-angular-js
https://github.com/angular/angular.js/wiki/Understanding-Dependency-Injection

https://www.docker.com/tryit/#4

http://learnyouahaskell.com/chapters

https://www.npmjs.org/package/bacon-and-eggs

https://github.com/baconjs/bacon.js/issues/354

http://learnyouahaskell.com/learnyouahaskell.pdf

rm -fr tmp/cache
rm -fr public/assets

http://xkcd.com/66/


<script type="text/ng-template" id="myModalContent.html">
find . -name *_java*


http://docs.ansible.com/intro_getting_started.html#getting-started

quasiliteral
https://sourcegraph.com/github.com/joyent/node/.CommonJSPackage/node/.def/commonjs/lib/readline.js/-/createInterface

http://techblog.netflix.com/2014/08/announcing-scumblr-and-sketchy-search.html
http://javascriptweblog.wordpress.com/2011/05/31/a-fresh-look-at-javascript-mixins/
http://byfat.xxx/if-hemingway-wrote-javascript

http://highscalability.com/blog/2013/7/8/the-architecture-twitter-uses-to-deal-with-150m-active-users.html

http://stackoverflow.com/questions/10585683/how-do-you-edit-existing-text-and-move-the-cursor-around-in-the-terminal

pressEnter = (input) ->
  # fake keyboard event.
  event = document.createEvent("Events")
  event.initEvent("keydown", true, true)
  event.which = 13

  input[0].dispatchEvent(event)

netrunner

http://patorjk.com/software/taag/#p=display&f=ANSI%20Shadow&t=twitter%20-%0Acommander
