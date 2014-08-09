Object.create = function(objectPrototype) {
  function F(){}
  F.prototype = objectPrototype;
  return new F();
}

MyClass.prototype = Object.create(SomeBaseClass.prototype);



function clone(object) {
  function Clone() {}
  Clone.prototype = object;

  return new Clone()
}

var parent = { foo: 'foo' }
var child = clone(parent)



