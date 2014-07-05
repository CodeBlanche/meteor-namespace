Namespace (For Meteor Atmosphere)
=================================
[![Build Status](https://travis-ci.org/CodeBlanche/meteor-namespace.svg?branch=master)](https://travis-ci.org/CodeBlanche/meteor-namespace)

Namespaces for JavaScript 

### How do I create a namespaced function?
```js
// create the function
Namespace('My.Test.Space.One', function() { /* do something */ });

// call the function
My.Test.Space.One();
```

### Can I assign an object to the namespace?
```js
// create the function
Namespace('My.Test.Space.One', {
    "ice" : "cold"
});

// use the object
Test.Space.One.ice; // === cold
```
