# base.gs

> base conversion

This is a base conversion library which is built for [goboscript](https://github.com/aspizu/goboscript).
It is designed to be used with [inflator](https://github.com/inflated-goboscript/inflator).

## Credits

https://www.rapidtables.com/convert/number/base-converter.html

## Installation

Make sure you have inflator installed. It's installable from the gtp.

`inflate install base`

add base to your `inflator.toml` config:
```toml
[dependencies]
# ...
base = "base"
```

## Development

use `inflate install -e .`:

1. clone the respository: `git clone https://github.com/inflated-goboscript/base`
2. `cd base`
3. `inflate install -e .`
4. `cd test`
5. `inflate`
6. `goboscript build`
7. open `test.sb3`
