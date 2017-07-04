# [react-xmasonry](https://npmjs.org/package/react-xmasonry)

[![npm](https://img.shields.io/npm/v/react-xmasonry.svg)](https://www.npmjs.com/package/react-xmasonry)
[![Dependencies](https://img.shields.io/badge/dependencies-none-brightgreen.svg)](http://npm.anvaka.com/#/view/2d/react-xmasonry)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c073dc0dc2744d5b950418bf5fbcc820)](https://www.codacy.com/app/ZitRos/react-xmasonry?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=ZitRos/react-xmasonry&amp;utm_campaign=Badge_Grade)
[![npm](https://img.shields.io/npm/dm/react-xmasonry.svg)](https://www.npmjs.com/package/react-xmasonry)
[![License](https://img.shields.io/github/license/zitros/react-xmasonry.svg)](LICENSE)
[![File Size](http://img.badgesize.io/ZitRos/react-xmasonry/master/dist/index.js)](https://github.com/ZitRos/react-xmasonry/blob/master/dist/index.js)
[![File Size (GZip)](http://img.badgesize.io/ZitRos/react-xmasonry/master/dist/index.js?compression=gzip)](https://github.com/ZitRos/react-xmasonry/blob/master/dist/index.js)
[![GitHub](https://img.shields.io/github/stars/zitros/react-xmasonry.svg?style=social&label=Star)](https://github.com/ZitRos/react-xmasonry)

Responsive, minimalistic and full-featured __native__ masonry layout (grid) for React JS.

Features
--------

+ React JS native masonry layout implementation with no dependencies.
+ Minimalistic design and simple use case.
+ Ability to control blocks width (in columns) and columns targeting width.
+ Responsive, mobile-friendly approach (so there is no "fixed block width" option).
+ Fully customizable: use CSS animations and transitions you wish (use `.xmasonry` and `.xblock` selectors).

[Demo](https://zitros.github.io/react-xmasonry)
-----------------------------------------------

Check the XMasonry [demos page](https://zitros.github.io/react-xmasonry). You can also see the
[notes application](https://zitros.github.io/easy-local-notes/) made with `react-xmasonry`. 
Play with [this code pen](https://codepen.io/ZitRos/pen/GmrLQB) to see what XMasonry can.

Installation
------------

```bash
npm install react-xmasonry --save-dev
```

Or, if you use the old-style `<script>` tag or need UMD module for demos, use the next:

```html
<script type="text/javascript" src="https://unpkg.com/react-xmasonry/dist/index.js"></script>
```

Having trouble installing [react-xmasonry](https://www.npmjs.com/package/react-xmasonry)? 
Check [this issue](https://github.com/ZitRos/react-xmasonry/issues/1) or 
[open](https://github.com/ZitRos/react-xmasonry/issues) a new one if you still
struggling.

Usage
-----

Import `XMasonry` and `XBlock` components:

```js
import { XMasonry, XBlock } from "react-xmasonry";
```

The simplest layout using JSX and a little styling may look like as following:

```jsx
render () {
    const data = [1, 2, 3, 4, 5];
    return <XMasonry>{ data.map(number =>
        <XBlock key={ number }>
            <div className="card">
                <h1>Card #{ number }</h1>
                <p>Any text!</p>
            </div>
        </XBlock>
    )}</XMasonry>
}
```

There is no more JavaScript than positioning and sizing! Use any CSS to make animations and 
transitions you like (`.xmasonry` and `.xblock` selectors), for example:

```css
@keyframes comeIn {
    0% { transform: scale(0) }
    75% { transform: scale(1.03) }
    100% { transform: scale(1) }
}

.xmasonry .xblock {
    animation: comeIn ease 0.5s;
    animation-iteration-count: 1;
    transition: left .3s ease, top .3s ease;
}

.card {
    margin: 7px;
    padding: 5px;
    border-radius: 3px;
    box-shadow: 0 1px 3px darkgray;
}
```

And all the further magic XMasonry will do for you. See the [demos page](https://zitros.github.io/react-xmasonry)
sources [here](https://github.com/ZitRos/react-xmasonry/blob/master/docs/jsx/CardsDemo.jsx).

Configuring Components
----------------------

There are several properties you can assign to `XMasonry` and `XBlock` components.

### `<XMasonry>` Component Properties

| Property | Default | Description |
|---|---|---|
| `center` | `true` | A `boolean` value determining whether nested `<XBlock>`s should be centered if there are some empty columns left. |
| `maxColumns` | `Infinity` | A `number` identifying the maximum columns number. |
| `responsive` | `true` | A `boolean` value determining whether the layout should be responsive to window size changes. |
| `smartUpdate` | `true` | A `boolean` value indicating whether Smart Updates are enabled. Smart Update is an XMasonry feature that performs silent checks on XMasonry XBlocks sizes and updates the layout when any size changes are detected. These checks work in the next way: when any update on XMasonry happens, Smart Update will schedule sizes check through the 100 ms (default), then, if no sizes changed, through the 200 ms, 400 ms and so on. When any change happens, this procedure repeats, starting from 100 ms check. These checks and updates are highly optimized - use it for your convenience! |
| `smartUpdateCeil` | `Infinity` | A `number` in milliseconds which determines the maximum size check interval for XMasonry Smart Update. If you are just too lazy to update dynamic layout manually with `update` method, it's okay to set this prop to some value in milliseconds (for example, 1000 ms). After Smart Update checks interval reaches the specified value, it will start looping to continuously perform checks with `smartUpdateCeil` interval of time. All size checks are optimized and does not waste computing power. |
| `targetBlockWidth` | `300` | A `number` which determines the "target" width in pixels of the nested `<XBlock>`s. The layout takes all available space, and determines the number of columns using this value. For example, if container has `600` px of available width and we specify `targetBlockWidth={200}`, we will get exactly `3` columns of `200` px width. It will still be `3` columns if there is `660` pixels available, this time with each column taking `220` px. The simplified expression for number of columns is the following: `Math.max(1, Math.round(containerWidth / targetBlockWidth))`. |
| `updateOnFontLoad` | `true` | A `boolean` value determining whether the layout should be updated when fonts are loaded. |
| `updateOnImagesLoad` | `true` | A `boolean` value determining whether the layout should be updated when images finish loading. It normally takes a little while until images are loaded, and this causes incorrect blocks heights calculations at the beginning. This option allows to auto-update grid sizes when images complete loading. If layout contains no images, no handlers will be assigned. |

### `<XBlock>` Component Properties

| Property | Default | Description |
|---|---|---|
| `width` | `1` | A `number` which determines nested block width **in columns**. If the number of columns available is less than the specified width, nested block will shrink to fit available space. |

### Accessing `<XMasonry>` by Reference

You can access `<XMasonry>` component by reference, but do it only if it is necessarily (for example,
when inner content dynamically changes in size):

```jsx
<XMasonry ref={ (x) => this.xMasonry = x }>
    // ...
</XMasonry>
```

Note that all the listed properties of `<XMasonry>` component are **read-only**.

| Ref Property | Type | Description |
|---|---|---|
| `columns` | `number` | The number of currently rendered columns. |
| `container` | `HTMLElement` | The `<div>` block containing layout. |
| `update` | `function` | Trigger this function to update nested `XBlock`s sizes and positions. It is **safe to trigger this function multiple times**, updates are optimized. Technically, this function will check if any of containers changed its size and re-render XMasonry only if size was changed. |

By default, XMasonry sniff and automatically update on the next events:
1. Window size changes, see `responsive` prop.
2. Font load events, see `updateOnFontLoad` prop.
3. Image load events, see `updateOnImagesLoad` prop.
4. Children changes like adding, replacing or deleting children.
5. After any change in layout happens, see `smartUpdate` prop.

### XMasonry Under the Hood

Technically, XMasonry component renders 3 times:

1. "Empty Render" (ER), when XMasonry just renders its empty container and measures the available width;
2. "Invisible Render" (IR), when XMasonry renders `visibility: hidden` blocks width computed column widths to measure their heights;
3. And finally "Actual Render" (AR), when it renders elements with computed dimensions and positions. The `.xblock` style gets applied here only, so you can put animations on it.

This stages take around 3-4 frames to appear on the screen (~60ms).

Each time when elements change in masonry layout (images load or animation end, depending on initial
configuration), the XMasonry `update` method is triggered. It goes through rendered elements this 
time, and looks for any size changes there. Thanks to React, all the DOM updates are optimized here 
and this function is very light to call. You can manually trigger XMasonry `update` function, 
whenever you need to update the layout. By default, after any change in layout, Smart Update will 
be performed. Check `smartUpdate` prop description for more information.

Once the window size gets changed (default behavior), the "force update" technique is applied, which
do the IR and AR phases again.

Licence
-------

[MIT](LICENSE) © [Nikita Savchenko](https://nikita.tk)
