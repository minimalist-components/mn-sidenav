[![npm version](https://badge.fury.io/js/mn-sidenav.svg)](https://badge.fury.io/js/mn-sidenav)
[![Dependency Status](https://gemnasium.com/badges/github.com/minimalist-components/mn-sidenav.svg)](https://gemnasium.com/github.com/minimalist-components/mn-sidenav)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)   

# mn-sidenav

Minimalist sidenav component, agnostic to framworks.

See the [demo](https://minimalist-components.github.io/mn-sidenav/)

<a href="https://minimalist-components.github.io/mn-sidenav/">
<img src="https://raw.githubusercontent.com/minimalist-components/mn-sidenav/master/preview.gif">
</a>

### Install

```sh
npm install --save mn-sidenav
```

And bundle dependencies and main files in [dist/](https://github.com/minimalist-components/mn-sidenav/tree/master/dist) with your preferred tool.


### Usage

Use the tag `mn-sidenav`, with an id and content

```html
<mn-sidenav id="menu">
  <!-- content here -->
</mn-sidenav>
```

And to other element show this sidenav, just use the attribute `open-sidenav` with the sidenav id

```html
<button open-sidenav="menu">Show menu</button>
```

Finally to close sidenav, use the attribute `close-sidenav`.

```html
<button close-sidenav>Close menu</button>
```

And if you want add these two options to elements, use the attribute `toggle-sidenav`

```html
<button toggle-sidenav="menu">Close menu</button>
```

### Javascript
If you want open or close, just use the methods `open`, `close` or `toggle` available on `mn-sidenav` element, e.g.

```js
const sidenav = document.querySelector('mn-sidenav#menu')

sidenav.open() // or sidenav.close(), sidenav.toggle()
```

### Scroll

On method open, the sidenav automatically scroll to top, or to position top of a child element with class `.active`
