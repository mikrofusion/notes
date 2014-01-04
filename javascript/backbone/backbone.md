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

Backbone.history
================

History serves as a global router (per frame) to handle hashchange events or pushState, match the appropriate route, and trigger callbacks. You shouldn't ever have to create one of these yourself since Backbone.history already contains one.

pushState support exists on a purely opt-in basis in Backbone. Older browsers that don't support pushState will continue to use hash-based URL fragments, and if a hash URL is visited by a pushState-capable browser, it will be transparently upgraded to the true URL. Note that using real URLs requires your web server to be able to correctly render those pages, so back-end changes are required as well. For example, if you have a route of /documents/100, your web server must be able to serve that page, if the browser visits that URL directly. For full search-engine crawlability, it's best to have the server generate the complete HTML for the page ... but if it's a web application, just rendering the same content you would have for the root URL, and filling in the rest with Backbone Views and JavaScript works fine.

startBackbone.history.start([options]) 
When all of your Routers have been created, and all of the routes are set up properly, call Backbone.history.start() to begin monitoring hashchange events, and dispatching routes. Subsequent calls to Backbone.history.start() will throw an error, and Backbone.History.started is a boolean value indicating whether it has already been called.

To indicate that you'd like to use HTML5 pushState support in your application, use Backbone.history.start({pushState: true}). If you'd like to use pushState, but have browsers that don't support it natively use full page refreshes instead, you can add {hashChange: false} to the options.

If your application is not being served from the root url / of your domain, be sure to tell History where the root really is, as an option: Backbone.history.start({pushState: true, root: "/public/search/"})

When called, if a route succeeds with a match for the current URL, Backbone.history.start() returns true. If no defined route matches the current URL, it returns false.

If the server has already rendered the entire page, and you don't want the initial route to trigger when starting History, pass silent: true.

Because hash-based history in Internet Explorer relies on an <iframe>, be sure to only call start() after the DOM is ready.

$(function(){
  new WorkspaceRouter();
  new HelpPaneRouter();
  Backbone.history.start({pushState: true});
});

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

Backbone.sync is the function that Backbone calls every time it attempts to read or save a model to the server. By default, it uses jQuery.ajax to make a RESTful JSON request and returns a jqXHR. You can override it in order to use a different persistence strategy, such as WebSockets, XML transport, or Local Storage.

The method signature of Backbone.sync is sync(method, model, [options])

method – the CRUD method ("create", "read", "update", or "delete")
model – the model to be saved (or collection to be read)
options – success and error callbacks, and all other jQuery request options
With the default implementation, when Backbone.sync sends up a request to save a model, its attributes will be passed, serialized as JSON, and sent in the HTTP body with content-type application/json. When returning a JSON response, send down the attributes of the model that have been changed by the server, and need to be updated on the client. When responding to a "read" request from a collection (Collection#fetch), send down an array of model attribute objects.

Whenever a model or collection begins a sync with the server, a "request" event is emitted. If the request completes successfully you'll get a "sync" event, and an "error" event if not.

The sync function may be overriden globally as Backbone.sync, or at a finer-grained level, by adding a sync function to a Backbone collection or to an individual model.

The default sync handler maps CRUD to REST like so:

create → POST   /collection
read → GET   /collection[/id]
update → PUT   /collection/id
delete → DELETE   /collection/id
As an example, a Rails handler responding to an "update" call from Backbone might look like this: (In real code, never use update_attributes blindly, and always whitelist the attributes you allow to be changed.)

def update
  account = Account.find params[:id]
  account.update_attributes params
  render :json => account
end
One more tip for integrating Rails versions prior to 3.1 is to disable the default namespacing for to_json calls on models by setting ActiveRecord::Base.include_root_in_json = false

ajaxBackbone.ajax = function(request) { ... }; 
If you want to use a custom AJAX function, or your endpoint doesn't support the jQuery.ajax API and you need to tweak things, you can do so by setting Backbone.ajax.

emulateHTTPBackbone.emulateHTTP = true 
If you want to work with a legacy web server that doesn't support Backbone's default REST/HTTP approach, you may choose to turn on Backbone.emulateHTTP. Setting this option will fake PUT and DELETE requests with a HTTP POST, setting the X-HTTP-Method-Override header with the true method. If emulateJSON is also on, the true method will be passed as an additional _method parameter.

Backbone.emulateHTTP = true;

model.save();  // POST to "/collection/id", with "_method=PUT" + header.
emulateJSONBackbone.emulateJSON = true 
If you're working with a legacy web server that can't handle requests encoded as application/json, setting Backbone.emulateJSON = true; will cause the JSON to be serialized under a model parameter, and the request to be made with a application/x-www-form-urlencoded MIME type, as if from an HTML form.

