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

VIM (with Janus)
----------------
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


TDD
===
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

