#!/usr/bin/env mocha -R spec

var assert = require("assert");
var msgpackJS = "../index";
var isBrowser = ("undefined" !== typeof window);
var msgpack = isBrowser && window.msgpack || require(msgpackJS);
var TITLE = __filename.replace(/^.*\//, "");

describe(TITLE, function() {

  var skip = ("undefined" !== typeof Symbol) ? it : it.skip;
  skip("Symbol", function() {
    assert.throws(function() {
      msgpack.encode(Symbol("foo"));
    }, Error);
  });

});
