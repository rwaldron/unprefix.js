# Unprefix.js

Unprefixed JavaScript APIs

Compressed size: 784 bytes gzipped (1703 bytes minified).



## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/rick/unprefix.js/master/dist/unprefix.js.min.js
[max]: https://raw.github.com/rick/unprefix.js/master/dist/unprefix.js.js

In your web page:

```html
<script src="dist/unprefix.min.js"></script>
<script>

// EXAMPLES...

// Instead of:
var BlobBuilder = window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder || window.OBlobBuilder || window.BlobBuilder,
    builder = new BlobBuilder();

// Just use:
var builder = new BlobBuilder();


// Instead of:
var URL = window.webkitURL || window.mozURL || window.msURL || window.oURL || window.URL,
    url = URL.createObjectURL( foo );

// Just use:
var url = URL.createObjectURL( foo );


// And more!


</script>
```

## Documentation

Unprefix.js supports these APIs:

### window

**[URL](http://dvcs.w3.org/hg/url/raw-file/tip/Overview.html#interface-url)**

> The URL object can be used by scripts to programmatically construct, parse, and resolve URLs.


**[Blob](http://www.w3.org/TR/FileAPI/#dfn-Blob)**

> This interface represents immutable raw data. It provides a method to slice data objects between ranges of bytes into further chunks of raw data. It also provides an attribute representing the size of the chunk of data. The File interface inherits from this interface.


**[BlobBuilder](http://dev.w3.org/2009/dap/file-system/file-writer.html#idl-def-BlobBuilder)**

> This interface is used to build a Blob from a String.


**[performance]()**

>


### navigator

**[navigator.getUserMedia]()**

>

**[navigator.geolocation]()**

>

**[navigator.pointer]()**

>

**[navigator.onLine]()**

>


### document

**[document.cancelFullscreen]()**

>

**[document.currentFullscreenElement]()**

>

**[document.fullscreen]()**

>

**[document.hidden]()**

>

**[document.visitbilityState]()**

>




## Examples
_(Coming soon)_

## Contributing
Style guide: [idiomatic.js](https://github.com/rwldrn/idiomatic.js), Lint and test your code using [grunt](https://github.com/cowboy/grunt).

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!_

## License
Copyright (c) 2012 Rick Waldron <waldron.rick@gmail.com>
Licensed under the MIT license.
