Sublime
-------
To use sublime via command line:
ln -s "/Applications/Sublime\ Text\ 2.app/Contents/SharedSupport/bin/subl" ~/bin/subl

Find
----
Goto symbol is Ctrl-R (linux), this gives a pop-up-list of all symbol and class definitions in the file, in definition order, and you can jump to what you're after. You could do the same thing with Goto Anything, Ctrl-P and then typing @ and the method name.

SublimeCodeIntel
----------------
Once you install Package Control, restart Sublime Text and bring up the Command Palette (Command+Shift+P on OS X, Control+Shift+P on Linux/Windows). Select "Package Control: Install Package", wait while Package Control fetches the latest package list, then select SublimeCodeIntel when the list appears. 

    For Mac OS X:
      * Jump to definition = ``Control+Click``
      * Jump to definition = ``Control+Command+Alt+Up``
      * Go back = ``Control+Command+Alt+Left``
      * Manual CodeIntel = ``Control+Shift+space``



https://github.com/mhartl/rails_tutorial_sublime_text

COMMANDS
========

find anything
--------------
```
COMMAND+P
```
or 
```
COMMAND+T
```

close window
------------
command w

split screen
------------
alt+cmd+2

unsplit screen
------------
alt+cmd+1

switch between pane
-------------------
ctrl+1 or ctrl+2

run tests in your editor (install rubytest)
------------------------
shift+command+t (all tests)
shift+command+r (selected test)
shift+command+e (rerun the tests)
note:  requires plugin github.com/mhartl/rails_tutorial_sublime_text

comment out
---
command + /

go to bottom of file
--------------------
```
command+down
```

indintation
-----------
command + [
command + ]

select line
-----------
```
command L
```

kill line
---------
```
command + k
```

create new line.. 
----------------
command return

SublimeERB
==========
ctlr + shift+ .
close off tag.. option + command + .


Go to Sublime Text > Preferences > Keybindings - User
Copy/Paste the following:

```
[
{ "keys": ["ctrl+shift+r"], "command": "reindent" , "args": { "single_line": false } }
]
```

Now, you can select the whole document, _or_ a partial of code and do : CONTROL + SHIFT + R.


----------
plugins
---------
gitgutter
sidebar enhancements

ctags + (brew install ctags)


more:
http://www.damln.com/log/setup/

comment out highlighted block
-----------------------------
```
command + /
```
