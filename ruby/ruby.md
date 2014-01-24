Style
-----
http://ruby-doc.org/documentation-guidelines.html

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

CONSOLE INPUT
--------------
```
ARGV.each do |<varname>|
	...
end
```

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

Numbers
-------
You can call methods on numbers, since everything in Ruby is an object.
```
0.upto(9) {|i| print i }
```

Arrays
======
Arrays are indexed collections where the key is an integer.

Declaring an array  
------------------
```
<array> = [<obj1>, <obj2>, <obj3>, ...]
e.g.
a = ["a", "b", "c"]
```

If needed an array can be made to have elements intialize themselves to a certain value if not present (default is nil):

```
<array> = Array.new(0)  # instead of nil, undefined indexes will be equal to 0
```

%w is special shortcut for generating an array of strings.

```
a = ["a", "b", "c"]
```
can also be written as:
```
a = %w{a b c}
```

```
e.g.
numbers = %w{one two three}
 	=> ["one", "two", "three"]
```

indexing items
--------------
Items in an array are indexed passing an integer to the [] operator.
```
getting:
<array>[<integer>]
```

index starts at 0.  if <integer> is negative it returns the value from the end of the array.

```
e.g.

<array> = [1, 2, 3, 4, 5]

<array>[0] 
	=> 1
<array>[4] 
	=> 5
<array>[-1] 
	=> 5
``` 

You set an array by passing a value to the indexed array via the []= operator;

```
setting:
<array>[<integer>] = <val>
```
ranges
------
you can index an array by range using `..` and `...`.

`<x>..<y>` will get the elements in the array from <x> to <y> inclusive.
`<x>...<y>` will get the elements in the array from <x> to <y> excluding the last element <y>.

```
e.g.
<array> = [1, 2, 3, 4, 5]
<array>[0..2] 
	=> [1, 2, 3]

<array>[0...2] 
	=> [1, 2]	
```

You can also use 

```
<array>.first(<n>)
<array>.last(<n>)
```

adding items
------------
adding items to an array can also be done via:
```
<array> << <item>
```

```
<array>.push	# push element to the end of the array
<array>.unshift # add item to the beginning of the array
```

removing items
--------------
```
<array>.pop    # remove last item from the array
<array>.shift  # remove the first element in the array
```

Hashes
======
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
:<name>
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

```
e.g.

def hello
	yeild('world')
end

hello {|who| puts "hello #{who}"}

output:  'hello world'
```



```
lambda { |params| ... }
```
can alternatively be written as such:

```
-> params { ... }
```

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



Classes
=======

```
class <ClassName>
	def initialize()

	end
end
```

You can then instantiate an instance of the object by calling:
```
<instance> = new <ClassName>.new
```

initialize
----------
Initialize is the method

accessor methods
----------------
Accessor methods allow you to return internal variables owned by the class.

```
class <Class>
	@<var>
	def initalize(<var>) 
		@<var> = <var>
	end

	def <var> # assessor method
		@<var>
	end
end
```

Similar to above, we can write the following to modify an instance variable:

```
def <var>=(<new_var>) 
	@<var> = <new_var>
end
```

attr_reader and attr_accessor
-----------------------------
Alternatively you can use attr_reader to automatically generate the accessor methods:

```
class <Class>
	attr_method :<var>    # read.   note the symbol instead of the @<var>
	attr_accessor :<var>  #write.

	@<var>
	def initalize(<var>) 
		@<var> = <var>
	end
end
```

Attributes
----------
Attriutes are methods, but help represent the external state of the object.

virtual attributes
------------------
You can also create getter and setter methods that are not named after the instance variables.  These getters and setters are virtual attributes.

Classes
========
```
class <ClassName>
	def <methodName>
		...
	end
end
```

Class Access Control
====================
public
------
method can be called by anyone

protected
---------
can be called by objects of the defining class and its subclasses

private
-------
can only be called by the current object

Note:  default level is public.

```
class <Class>

protected
	def <method1>
	end
private
	def <method2>
	end
public
	def <method3>
	end
end

or

class <Class>
	public :<method1>
	protected :<method2>
	private  :<method3>
end
```

Variables
---------
Variables are references to objects.

Since variables are just references to an object.  Changing an object pointed to by two variables changes the object for both variables.  (TODO:  not sayign this right.)

To create a copy of an object you can use 

```
<var>.dup
```
  
To cause a runtime error if an object is changed that shouldn't be, call 

```
<var>.freeze
``` 

Adding file dependancies
========================

require
-------
loads in from the ruby library

require_relative
-----------------
loads in file from the current location

Ruby Methods
============
puts
----
Writes string to output.  Uses to_s on objects to get the string representation.

p
-
Writes string to output.  Uses inspect on objects to get string representation.


Float
-----
give a float representation of an object or throws an error.


Testing
=======

test/unit
---------
include into your project by running 

```
require 'test/unit'

class <Class> < < Test::Unit::TestCase
	def test_...
		assert_equal(<one>, <two>)
	end
end
```


assert_equal
------------


=================

lazy enumerators
----------------
```
def Integer.all
Enumerator.new do |yielder, n: 0|
loop { yielder.yield(n += 1) } end.lazy
end
p Integer.all.first(10)
produces:
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

predicates as free standing procs
---------------------------------
```
multiple_of_three = -> n { (n % 3).zero? }
palindrome        = -> n { n = n.to_s; n == n.reverse }
p Integer
   .all
   .select(&multiple_of_three)
   .select(&palindrome)
   .first(10)
produces:
[3, 6, 9, 33, 66, 99, 111, 141, 171, 222]


Inheritance
============
```
class <Parent>
	...
end
```

child:
```
class <Child> < <Parent>
	...
end
```

namespaces
====
```
module <Module>
	<variable> = <val>
	def <method>
	end
end
```

call modules by using:

```
	<Module>::<conts> # for contants
	<Module>.<method> # for methods
```

Mixins
======
using a module.  cannot have instances, but can be included within a module

mixed in modules behave as superclasses.  include modules into classes using the include statement.

```
module <Module>
	...
end

class <Class>
	include <Module>
end
```
TODO.. look up mixins and variables to keep state

Comparable
-----------
```
class <Class>
	include Comparable
	def <=>(other)
		str.size <=> anOther.str.size
	end
	...
end
```

Enumerable
----------
```
class <Class>
	include Comparable

end
```

Persistable
----------
```
class <Class>
	include Persistable

end
```

Numbers
=======
integers
--------
```
decimal
0x hex
0b binary
underscores in numbers are ignored
```
floats
------
```
0.0
0.0e<num>
```

complex and rational
--------------------
```
Complex(<num>, <num)
```
```
Rational(<num>, <num)
```

conversions
------------
```
```

Convert to integers using
```
Integer(<val>)
```
and to floats using 
```
Float(<val>)
```

looping with numbers
---------------------
```
<num>.times
<num>.upto(<num>)
<num>.downto(<num>)
<num>.step(<num>, <num>)

strings
=======
single quotes
```
'' or %q/<string>/
```
double quotes
```
"" or %Q/<string>/
```

```/``` can be replaced with any delimiter

A here document consists of lines in the source up to but not including the terminating string that you specify after the << characters. Normally, this terminator must start in column one. However, if you put a minus sign after the << characters, you can indent the terminator:

```
string = <<-END_OF_STRING
The body of the string is the input lines up to
one starting with the same text that followed the '<<' END_OF_STRING
```


Spaceship Operator
===================
```<=>```
the operator used for comparing opbest.  

```
def <=>(other)
	@value <=> other.value
end
```

Ranges
======
must have a ```succ``` method, which gives the next value.  Allows you to use (<var> .. <var1>)

```
(1..10) === 5  # true
```

```
case <val>
when 0..2
	...
when 2..4
	...
else
	...
end

Regular Expressions
===================
```
/cat/ 
Matches "dog and cat" and "catch" but not "Cat" or "c.a.t." 

/123/ 
Matches "86512312" and "abc123" but not "1.23" 

/t a b/
Matches "hit a ball" but not "table"

```

The Ruby operator =~ matches a string against a pattern.

```
<string> =~ pattern
```

sub
---
```
<instance>.sub(<regex>, <string>)
```

```
str = "Dog and Cat"
new_str = str.sub(/Cat/, "Gerbil")
puts "Let's go to the #{new_str} for a pint."
produces:
Let's go to the Dog and Gerbil for a pint.
```