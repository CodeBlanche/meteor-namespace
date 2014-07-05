/**
 * Create a namespace and optionally attach an object to it.
 *
 * @param {string} name Fully qualified JS namespace e.g. 'My.Own.Namespaced.Class'
 * @param {{}} obj The object to assign to the give namespace
 * @return {{}} Returns a reference to the newly created namespace
 * @constructor
 */
var Namespace = function (name, obj) {
  var path
    , last
    , toEval;

  function resolve(target, object) {
    if (object === undefined) {
      return;
    }

    if (target !== undefined) {
      for(var i in object) {
        target[i] = object[i];
      }
    }
  }

  if (obj === undefined) {
    obj = {};
  }

  if (typeof(name) !== 'string') {
    throw new Meteor.Error(404, 'Invalid argument - Namespace name must be a string');
  }
  if (!name.match(new RegExp('^[_$a-z][_$a-z0-9.]+[_$a-z0-9]$', 'i'))) {
    throw new Meteor.Error(404, 'Namespace name "' + name + '" contains illegal character.');
  }

  path = name.split('.');
  toEval = Meteor.isServer ? 'global' : 'window';

  for (var i in path) {
    var segment = path[i];

    eval('if (' + toEval + ' === undefined) { ' + toEval + ' = {}; }');

    toEval += '["' + segment + '"]';
  }

  eval('if (' + toEval + ' === undefined) { ' + toEval + ' = obj; } else { resolve(' + toEval + ', obj); }');

  return obj;
};

Namespace('Namespace', Namespace);

//if (Meteor.isClient) {
//  console.log(window.Namespace);
//}
//
//if (Meteor.isServer) {
//  console.log(global.Namespace);
//}
