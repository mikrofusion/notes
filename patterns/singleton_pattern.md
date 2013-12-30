Singleton
---------
Restricts the instantiation of a class to one object.

One of the Gang Of Four Design Patterns.  Note:  some argue this is an anti-pattern as it introduces unnessary restrictions where a sole class instance may not be required.  Additionally it introduces a global state into the application.

* Single instance / global access
* Requires a mechanism to access the singlton class member without creating a class object

```
if class exists 
	return reference to previously created class 
else 
	create class and return reference
end
```

constructor is made private to ensure the class can not be instantiated a different way

One example of creating a singleton (there are multiple variations, i.e. an alternative would be to not create the singleton until the getInstance method is called):

```
public class Singleton {
    private static final Singleton INSTANCE = new Singleton();
 
    private Singleton() {}
 
    public static Singleton getInstance() {
        return INSTANCE;
    }
}
```
