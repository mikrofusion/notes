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



=========================


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
