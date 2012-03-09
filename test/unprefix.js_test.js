/*global QUnit:true, module:true, test:true, asyncTest:true, expect:true*/
/*global start:true, stop:true ok:true, equal:true, notEqual:true, deepEqual:true*/
/*global notDeepEqual:true, strictEqual:true, notStrictEqual:true, raises:true*/
(function( window ) {

  // window.unprefixed = window.unprefix();

  module("Unprefix", {
    setup: function() {
      window.unprefixed = window.unprefix();
    }
  });

  test("is initialized", 1, function() {
    var unprefixed = window.unprefix();

    ok( unprefixed, "unprefix instance" );
  });

  test("expected properties", 1, function() {
    var unprefixed = window.unprefix();
    ok(
      !!~unprefixed.join("").indexOf("-moz--ms--o--webkit-MSMozOWebKitWebkitmozmsowebkit"),
      "Is a list of prefixes"
    );
  });

  module("API", {
    setup: function() {
      window.MozFoo = {};
      window.mozBar = {};
      window.MSFoo = {};
      window.msBar = {};
      window.OFoo = {};
      window.oBar = {};
      window.WebKitFoo = {};
      window.WebkitBar = {};
      window.webkitBaz = {};
    }
  });

  test("expand()", 1, function() {
    var unprefixed = window.unprefix();
    ok(
      !!~unprefixed.expand("foo").indexOf("foo -moz-foo -ms-foo -o-foo -webkit-foo MSfoo Mozfoo Ofoo WebKitfoo Webkitfoo mozfoo msfoo ofoo webkitfoo"),
      "string of expanded prefixes"
    );
  });

  test("translate()", 1, function() {
    var unprefixed = window.unprefix();
    deepEqual(
      unprefixed.translate( window, "foo" ),
      {},
      "Translated"
    );
  });

  test("supported()", 1, function() {
    var unprefixed = window.unprefix(),
        api = unprefixed.translate( window, "notGonnaFindIt" );

    equal(
      window.unprefix.supported.notGonnaFindIt,
      false,
      "notGonnaFindIt is not supported"
    );
  });


  module("Array methods", {
    setup: function() {
      window.MozFoo = {};
      window.mozBar = {};
      window.MSFoo = {};
      window.msBar = {};
      window.OFoo = {};
      window.oBar = {};
      window.WebKitFoo = {};
      window.WebkitBar = {};
      window.webkitBaz = {};
    }
  });

  test("push()", 1, function() {
    var unprefixed = window.unprefix(),
        length = unprefixed.length;

    unprefixed.push("khtml");

    ok( unprefixed.length === (length + 1), "push() results in new length" );

    unprefixed.pop();
  });




}( this ));
