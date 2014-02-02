C = ctrl

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

VIM (with Janus)
----------------
search
----
/(word) - search for word
in this mode press n and N to move forward and backward
type enter again to clear highlighting  (custom due to vimrc)

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

GIT integration:
	•	<leader>gb maps to :Gblame<CR>
	•	<leader>gs maps to :Gstatus<CR>
	•	<leader>gd maps to :Gdiff<CR>
	•	<leader>gl maps to :Glog<CR>
	•	<leader>gc maps to :Gcommit<CR>
	•	<leader>gp maps to :Git push<CR>

GIT
---

git fetch
---------
keep in sync with other branches
feature branch
git add .
git commit -m "commit"
git checkout develop
git pull --rebase
git reset --hard
git checkout branch
git rebase develop
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


