Backbone
========

Events
------
The Backbone Events module is a module that can be mixed in to *any object* in order to provide it with custom events. You may bind with `on` or remove with `off` callback functions to an event; `trigger`-ing an event fires all callbacks in succession.

You can give an object events by extending the Backbone.Events module as follows:

```
	var object = {};
	_.extend(object, Backbone.Events);
```

Methods given by Backbone.Events are:

Bind an event to a `callback` function. Passing `"all"` will bind the callback to all events fired.

```
	on: function(name, callback, context) 
```
Bind an event to only be triggered a single time. After the first time the callback is invoked, it will be removed.

```
	once: function(name, callback, context)
```

Remove one or many callbacks. If `context` is null, removes all callbacks with that function. If `callback` is null, removes all callbacks for the event. If `name` is null, removes all bound callbacks for all events.

```
 	off: function(name, callback, context)
```

Trigger one or many events, firing all bound callbacks. Callbacks are passed the same arguments as `trigger` is, apart from the event name (unless you're listening on `"all"`, which will cause your callback to receive the true name of the event as the first argument).

```
	trigger: function(name)
```

Tell this object to stop listening to either specific events ... or to every object it's currently listening to.
    
```
    stopListening: function(obj, name, callback)
```

The Backbone object itself mixes in Events, and can be used to emit any global events that your application needs.
```
"add" (model, collection, options) — when a model is added to a collection.
"remove" (model, collection, options) — when a model is removed from a collection.
"reset" (collection, options) — when the collection's entire contents have been replaced.
"sort" (collection, options) — when the collection has been re-sorted.
"change" (model, options) — when a model's attributes have changed.
"change:[attribute]" (model, value, options) — when a specific attribute has been updated.
"destroy" (model, collection, options) — when a model is destroyed.
"request" (model, xhr, options) — when a model (or collection) has started a request to the server.
"sync" (model, resp, options) — when a model (or collection) has been successfully synced with the server.
"error" (model, xhr, options) — when a model's save call fails on the server.
"invalid" (model, error, options) — when a model's validation fails on the client.
"route:[name]" (params) — Fired by the router when a specific route is matched.
"route" (route, params) — Fired by the router when any route has been matched.
"route" (router, route, params) — Fired by history when any route has been matched.
"all" — this special event fires for any triggered event, passing the event name as the first argument.
```

Model
-----
Models are the basic data object in the framework -- frequently representing a row in a table in a database on your server.  A discrete chunk of data and a bunch of useful, related methods for performing computations and transformations on that data.

To create a Model class of your own, you extend Backbone.Model and provide instance properties, as well as optional classProperties to be attached directly to the constructor function.


Backbone Extend
----------------


Parse
-----

To customize how you parse the data returned from the url you can supply your own parse

```
	return Backbone.Collection.extend({
		model: <model>,
		url: <url>,  
		parse: function(data) {
			this.<value> = data.metadata.<value>;
			return data.data;
		}
	});
```

Sync
----

To customize your own method to sync with the server you can override the sync method... i.e.:

```
	Backbone.sync = function(method, model, options) { };

	"create" : expected that you create the model on the server
	"read"   : expected that you read this model from the server and return it
	"update" : expected that you update the model on the server with the argument
	"delete" : expected that you delete the model from the server.
```

You need to fire either options.success or options.error depending on whether the method succeeded.

If needed, rather than overriding all sync, you should be able to do your customer functions and then 
```
	Backbone.sync = function(method, model, options) { 
		// custom stuff
		<custom functions>
			
		// call base sync
		Backbone.sync.call(model, method, model, options);
	};
```