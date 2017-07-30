# Rabbit Lyrics

__Rabbit Lyrics__ is an audio and timed lyrics synchronizer for web. No jQuery required. No dependencies.

Yes, here are already many similar things but Rabbit Lyrics has something special:


1. Highlight multiple lines at the same time. Especially useful when adding translations.
2. Do not depend on jQuery or any other libraries.
3. Predefined themes for different web design.


[WordPress plugin](https://github.com/guoyunhe/rabbit-lyrics-wp) is also available.

## Install?

> I have never thought one day, people have to INSTALL JavaScript :thinking:

You can install through NPM

```
npm install rabbit-lyrics --save
```

or download from [here](https://github.com/guoyunhe/rabbit-lyrics/releases).

To import it into your project, you can either use Webpack way (require sass-loader):

```js
import RabbitLyrics from 'rabbit-lyrics'
```

or link files in HTML:

```html
<link href="path/to/rabbit-lyrics/dist/rabbit-lyrics.css" rel="stylesheet" type="text/css"/>
<script src="path/to/rabbit-lyrics/dist/rabbit-lyrics.js" type="text/javascript">
```

## Initialize

### HTML

When using HTML markups to initialize lyrics, you must add class `rabbit-lyrics` to the lyrics container.

Idealy, add `data-media` attribute to specify the selector of audio or video element that you want to synchronize with lyrics. If `data-media` is not provided or element cannot be found, it will search first audio or video element before lyrics container.

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

When using JavaScript to initialize lyrics, you must __NOT__ add `rabbit-lyrics` class to lyrics container.

If `mediaElement` is not provided or element cannot be found, it will search first audio or video element before lyrics container.

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
  element: document.findElementById('lyrics-1'),
  mediaElement: document.findElementById('audio-1')
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

* default
* mini
* full

## Examples

[View all examples online](https://guoyunhe.me/rabbit-lyrics/#examples)

### Basic

[View online](https://guoyunhe.me/rabbit-lyrics/#example-basic)

### Multiple lines and translations

[View online](https://guoyunhe.me/rabbit-lyrics/#example-multiple-lines)

### Mini view mode

[View online](https://guoyunhe.me/rabbit-lyrics/#example-mini-view-mode)

### Full view mode

[View online](https://guoyunhe.me/rabbit-lyrics/#example-full-view-mode)
