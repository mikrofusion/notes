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
