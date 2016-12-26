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

And to element to display sidenav, just add the attribute `open-sidenav` with the id of sidenav

```html
<button open-sidenav="menu">Show menu</button>
```

Finally to close sidenav, add to an element, the attribute `close-sidenav`, they will act when you click on it.

```html
<button close-sidenav>Close menu</button>
```


### Javascript
If you want open or close, just use the methods `open` and `close` available on `mn-sidenav` element, e.g.

```js
const sidenav = document.querySelector('mn-sidenav#menu')

sidenav.open() // or sidenav.close()
```
