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
feature branch
git add .
git commit -m "commit"
git checkout develop
git pull --rebase
git reset --hard
#git checkout branch
#git rebase develop -i
git rebase -i develop <branchname>
git push -f origin <branchname>

# do pull request here

git checkout develop
git merge feature --no-ff
    <-- potetnial for other commits here
git push
    <--- would get error here
=========================
if develop change
git reset --hard (or head)
git pull
git merge feature
git push

delete branch
========================
git push origin :<branch>

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

leader t
tmux notes
leader r

g - t, g shiftT
tabedit


o, ;

