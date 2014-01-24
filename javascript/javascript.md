Object Oriented Javascript
--------------------------
In Javascript their is no concept of class.  Instead you augment your own object or create new objects from it.

function <object>(params) {
	this.m_var = 0;
}

<object>.prototype.<function> = function() {

};

OR

<object>.prototype = {
	<function>: function() {
	    
	},
};

Note:  Prototyped properties affect all objects of the same constructor, simultaneously, even if they already exist.

Inheritance
-----------

function <class>() {
    <base>.call(this, <args>);
}

<class>.prototype = Object.create(<base>.prototype);

Instantiation
--------------
var <instance> = new <object>();


Calling parent (super) methods
------------------------------

Backbone.Model.prototype.set.apply(this, arguments);

Prototype Chain
---------------

Every object in Javascript has a prototype. When a messages reaches an object, JavaScript will attempt to find a property in that object first, if it cannot find it then the message will be sent to the object’s prototype and so on. This works just like single parent inheritance in a class based language.

Chainable methods
-----------------
Chainable methods must return this.

Investigate:
------------
.hasOwnProperty



In Operator
------------
The in operator returns true if the specified property is in the specified object.

example:
```
// Arrays
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
0 in trees        // returns true
3 in trees        // returns true
6 in trees        // returns false
"bay" in trees    // returns false (you must specify the index number,
                  // not the value at that index)
"length" in trees // returns true (length is an Array property)

// Predefined objects
"PI" in Math          // returns true

// Custom objects
var mycar = {make: "Honda", model: "Accord", year: 1998};
"make" in mycar  // returns true
"model" in mycar // returns true
```


