# connect-substitute

A middleware to perform dynamic text substitution on served resources.

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

## Credits:
[Lloyd Hilaiel](https://github.com/lloyd/) wrote the original, which is part of the [Mozilla Persona/BrowserID](https://github.com/mozilla/browserid/) repo.

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


