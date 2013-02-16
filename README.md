# connect-substitute

A middleware to perform dynamic text substitution on served resources. Useful to automatically replace URLs within resources depending on whether a server is running in dev or production mode.

## Usage
1. Include connect-substitute in a node module.
```
    const substitute = require("connect-substitute");
```


2. Add a middleware by calling the `setup` function.
```
    app.use(substitute.setup({
      from: "https://browserid.org",
      to: "https://login.persona.org"
    }));
```

`from` is the text to be changed.
`to` is what you want to change `from` to.

The substitution middleware must be added *before* other middlewares that serve resources, including static middleware.

## Credits:
This is an *extremely* thin wrapper around [Lloyd Hilaiel's](https://github.com/lloyd/) [connect-postprocess](https://github.com/lloyd/connect-postprocess). He is the brains behind it, I only added a slightly more restrictive but simpler API.

## Author:
* Shane Tomlinson
* shane@shanetomlinson.com
* stomlinson@mozilla.com
* set117@yahoo.com
* https://shanetomlinson.com
* http://github.com/stomlinson
* http://github.com/shane-tomlinson
* @shane_tomlinson

## Getting involved:
Any updates are appreciated

## License:
This software is available under version 2.0 of the MPL:

  https://www.mozilla.org/MPL/


