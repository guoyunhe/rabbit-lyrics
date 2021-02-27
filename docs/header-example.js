import RabbitLyrics from '../src';
import * as lyricsTexts from './lyrics';

// Header Lyrics

const alignmentSelect = document.getElementById('alignment-select');
const languageSelect = document.getElementById('language-select');
const viewModeSelect = document.getElementById('viewmode-select');

const lyrics = new RabbitLyrics(
  document.getElementById('header-lyrics'),
  document.getElementById('header-audio'),
  {
    lyrics: lyricsTexts[languageSelect.value],
    alignment: alignmentSelect.value,
  }
);

languageSelect.addEventListener('change', function (e) {
  lyrics.setLyrics(lyricsTexts[e.target.value]);
});

alignmentSelect.addEventListener('change', function (e) {
  lyrics.setAlignment(e.target.value);
});

viewModeSelect.addEventListener('change', function (e) {
  lyrics.setViewMode(e.target.value);
});
