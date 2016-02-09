Example calling native apis
---------------

```javascript
var file = new java.io.File(path);
```

* Type conversion: `java.lang.String`
* Metadata: `java.io.File()`
* Call dispatcher: `new java.io.File()` ==> `file = FileProxy`
