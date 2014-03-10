C = ctrl

PRY
---
Edit
Edit-method

TMUX
----
C + ? - help

C + A, C - new screen
C + A, X - delete screen

C + A, [0-9] - go to screen
C + A, n - go to next screen
C + A, p - go to previous screen

C + A, , - remane window

C + A, q (then number) - show pane numbers (and optionally move to them)
C + A, " - split pane horizontally C + A, % - split pane vertically
C + A, [hjkl] - pane navigation
C + A, alt + arrow - resize pane up or down
C + A, { } - swap panes
C + A, C + O - swap panes

C + A, t - display time
C + A, s - display sessions

C + A then [ to enter copy mode, then four arrow keys to move, even paste
the visible point, which is great for scrolling--I don't use it much for
copying/pasting.

PRY
---
edit -m (opens file where current binding pry is being called"
edit "Todo#create" (edit method where model = Todo, and method = create"

VIM (with Janus)
----------------
<leader> b - open buffer
space / C + space - move forward back through buffer list

C + W, o - zoom in or out on current window

<leader> + r - run all tests
<leader> + R - run closest spec

0 - beginning of string 
$ - end of string
w - forward to beginning of word (based on iskeyword)
W - forward to beginning or word (based on whitespace)
e - end of word  (based on iskeyword)
E - end of word - based on whitespace (based on whitespace)
b - back to beginning of previous word (based on iskeyword)
B - back to beginning of previous word (based on whitespace)
ge - end of previous word (based on iskeyword)
gE - end of previous word (based on whitespace)

f<character> - moves to next character
t<character> - UNTIL character. 
F<character> - moves to next character (backwards)
T<character> - UNTIL character.  (backwards)
; - repeat find or until  (l; if already on the character)

:help word

C+F - forward  full page
C+B - back full page
C + U - up half page
C + D - down half page
H - head
M - middle
L - last

gg - top
G - bottom

<line number> G - go to line number

* - turn the word you are on into a search term
# - previous word as search term
g\* - same as * but match part of word
g# - same as # match part of word
n - next word
N - previous word

from prompt:
/ - find word forward
? find word backward

read more at:  : motion.txt

]] - jump to next curly brace in column 0
[[ - jump to previous curly brace in column 0

][ - next curly brace
[] - previous curly brace

% - jump between matching braces

matchit.vim - plugin to extend use of % operator

marks
———
ma
‘a
:marks - shows all your marks 
:h marks
‘’ - move to last place before you jumped

editing
———
i - edit where the cursor is
I - start insert mode at beginning of line

a - insert after current cursor position
A - append at end of line

o - insert a line below the current line
O - insert a line above the current line

x - delete chracter under cursor
X - delete character before the cursor
dd - delete current line

. repeat the previous command

dw - delete word
de - delete to end of word

cw - change word
C - change entire line

R - replace
r - single character replace

s - substitute (similar to change)

y - copy
yy - copy full line
Y - copy full line
p - paste after the cursor
P - put it before the cursor
yw - yank word

J - joins a line with the line below
gJ - joins the line without the space

v - visual mode
V - visual mode (by line)
C + V - visual block mode
gV - recall what was done in highlighting mode

working with many files:
———————————————
alias g
alias g =‘vim —remote-silent’


:ls - list buffer
[no name] - blank buffer when you start vim
:ls! - show hidden buffers

:buffer 22 - go to buffer 22
:b 22 - shorthand for buffer

:b# - go to previous buffer
:bf
:bn
:bp

:bdelete (or :bd) - delete the current buffer
:bd <name> - delete buffer by name
22-25bd - delete buffer by name
%bd - delete all buffers

buff do - repeat over everything you have
taboo - repeat over everything you have
wind - repeat over everything you have

wall - write all

working with multiple windows
—————————————————
window is a view onto a buffer.
C + W - o - make split the full screen (lose your layouts)

:bd

open file
e <file>

:sp (or split) <filename>
:C + W, x - swap two windows

C + W, v - split verticle
:vsp: split vertifle

C+W, c - close window

C + W, [HJKL} - move window to up down left right




good reference:
http://derekwyatt.org/vim/tutorials/novice/#Welcome
http://stackoverflow.com/questions/1218390/what-is-your-most-productive-shortcut-with-vim/1220118#1220118

===============================================

===============================================
\ ci - comment / uncomment line (NERDcommander)
\ cc - same as above

search
----
/ fef - reindent selected files
/ b - show buffers
[ ] b - swap buffers

<leader> n - show or hide side panel
<leader> b - show buffers


resize pane
-----------
C + w, + -
or
let &winheight = &lines * 7 / 10

/(word) - search for word
in this mode press n and N to move forward and backward
type space to clear highlighting  (custom due to vimrc)

HML - move to top, middle, and bottom of screen
() - move up or down one sentence
{} - move up or down one paragraph
gg - go to beginning of file
<num>, G - go to line number
% - jump between corresponding item e.gg { -> } or ( -> )

u - undo
C + R - redo

i - insert
a - append

dd - delete line
dw - delete word

$ - move to end of line
^ - move to beginning of line

v - visual mode (select)
V - select line

C-W + W - change between split windows
C-W + [hjkl] - navigate between split windows

b - prev word
w - next word

select line + C + [jk] - move line up or down

C + p - fuzzy file finder


C + z - suspend shell
fg - bring the suspended shell back to vim

You start recording by q<letter> and you can end it by typing q again.

Recording is a really useful feature of Vim.

It records everything you type. You can then replay it simply by typing @<letter>. Record search, movement, replacement...

One of the best feature of Vim IMHO.

select all
----------
ggvG

GIT
---
GIT integration:
	•	<leader>gb maps to :Gblame<CR>
	•	<leader>gs maps to :Gstatus<CR>
	•	<leader>gd maps to :Gdiff<CR>
	•	<leader>gl maps to :Glog<CR>
	•	<leader>gc maps to :Gcommit<CR>
	•	<leader>gp maps to :Git push<CR>

Search(with Ack)
----------------
o    to open (same as enter)
go   to preview file (open but maintain focus on ack.vim results)
t    to open in new tab
T    to open in new tab silently
h    to open in horizontal split
H    to open in horizontal split silently
v    to open in vertical split
gv   to open in vertical split silently
q    to close the quickfix window

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
