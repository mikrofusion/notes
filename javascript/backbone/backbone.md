Backbone
========

Parse
=====

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
====

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

