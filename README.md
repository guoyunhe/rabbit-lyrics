# Rabbit Lyrics

**Rabbit Lyrics** is an audio and timed lyrics synchronizer for web. No jQuery
required. No any dependencies.

Yes, here are already many similar things but Rabbit Lyrics has something special:

1. Highlight multiple lines at the same time. Useful when adding translations.
2. Do not depend on jQuery or any other libraries.
3. Predefined themes for different web design.

[WordPress plugin](https://gitlab.com/guoyunhe/rabbit-lyrics-wp) is also available.

## Get & Use

### Without build tools

Download from [here](https://gitlab.com/guoyunhe/rabbit-lyrics/releases).

or link files in HTML:

```html
<script src="path/to/rabbit-lyrics/dist/rabbit-lyrics.js" type="text/javascript">
```

### Use Webpack

> I have never thought, one day, people have to INSTALL JavaScript :thinking:

Install it through NPM

```bash
npm install rabbit-lyrics --save
```

Import it into your project (require sass-loader):

```js
import RabbitLyrics from "rabbit-lyrics";
```

### Use Gulp+Browserify

Install it through NPM

```bash
npm install rabbit-lyrics --save
```

Import JavaScript:

```js
const RabbitLyrics = require("rabbit-lyrics/dist/rabbit-lyrics");
```

## Initialize

### HTML attributes

When using HTML markups to initialize lyrics, you must add class `rabbit-lyrics`
to the lyrics container.

Idealy, add `data-media` attribute to specify the selector of audio or video
element that you want to synchronize with lyrics. If `data-media` is not provided
or element cannot be found, it will search first audio or video element before
lyrics container.

```html
<audio id="audio-1" controls>
    <source src="audio-1.ogg" type="audio/ogg">
    <source src="audio-1.mp3" type="audio/mpeg">
</audio>

<div class="rabbit-lyrics" data-audio="#audio-1">
[00:05.00] This is a little song
[00:07.00] The song that nobody knows
...
</div>
```

### JavaScript

When using JavaScript to initialize lyrics, you must **NOT** add `rabbit-lyrics`
class to lyrics container.

If `mediaElement` is not provided or element cannot be found, it will search first
audio or video element before lyrics container.

```html
<audio id="audio-1" controls>
    <source src="audio-1.ogg" type="audio/ogg">
    <source src="audio-1.mp3" type="audio/mpeg">
</audio>

<div id="lyrics-1">
[00:05.00] This is a little song
[00:07.00] The song that nobody knows
...
</div>
```

```js
new RabbitLyrics({
  element: document.findElementById("lyrics-1"),
  mediaElement: document.findElementById("audio-1")
});
```

## Options

### element

Type: `HTMLDivElement`

The `div` element that contains lyrics.

### mediaElement

Type: `HTMLMediaElement` (audio or video elements)

Default: the first audio or video element before

HTML attribute: `data-media-element` (selector of media element)

### viewMode

Type: `string`

Default: `'default'`

HTML attribute: `data-view-mode`

- default
- mini
- full

## Custom Styles

Rabbit Lyrics comes with a minimum style. You can override it with your own CSS:

```css
.rabbit-lyrics {
  border: 1px solid #cccccc;
}

.rabbit-lyrics .line.active {
  background: #ff0000;
  color: #ffff00;
  font-weight: bold;
}
```

## Examples

[View all examples online](https://guoyunhe.me/rabbit-lyrics/#examples)
