Collection
==========
Collections are ordered sets of models. You can bind "change" events to be notified when any model in the collection has been modified, listen for "add" and "remove" events, fetch the collection from the server, and use a full suite of Underscore.js methods.

Any event that is triggered on a model in a collection will also be triggered on the collection directly, for convenience. This allows you to listen for changes to specific attributes in any model in a collection, for example: documents.on("change:selected", ...)

extend
------
To create a Collection class of your own, extend Backbone.Collection, providing instance properties, as well as optional classProperties to be attached directly to the collection's constructor function.

```
Backbone.Collection.extend(properties, [classProperties]) 
```

model
-----
Override this property to specify the model class that the collection contains. If defined, you can pass raw attributes objects (and arrays) to add, create, and reset, and the attributes will be converted into a model of the proper type.

```
collection.model 
e.g.
var collection = Backbone.Collection.extend({
  model: <model>
});
```


constructor / initializenew Backbone.Collection([models], [options]) 
When creating a Collection, you may choose to pass in the initial array of models. The collection's comparator may be included as an option. Passing false as the comparator option will prevent sorting. If you define an initialize function, it will be invoked when the collection is created. There are a couple of options that, if provided, are attached to the collection directly: model and comparator.

var tabs = new TabSet([tab1, tab2, tab3]);
var spaces = new Backbone.Collection([], {
  model: Space
});
modelscollection.models 
Raw access to the JavaScript array of models inside of the collection. Usually you'll want to use get, at, or the Underscore methods to access model objects, but occasionally a direct reference to the array is desired.

toJSONcollection.toJSON([options]) 
Return an array containing the attributes hash of each model (via toJSON) in the collection. This can be used to serialize and persist the collection as a whole. The name of this method is a bit confusing, because it conforms to JavaScript's JSON API.

var collection = new Backbone.Collection([
  {name: "Tim", age: 5},
  {name: "Ida", age: 26},
  {name: "Rob", age: 55}
]);

alert(JSON.stringify(collection));
synccollection.sync(method, collection, [options]) 
Uses Backbone.sync to persist the state of a collection to the server. Can be overridden for custom behavior.



addcollection.add(models, [options]) 
Add a model (or an array of models) to the collection, firing an "add" event. If a model property is defined, you may also pass raw attributes objects, and have them be vivified as instances of the model. Returns the added (or preexisting, if duplicate) models. Pass {at: index} to splice the model into the collection at the specified index. If you're adding models to the collection that are already in the collection, they'll be ignored, unless you pass {merge: true}, in which case their attributes will be merged into the corresponding models, firing any appropriate "change" events.

var ships = new Backbone.Collection;

ships.on("add", function(ship) {
  alert("Ahoy " + ship.get("name") + "!");
});

ships.add([
  {name: "Flying Dutchman"},
  {name: "Black Pearl"}
]);
Note that adding the same model (a model with the same id) to a collection more than once 
is a no-op.

removecollection.remove(models, [options]) 
Remove a model (or an array of models) from the collection, and returns them. Fires a "remove" event, which you can use silent to suppress. The model's index before removal is available to listeners as options.index.

resetcollection.reset([models], [options]) 
Adding and removing models one at a time is all well and good, but sometimes you have so many models to change that you'd rather just update the collection in bulk. Use reset to replace a collection with a new list of models (or attribute hashes), triggering a single "reset" event at the end. Returns the newly-set models. For convenience, within a "reset" event, the list of any previous models is available as options.previousModels.

Here's an example using reset to bootstrap a collection during initial page load, in a Rails application:

<script>
  var accounts = new Backbone.Collection;
  accounts.reset(<%= @accounts.to_json %>);
</script>
Calling collection.reset() without passing any models as arguments will empty the entire collection.

setcollection.set(models, [options]) 
The set method performs a "smart" update of the collection with the passed list of models. If a model in the list isn't yet in the collection it will be added; if the model is already in the collection its attributes will be merged; and if the collection contains any models that aren't present in the list, they'll be removed. All of the appropriate "add", "remove", and "change" events are fired as this happens. Returns the touched models in the collection. If you'd like to customize the behavior, you can disable it with options: {add: false}, {remove: false}, or {merge: false}.

var vanHalen = new Backbone.Collection([eddie, alex, stone, roth]);

vanHalen.set([eddie, alex, stone, hagar]);

// Fires a "remove" event for roth, and an "add" event for "hagar".
// Updates any of stone, alex, and eddie's attributes that may have
// changed over the years.
getcollection.get(id) 
Get a model from a collection, specified by an id, a cid, or by passing in a model.

var book = library.get(110);
atcollection.at(index) 
Get a model from a collection, specified by index. Useful if your collection is sorted, and if your collection isn't sorted, at will still retrieve models in insertion order.

pushcollection.push(model, [options]) 
Add a model at the end of a collection. Takes the same options as add.

popcollection.pop([options]) 
Remove and return the last model from a collection. Takes the same options as remove.

unshiftcollection.unshift(model, [options]) 
Add a model at the beginning of a collection. Takes the same options as add.

shiftcollection.shift([options]) 
Remove and return the first model from a collection. Takes the same options as remove.

slicecollection.slice(begin, end) 
Return a shallow copy of this collection's models, using the same options as native Array#slice.

lengthcollection.length 
Like an array, a Collection maintains a length property, counting the number of models it contains.

comparatorcollection.comparator 
By default there is no comparator for a collection. If you define a comparator, it will be used to maintain the collection in sorted order. This means that as models are added, they are inserted at the correct index in collection.models. A comparator can be defined as a sortBy (pass a function that takes a single argument), as a sort (pass a comparator function that expects two arguments), or as a string indicating the attribute to sort by.

"sortBy" comparator functions take a model and return a numeric or string value by which the model should be ordered relative to others. "sort" comparator functions take two models, and return -1 if the first model should come before the second, 0 if they are of the same rank and 1 if the first model should come after.

Note how even though all of the chapters in this example are added backwards, they come out in the proper order:

var Chapter  = Backbone.Model;
var chapters = new Backbone.Collection;

chapters.comparator = 'page';

chapters.add(new Chapter({page: 9, title: "The End"}));
chapters.add(new Chapter({page: 5, title: "The Middle"}));
chapters.add(new Chapter({page: 1, title: "The Beginning"}));

alert(chapters.pluck('title'));
Collections with a comparator will not automatically re-sort if you later change model attributes, so you may wish to call sort after changing model attributes that would affect the order.

sortcollection.sort([options]) 
Force a collection to re-sort itself. You don't need to call this under normal circumstances, as a collection with a comparator will sort itself whenever a model is added. To disable sorting when adding a model, pass {sort: false} to add. Calling sort triggers a "sort" event on the collection.

pluckcollection.pluck(attribute) 
Pluck an attribute from each model in the collection. Equivalent to calling map and returning a single attribute from the iterator.

var stooges = new Backbone.Collection([
  {name: "Curly"},
  {name: "Larry"},
  {name: "Moe"}
]);

var names = stooges.pluck("name");

alert(JSON.stringify(names));
wherecollection.where(attributes) 
Return an array of all the models in a collection that match the passed attributes. Useful for simple cases of filter.

var friends = new Backbone.Collection([
  {name: "Athos",      job: "Musketeer"},
  {name: "Porthos",    job: "Musketeer"},
  {name: "Aramis",     job: "Musketeer"},
  {name: "d'Artagnan", job: "Guard"},
]);

var musketeers = friends.where({job: "Musketeer"});

alert(musketeers.length);
findWherecollection.findWhere(attributes) 
Just like where, but directly returns only the first model in the collection that matches the passed attributes.

urlcollection.url or collection.url() 
Set the url property (or function) on a collection to reference its location on the server. Models within the collection will use url to construct URLs of their own.

var Notes = Backbone.Collection.extend({
  url: '/notes'
});

// Or, something more sophisticated:

var Notes = Backbone.Collection.extend({
  url: function() {
    return this.document.url() + '/notes';
  }
});
parsecollection.parse(response, options) 
parse is called by Backbone whenever a collection's models are returned by the server, in fetch. The function is passed the raw response object, and should return the array of model attributes to be added to the collection. The default implementation is a no-op, simply passing through the JSON response. Override this if you need to work with a preexisting API, or better namespace your responses.

var Tweets = Backbone.Collection.extend({
  // The Twitter Search API returns tweets under "results".
  parse: function(response) {
    return response.results;
  }
});
clonecollection.clone() 
Returns a new instance of the collection with an identical list of models.

fetchcollection.fetch([options]) 
Fetch the default set of models for this collection from the server, setting them on the collection when they arrive. The options hash takes success and error callbacks which will both be passed (collection, response, options) as arguments. When the model data returns from the server, it uses set to (intelligently) merge the fetched models, unless you pass {reset: true}, in which case the collection will be (efficiently) reset. Delegates to Backbone.sync under the covers for custom persistence strategies and returns a jqXHR. The server handler for fetch requests should return a JSON array of models.

Backbone.sync = function(method, model) {
  alert(method + ": " + model.url);
};

var accounts = new Backbone.Collection;
accounts.url = '/accounts';

accounts.fetch();
The behavior of fetch can be customized by using the available set options. For example, to fetch a collection, getting an "add" event for every new model, and a "change" event for every changed existing model, without removing anything: collection.fetch({remove: false})

jQuery.ajax options can also be passed directly as fetch options, so to fetch a specific page of a paginated collection: Documents.fetch({data: {page: 3}})

Note that fetch should not be used to populate collections on page load — all models needed at load time should already be bootstrapped in to place. fetch is intended for lazily-loading models for interfaces that are not needed immediately: for example, documents with collections of notes that may be toggled open and closed.

createcollection.create(attributes, [options]) 
Convenience to create a new instance of a model within a collection. Equivalent to instantiating a model with a hash of attributes, saving the model to the server, and adding the model to the set after being successfully created. Returns the new model. If client-side validation failed, the model will be unsaved, with validation errors. In order for this to work, you should set the model property of the collection. The create method can accept either an attributes hash or an existing, unsaved model object.

Creating a model will cause an immediate "add" event to be triggered on the collection, a "request" event as the new model is sent to the server, as well as a "sync" event, once the server has responded with the successful creation of the model. Pass {wait: true} if you'd like to wait for the server before adding the new model to the collection.

var Library = Backbone.Collection.extend({
  model: Book
});

var nypl = new Library;

var othello = nypl.create({
  title: "Othello",
  author: "William Shakespeare"
});
