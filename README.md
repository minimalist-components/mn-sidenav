[![Bower version](https://badge.fury.io/bo/mn-sidenav.svg)](https://badge.fury.io/bo/mn-sidenav)
[![Dependency Status](https://gemnasium.com/badges/github.com/minimalist-components/mn-sidenav.svg)](https://gemnasium.com/github.com/minimalist-components/mn-sidenav)
[![MIT Licence](https://badges.frapsoft.com/os/mit/mit.svg?v=103)](https://opensource.org/licenses/mit-license.php)   

# mn-sidenav

Minimalist sidenav component, agnostic to framworks.

<!-- See the [demo](http://codepen.io/darlanmendonca/full/JRGoxv) -->

<!-- [![preview demo](https://raw.githubusercontent.com/minimalist-components/mn-sidenav/master/sources/example/mn-sidenav.gif)](http://codepen.io/darlanmendonca/full/akgXQq)  -->

### Install

```sh
bower install --save mn-sidenav
```

Or just download the main files, located in [dist/](https://github.com/minimalist-components/mn-sidenav/tree/master/dist)


### Usage

At the end of the body, add the tag `mn-sidenav`, with an id and content

```html
<mn-sidenav id="menu">
  <!-- content here -->
</mn-sidenav>
```

And to another element show the sidenav, just add the attribute `open-sidenav` with the id of sidenav

```html
<button open-sidenav="menu">Show menu</button>
```

Finally to close sidenav, add to an element, the attribute `close-sidenav`, they will act when you click on it.

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
