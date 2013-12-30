Interactive Ruby
----------------
To run Ruby from the command line run:

``` irb ```

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

```
def hello(name)
	"hello " + name
end
hello("world") 
    outputs:  hello world
```

note: 
```
def hello(name)
	"hello " + name
end
```

and  

```
def hello(name)
	return "hello #{name}"
end
```

retult in the same output for two reasons:
1.  Ruby automatically returns the result of the last statement in a function.
2.  Ruby searches double quoted strings and replaces #{expression} with the value of expression.

Syntax Conventions
------------------
local variables - start with a lowercase
method params - start with a lowercase, can end with a ?, !, and =.  Note:  ! is usually used at the end of methods that modify the object.
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

Closures
--------
Ruby has four closure types:
* blocks, 
* Procs
* lambdas
* Methods

Code Blocks
-----------
The following creates code blocks 
``` 
{ <code> }
and 
do 
	<code> 
end
```

Convention is usually to use ```{}``` for single line blocks and ```do end``` for multi-line blocks.

Code blocks can then be sent to methods via the following:

```
<method> <code_block>
e.g.
array.each { |x| puts x }
or
array.each do |x|
	puts x
end
```

The code block will be called via the method using the ```yield``` command.

Procedures
----------
Similar to blocks but are reusable.

Declare a proc via the Proc.new command:

```
square = Proc.new do |n|
	n ** 2
end
```

Procedures can then be passed to a method and the method can call the proc.. like so:
```
class Array
  def iterate!(code)
    self.each_with_index do |n, i|
      self[i] = code.call(n)	
    end
  end
end
# Note, the above method can equally use code blocks by removing code and calling yield in place of code.call

array.iterate!(square)
```

Notes:  
* extra variables sent to the Proc will be set to nil.
* think of them as a block of code being inserted into the method.  a return from a Proc will stop a method and return the value provided.

Lambda
------
Similar to Procs but have a few subtle differences:
* extra variables sent to the lambda will cause Ruby to throw an error.
* think of them as methods.  return will return their value to the method and let the method continue

```
e.g.
def test(code)
	code.call(1)
end

test(lambda {|a| puts "printing #{a}" })

	output:  printing 1
```

Method Objects
--------------
Same as a lambda but is a named method.

```
e.g.
def square(n)
	n ** 2
end

array.iterate(method(:square))
```

IO
--
output:
```
puts
printf
```
input:
```
gets - returns the next line from std input
ARGV - array of input from the command line
```

Regular Expressions
-------------------
Ruby supports built in regular expressions using ```/<expression/```
