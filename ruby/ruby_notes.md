Interactive Ruby
----------------
To run Ruby from the command line run:

```irb```

To execute a Ruby file run:

```ruby <filename.rb>```

or add ```#!/usr/bin/ruby``` to the beginning of the file and change it to be executable via ```chmod + x``` then run ```./<filename.rb>```

Methods
-------
Write an argument to the console:

```
puts <arg>
e.g.
puts "hello world" 
   outputs:  hello world
puts 13.odd? 
   outputs:  true
```

'''
def hello(name)
	"hello " + name
end
hello("world") 
    outputs:  hello world
'''

note: 
'''
def hello(name)
	"hello " + name
end
'''

and  

'''
def hello(name)
	return "hello #{name}"
end
'''

retult in the same output for two reasons:
1.  Ruby automatically returns the result of the last statement in a function.
2.  Ruby searches double quoted strings and replaces #{expression} with the value of expression.

Syntax Conventions
------------------
local variables - start with a lowercase
method params - start with a lowercase, can end with a ?, !, and =
method names - start with a lowercase or underscore

global variables - start with $

instance variables - start with @, multiword separated by underscore
class variables - start with @@, multiword separated by underscore

class names - uppercase, multiword is mixedcase (each word capitalized)
module names - uppercase
contstants - all uppercase, separated by underscore

Nil
---
An object represting nothing (like null).

Arrays
------
Arrays are indexed collections where the key is an integer.

Declaring and array:  

```
<array> = [<obj1>, <obj2>, <obj3>, ...]
e.g.
a = ["a", "b", "c"]
```

%w is special shortcut for generating an array of strings.

```a = ["a", "b", "c"]```
can also be written as:
```a = %w{a b c}```

Hashes
------
Hashes are indexed collections where the key is an object.

```
<hash> = {
	<key1> => <value1>, 
	<key2> => <value2>, 
} 

<value> = <hash>[<key>]

e.g.
alphabet = {
	'a' => 'apple', 
	'b' => 'book'
}

name = alphabet['a']

```

Symbols
-------
Symbols allow you to declare constants without predeclaring them.

Symbols start with a :

```
e.g.
:right
```

Symbols are often used as keys to hashes.

Control Structures
------------------
if, else
```
if <condition1>
	<code to execute> 
elsif <condition2>
	<code to execute> 
else
	<code to execute> 
end
```

statement modifiers allow you to do a single if on one line:

```<code to execute> if <condition>```

while
```
while <condition>
	<code to execute> 
end
```

statement modifier
```<code to execute> while <condition>```

Regular Expressions
-------------------
Ruby supports built in regular expressions using ```/<expression/```
