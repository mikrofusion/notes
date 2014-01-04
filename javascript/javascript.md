Object Oriented Javascript
--------------------------

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

Inheritance
-----------

function <class>() {
    <base>.call(this, <args>);
}

<class>.prototype = Object.create(<base>.prototype);


Calling parent (super) methods
------------------------------

Backbone.Model.prototype.set.apply(this, arguments);



