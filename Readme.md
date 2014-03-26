# Overlay

A simple overlay for Yuehu.

Showcase at <http://yuehu.github.io/overlay/>.

## Installation

Install with [component(1)](http://component.io):

    $ component install yuehu/overlay

## API

```js
var Overlay = require('overlay');
var o = new Overlay();
```

### .show()

Show overlay.

### .hide()

Hide overlay.

### .fill(el)

Fill element to the overlay container.

```js
var el = document.createElement('div');
el.innerHTML = 'This is overlay content';
overlay.fill(el);
```

## License

MIT
