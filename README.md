# Rabbit Lyrics

**Rabbit Lyrics** is an audio and timed lyrics synchronizer for web. No jQuery
required. No any dependencies.

Yes, here are already many similar things but Rabbit Lyrics has something special:

1. Highlight multiple lines at the same time. Useful when adding translations.
2. Do not depend on jQuery or any other libraries.
3. Predefined themes for different web design.

[WordPress plugin](https://gitlab.com/guoyunhe/rabbit-lyrics-wp) is also available.

## Download

### Direct download

Download from [here](https://gitlab.com/guoyunhe/rabbit-lyrics/releases).

### NPM Install

> I have never thought, one day, people have to INSTALL JavaScript :thinking:

```bash
npm install rabbit-lyrics --save
```

## Import

### Link in HTML

```html
<script src="path/to/rabbit-lyrics/dist/rabbit-lyrics.js" type="text/javascript">
```

### Import with Webpack/Browserify

ES6:

```js
import RabbitLyrics from "rabbit-lyrics";
```

CommonJS:

```js
const RabbitLyrics = require("rabbit-lyrics/dist/rabbit-lyrics");
```

## Usage

### Method 1: HTML

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

### Method 2: JavaScript

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

Type: `HTMLElement`

The element that contains lyrics. If you use HTML markups, this is the element
that contains `rabbit-lyrics` class.

### mediaElement

Type: `HTMLMediaElement` (audio or video elements)

Default: the first audio or video element before lyrics container

HTML attribute: `data-media` (selector of media element)

### viewMode

Type: `string`

Default: `'default'`

HTML attribute: `data-view-mode`

Availiable values:

- default
- mini
- full

### alignment

Type: `string`

Default: `'left'`

HTML attribute: `data-alignment`

Available values:

- left
- right
- center

It is the same as CSS `text-align` property.

### height

Type: `number`

HTML attribute: `data-height`

Height in pixels. Only effective with mini and default view mode.

## Custom Styles

Rabbit Lyrics comes with a minimum style. You can override it with your own CSS:

```css
.rabbit-lyrics {
  border: 1px solid #cccccc;
}

.rabbit-lyrics__line {
  margin: 5px 0;
}

/* Active line */
.rabbit-lyrics__line--active {
  background: #ff0000;
  color: #ffff00;
  font-weight: bold;
}

/* Selectors for view modes */
.rabbit-lyrics--default {
  ...
}
.rabbit-lyrics--mini {
  ...
}
.rabbit-lyrics--full {
  ...
}

/* Selectors for playing status */
.rabbit-lyrics--playing {
  ...
}
.rabbit-lyrics--paused {
  ...
}
.rabbit-lyrics--waiting {
  ...
}
.rabbit-lyrics--ended {
  ...
}
```

## Examples

[View all examples online](https://guoyunhe.gitlab.io/rabbit-lyrics/#examples)

## Trouble Shooting

### Audio and text out of synchronization when skipping

If your MP3 files are recorded by some audio recording application, it can be improperly encoded. You can transcode the file with VLC or CloundConvert to MP3 or OGG. Then try again.

If this doesn't help, submit an issue and I will try to help you!
