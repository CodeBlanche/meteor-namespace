// See https://github.com/dandv/meteor-crypto-base64/blob/master/crypto-base64_tests.js for a simple example
// See https://www.eventedmind.com/feed/e6gJZXNQWyNP2MLsb for more on testing with Tinytest

Tinytest.add('Test Namespace', function (test) {
  var myObj = {};
  var myFunc = function () {};

  test.equal(Namespace, undefined, 'Namespace package is not included.', true);
  test.equal(Namespace('My.Test.Space.One', myObj), myObj, 'Expecting return value to equal supplied object.');
  test.equal(My.Test.Space.One, myObj, 'Expecting "My.Test.Space.One" to equal supplied object.');

  Namespace('My.Test.Func', myFunc);

  test.equal(My.Test.Func, myFunc, 'Expecting "My.Test.Func" to equal supplied function');

  console.log(My);
});
