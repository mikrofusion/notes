git fetch
---------
keep in sync with other branches
feature branch
git add .
git commit -m "commit"
git checkout develop
git pull
git checkout branch
git rebase develop
git push 
git checkout develop
git merge feature 
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



git checkout --track -b develop origin/develop


~/.gitprofile
=====================================
[color]
    ui = true
[core]
    editor = <editor>
[branch]
  autosetuprebase = always
[alias]
  cp = cherry-pick
  st = status -s
  cl = clone
  ci = commit
  co = checkout
  br = branch 
  #corb = checkout --track -b $1 origin/$1
  corb = "!f() { git checkout --track -b $1 origin/$1; }; f"
  dlb = "!f() { cur=${get_git_branch}; git checkout master; git pull origin master; git branch -d ${cur}; }; f"
    lg = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
  latest = "!f() { cur=$(git symbolic-ref --quiet --short HEAD 2> /dev/null); git checkout $1; git pull origin $1; echo --${cur}--; git co ${cur}; }; f"
  par = "!f() { cur=$(git symbolic-ref --quiet --short HEAD 2> /dev/null); git checkout $1; git pull origin $1; echo --${cur}--; git co ${cur}; git rebase $1; }; f"

[push]
    default = current
[pull]
    default = current

to view aliases run:
--------------------
git config --get-regexp alias



Installation
------------
Download and install from: http://git-scm.com/

Basics
------
Check git version:
```git —version```

Initializing git:
```git init```

Removing git from your repo:
```rm -fr .git```

Environment
-----------
You can set up your git enivironment with the git config command.  

```git config --global``` makes edits to your ~/.gitconfig file.

```git config --system``` makes edits to /etc/gitconfig

```git config``` makes edits to .git/config

Setting global username and email:
```
git config --global user.name <full name>
git config --global user.email <email>
e.g.
git config --global user.name "Mike Groseclose"
git config --global user.email mike.groseclose@gmail.com
```

Use the following to specifiy the editor / tool that should be used when doing merges or diffs:
```
git config --global core.editor <editor>
git config --global merge.tool <merge tool>
git config --global diff.tool <diff tool>
e.g.
git config --global core.editor <subl>
git config --global merge.tool meld
```

View your current config:
```git config --global core.editor```

List your config settings:
```git config --list```
or for a specific item:
```git config user.name```

Status
------
Checking current status of your repo:
```git status```

Note:  To have git ignore files add them to the .gitignore file in the base of your repository. 

Get history of your repo:
```git log```

Remotes
-------

Show remote repositories:
```git remote -v```

Show more info about remote resitory:
```git remote show origin```

Clone a remote repository:
```
git clone <URL>
e.g.
git clone git@github.com:mikegroseclose/notes.git
```

Update from a remote repository:
```git pull```

TODO:  git fetch

Staging Changes
---------------

Files must be staged before they can be commited.  To stage run:
```git add <filename>```

To stage all files run:
```git add . ```

Commiting Changes
-----------------
```
git commit -m <comments>
e.g.
git commit -m "commiting files"
```
To do a stage and commit at the same time run:
```git commit -a -m <comments>```

View Commit History
-------------------
```
git rev-list --all --pretty
e.g.
git rev-list --all --pretty | head -10
```

Alternatively:
```git show $COMMIT```

Viewing Changes
---------------
To view changes between the last commit and unstaged files that were previously commited:
```git diff```

To view changes between the last commit and files that are currently staged:
```git diff --cached```

To view file changes between commits:
```
git show <revision>:<file>
e.g.
git show HEAD~0:path/to/file
```

Removing Files
--------------
```git rm <filename>```

Moving Files
------------
```git mv file_from file_to```

Branches
--------
Get current branch:
```git branch```

In addition to checking via command line you can also add the following to your .bash_profile:
```
parse_git_branch() {
    git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}
export PS1="\w\[\033[32m\]\$(parse_git_branch)\[\033[00m\] $ "
```

Note:  after making changes to your profile you usually need to restart your terminal or run:
```source ~/.bash_profile```

Create branch:
```git branch <branchName>```

Switch branch:
```git checkout <branchName>```

Create and checkout branch:
```git checkout -b <branchName>```

Delete branch:
```git checkout -d <branchName>```

Diffing Branches
----------------
To get the list of changes between two branches you can run:
git diff --name-only <branch1> <branch2>

Clearing Changes
----------------
Destroy local modifications
```
git reset --hard
or
git reset --hard <commitId>
```

Remove files not checked into get (useful after doing a git reset command)
```git clean -f -d```

Advanced Checkout
-----------------
To checkout a specific commit:
```git checkout <commitId>```

Note:  checking out without specifying a branch leaves the head detached.  Alternatively you checkout a commit to its own branch:
```git checkout -b <branch> <commitId>```

Reverting Changes
-----------------
TODO ```git revert```

Rebasing
--------
git rebase <branch>

Rename Branch
-------------
git branch -m <oldname> <newname>


Merging Changes
---------------
TODO:  need to update with merge changes flow.

To commit with author date / commiter date modified:
———————————————————————————————————-----------------
First, checkout <branch>, add files, then:

```
GIT_AUTHOR_DATE="Sun Dec 1 21:38:53 2013 -0800" GIT_COMMITTER_DATE="Sun Dec 1 21:38:53 2013 -0800" git commit -m 'commit'
git checkout master
git rebase <branch>
```

Collaborative Workflow (GitHub)
-------------------------------
The recommended workflow for making changes to a repo that multiple people are working on is:
1.Create a branch off of the branch you want to make a change to (usually master)
2.Commit your changes to your branch
3.Rebase your branch
4.Do a pull request (via GitHub).  This is basically requesting the owner of the branch to pull your changes into his/her branch (if they approve of the changes.

References
----------
https://github.s3.amazonaws.com/media/progit.en.pdf
