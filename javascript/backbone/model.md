Model
=====
Models are the basic data object in the framework -- frequently representing a row in a table in a database on your server.  A discrete chunk of data and a bunch of useful, related methods for performing computations and transformations on that data.

To create a Model class of your own, you extend Backbone.Model and provide instance properties, as well as optional classProperties to be attached directly to the constructor function.

extend
------

```
var <model> = Backbone.Model.extend({
	defaults: {},
	initialize: function() { ... },
});
```

constructor / initialize
------------------------
```
new Model([attributes], [options])
e.g.
var Game = new Backbone.Model.extend();
var game = new Game({
	title:"",
	price:"",
	...
});

```

get
---
Get the current value of an attribute from the model. 

```
<model>.get(attribute)
e.g.
game.get("title")
```

set
---
Set a hash of attributes (one or many) on the model. If any of the attributes change the model's state, a "change" event will be triggered on the model. Change events for specific attributes are also triggered, and you can bind to those as well, for example: change:title, and change:content. You may also pass individual keys and values

Note: options silent allows you to set without firing events.

```
model.set(attributes, [options]) 
e.g.
game.set("monopoly", {silent:true});

```

escape
------
Similar to get, but returns the HTML-escaped version of a model's attribute. If you're interpolating data from the model into HTML, using escape to retrieve attributes will prevent XSS attacks.

```
model.escape(attribute) 
```


has
---
Returns true if the attribute is set to a non-null or non-undefined value.

```
model.has(attribute) 
```

unset
-----
Remove an attribute by deleting it from the internal attributes hash. Fires a "change" event unless silent is passed as an option.

```
model.unset(attribute, [options]) 
```

clear
-----
Removes all attributes from the model, including the id attribute. Fires a "change" event unless silent is passed as an option.

```model.clear([options])```

id
--
A special property of models, the id is an arbitrary string (integer id or UUID). If you set the id in the attributes hash, it will be copied onto the model as a direct property. Models can be retrieved by id from collections, and the id is used to generate model URLs by default.

```model.id```

idAttribute
-----------
A model's unique identifier is stored under the id attribute. If you're directly communicating with a backend (CouchDB, MongoDB) that uses a different unique key, you may set a Model's idAttribute to transparently map from that key to id.

```model.idAttribute```

cid
---
A special property of models, the cid or client id is a unique identifier automatically assigned to all models when they're first created. Client ids are handy when the model has not yet been saved to the server, and does not yet have its eventual true id, but already needs to be visible in the UI.

```model.cid```

attributes
----------
The attributes property is the internal hash containing the model's state — usually (but not necessarily) a form of the JSON object representing the model data on the server. It's often a straightforward serialization of a row from the database, but it could also be client-side computed state.

Please use set to update the attributes instead of modifying them directly. If you'd like to retrieve and munge a copy of the model's attributes, use _.clone(model.attributes) instead.

```model.attributes```

changed
-------
The changed property is the internal hash containing all the attributes that have changed since the last set. Please do not update changed directly since its state is internally maintained by set. A copy of changed can be acquired from changedAttributes.

```model.changed```

defaults
--------
The defaults hash (or function) can be used to specify the default attributes for your model. When creating an instance of the model, any unspecified attributes will be set to their default value.

```model.defaults or model.defaults()```

toJSON
------
Return a shallow copy of the model's attributes for JSON stringification. This can be used for persistence, serialization, or for augmentation before being sent to the server. The name of this method is a bit confusing, as it doesn't actually return a JSON string — but I'm afraid that it's the way that the JavaScript API for JSON.stringify works.

```model.toJSON([options])```

sync
----
Uses Backbone.sync to persist the state of a model to the server. Can be overridden for custom behavior.

```model.sync(method, model, [options])``` 

fetch
-----
Resets the model's state from the server by delegating to Backbone.sync. Returns a jqXHR. Useful if the model has never been populated with data, or if you'd like to ensure that you have the latest server state. A "change" event will be triggered if the server's state differs from the current attributes. Accepts success and error callbacks in the options hash, which are both passed (model, response, options) as arguments.

```model.fetch([options])```

save
----
Save a model to your database (or alternative persistence layer), by delegating to Backbone.sync. Returns a jqXHR if validation is successful and false otherwise. The attributes hash (as in set) should contain the attributes you'd like to change — keys that aren't mentioned won't be altered — but, a complete representation of the resource will be sent to the server. As with set, you may pass individual keys and values instead of a hash. If the model has a validate method, and validation fails, the model will not be saved. If the model isNew, the save will be a "create" (HTTP POST), if the model already exists on the server, the save will be an "update" (HTTP PUT).

If instead, you'd only like the changed attributes to be sent to the server, call model.save(attrs, {patch: true}). You'll get an HTTP PATCH request to the server with just the passed-in attributes.

Calling save with new attributes will cause a "change" event immediately, a "request" event as the Ajax request begins to go to the server, and a "sync" event after the server has acknowledged the successful change. Pass {wait: true} if you'd like to wait for the server before setting the new attributes on the model.

In the following example, notice how our overridden version of Backbone.sync receives a "create" request the first time the model is saved and an "update" request the second time.


```
model.save([attributes], [options])
e.g.
model.save("title", "monopoly", {
	success: function(model, resp, options) {},
	error: function(model, resp, options) {},
});
``` 

destroy
-------
Destroys the model on the server by delegating an HTTP DELETE request to Backbone.sync. Returns a jqXHR object, or false if the model isNew. Accepts success and error callbacks in the options hash, which are passed (model, response, options) and (model, xhr, options) as arguments, respectively. Triggers a "destroy" event on the model, which will bubble up through any collections that contain it, a "request" event as it begins the Ajax request to the server, and a "sync" event, after the server has successfully acknowledged the model's deletion. Pass {wait: true} if you'd like to wait for the server to respond before removing the model from the collection.

```model.destroy([options])```

validate
--------
This method is left undefined, and you're encouraged to override it with your custom validation logic, if you have any that can be performed in JavaScript. By default validate is called before save, but can also be called before set if {validate:true} is passed. The validate method is passed the model attributes, as well as the options from set or save. If the attributes are valid, don't return anything from validate; if they are invalid, return an error of your choosing. It can be as simple as a string error message to be displayed, or a complete error object that describes the error programmatically. If validate returns an error, save will not continue, and the model attributes will not be modified on the server. Failed validations trigger an "invalid" event, and set the validationError property on the model with the value returned by this method.

```model.validate(attributes, options) ```

"invalid" events are useful for providing coarse-grained error messages at the model or collection level.

validationError
---------------
The value returned by validate during the last failed validation.

model.validationError 

isValid
-------
Run validate to check the model state.

```model.isValid```

url
---
Returns the relative URL where the model's resource would be located on the server. If your models are located somewhere else, override this method with the correct logic. Generates URLs of the form: "[collection.url]/[id]" by default, but you may override by specifying an explicit urlRoot if the model's collection shouldn't be taken into account.

Delegates to Collection#url to generate the URL, so make sure that you have it defined, or a urlRoot property, if all models of this class share a common root URL. A model with an id of 101, stored in a Backbone.Collection with a url of "/documents/7/notes", would have this URL: "/documents/7/notes/101"

```model.url()``` 

urlRoot
-------
Specify a urlRoot if you're using a model outside of a collection, to enable the default url function to generate URLs based on the model id. "[urlRoot]/id"
Normally, you won't need to define this. Note that urlRoot may also be a function.

```model.urlRoot or model.urlRoot() ```

parse
-----
parse is called whenever a model's data is returned by the server, in fetch, and save. The function is passed the raw response object, and should return the attributes hash to be set on the model. The default implementation is a no-op, simply passing through the JSON response. Override this if you need to work with a preexisting API, or better namespace your responses.

If you're working with a Rails backend that has a version prior to 3.1, you'll notice that its default to_json implementation includes a model's attributes under a namespace. To disable this behavior for seamless Backbone integration, set:

```ActiveRecord::Base.include_root_in_json = false```

```model.parse(response, options) ```

clone
-----
Returns a new instance of the model with identical attributes.

```model.clone() ```

isNew
-----
Has this model been saved to the server yet? If the model does not yet have an id, it is considered to be new.

```model.isNew() ```

hasChanged
----------
Has the model changed since the last set? If an attribute is passed, returns true if that specific attribute has changed.

Note that this method, and the following change-related ones, are only useful during the course of a "change" event.

```model.hasChanged([attribute]) ```

changedAttributes
------------------
Retrieve a hash of only the model's attributes that have changed since the last set, or false if there are none. Optionally, an external attributes hash can be passed in, returning the attributes in that hash which differ from the model. This can be used to figure out which portions of a view should be updated, or what calls need to be made to sync the changes to the server.

```model.changedAttributes([attributes]) ```

previous
--------
During a "change" event, this method can be used to get the previous value of a changed attribute.

```model.previous(attribute) ```

previousAttributes
------------------
Return a copy of the model's previous attributes. Useful for getting a diff between versions of a model, or getting back to a valid state after an error occurs.

```model.previousAttributes()```

Overriding A Core Method
=========================
If you override a core method and still want to invoke the parent objects implementation you should exlicitly call it:
```
var <model> = Backbone.Model.extend({
  set: function(attributes, options) {
    Backbone.Model.prototype.set.apply(this, arguments);
    ...
  }
});
```