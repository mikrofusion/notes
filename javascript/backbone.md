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

Model
-----





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