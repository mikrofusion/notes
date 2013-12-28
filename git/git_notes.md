Basics
------
Check git version:
```git —version```

Initializing git:
```git init```

Removing git from your repo:
```rm -fr .git```

Clone a repository:
```
git clone <URL>
e.g.
git clone git@github.com:mikegroseclose/notes.git
```

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

Get history of your repo:
```git log```

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




