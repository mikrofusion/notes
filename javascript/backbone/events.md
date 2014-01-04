Events
======
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
