Rabbit Lyrics
=============

JavaScript audio and timed lyrics synchronizer.

* [WordPress Plugin](https://github.com/guoyunhe/rabbit-lyrics-wp)

Dependency
----------

* jQuery

Usage
-----

Use HTML:
```html
<audio id="audio1" controls>
  <source src="rabbit.ogg" type="audio/ogg">
  <source src="rabbit.mp3" type="audio/mpeg">
</audio>
<div class="rabbit-lyrics" data-audio="#audio1" data-size="medium">
[00:01.00]one happy rabbit
[00:04.00]two happy rabbit
[00:08.00]three happy rabbit
[00:11.00]la...

[00:21.00]one happy rabbit
[00:24.00]two happy rabbit
[00:28.00]three happy rabbit
[00:31.00]la...
</div>
```

Use JavaScript:
```html
<audio id="audio1" controls>
  <source src="rabbit.ogg" type="audio/ogg">
  <source src="rabbit.mp3" type="audio/mpeg">
</audio>
<div id="lyrics1" class="rabbit-lyrics">
[00:01.00]one happy rabbit
[00:04.00]two happy rabbit
[00:08.00]three happy rabbit
[00:11.00]la...

[00:21.00]one happy rabbit
[00:24.00]two happy rabbit
[00:28.00]three happy rabbit
[00:31.00]la...
</div>
```

```js
new RabbitLyrics({
  lyricsElement: '#lyrics1', // or $('#lyrics1')
  audioElement: '#audio1', // or $('#audio1')
  size: 'medium'
});
```

Ending time stamp is optional:
```html
<audio id="audio1" controls>
  <source src="rabbit.ogg" type="audio/ogg">
  <source src="rabbit.mp3" type="audio/mpeg">
</audio>
<div class="rabbit-lyrics" data-audio="#audio1" data-size="medium">
[00:01.00]one happy rabbit
[00:04.00]two happy rabbit
[00:08.00]three happy rabbit
[00:11.00]la...[00:13.00]

[00:21.00]one happy rabbit
[00:24.00]two happy rabbit
[00:28.00]three happy rabbit
[00:31.00]la...[00:33.00]
</div>
```

Multi-line mode:
```html
<audio id="audio1" controls>
  <source src="rabbit.ogg" type="audio/ogg">
  <source src="rabbit.mp3" type="audio/mpeg">
</audio>
<div class="rabbit-lyrics" data-audio="#audio1" data-size="medium">
[00:01.00]一只快乐的兔子
yi zhi kuai le de tu zi
one happy rabbit

[00:04.00]两只快乐的兔子
liang zhi kuai le de tu zi
two happy rabbit

[00:08.00]三只快乐的兔子
san zhi kuai le de tu zi
three happy rabbit

[00:11.00]啦...
la...
la...[00:13.00]


[00:21.00]一只快乐的兔子
yi zhi kuai le de tu zi
one happy rabbit

[00:24.00]两只快乐的兔子
liang zhi kuai le de tu zi
two happy rabbit

[00:28.00]三只快乐的兔子
san zhi kuai le de tu zi
three happy rabbit

[00:31.00]啦...
la...
la...[00:33.00]
</div>
```

Options
-------

**Size**:

1. `tiny` - show 2 line of text, with slide effect, not auto scroll.
2. `medium` - default size, show about 10 lines of text, with auto scroll effect.
3. `full` - show all text, no scroll.

Custom Style
------------

Rabbit lyrics has very simple basic style. You can override it easily.

Example:
```css
.rabbit-lyrics {
  background-color: #ffeeff;
  text-align: center;
}

.rabbit-lyrics.tiny {
  height: 22px;
}

.rabbit-lyrics.medium {
  height: 80px;
}

.rabbit-lyrics .line {
  padding: 4px;
}

.rabbit-lyrics .line.active {
  color: #00eeff;
}
```
