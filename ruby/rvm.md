About
-----
RVM (Ruby enVironment Manager) allows you to have multiple versions of Ruby on your computer at the same time.

Installation
------------
```\curl -sSL https://get.rvm.io | bash -s stable```

Info
----
```rvm info```

Use
---
Check which version of RVM is in use:

```rvm -v```

List known Ruby's:
```rvm list known```

Install a version of Ruby:
```
rvm install <version>
e.g. rvm install 1.9.2
```

Use a version of Ruby:
```
rvm use <version>
e.g. rvm use 1.9.2
```

Make version of Ruby the default across terminals:

```rvm use <version> --default```

Note:   this overrides the system level Ruby.

List installed Ruby's:

```rvm list```

List default Ruby (for new terminals):

```rvm list default```

Check which version of Ruby is in use:

```which ruby```

and 

```ruby -v```

Gems
----
Switch to gems directory for current ruby

```rvm gemdir```

Switch to the system gems directory

```rvm gemdir system```

Switch to the system user gems directory

```rvm gemdir system user```

References
----------
https://rvm.io/rvm/basics


===================

gem install rails
rvm use rails-4.0.2