import RabbitLyrics from '../src';
import { chinese, combined, japanese } from './lyrics';

// Header Lyrics

const lyrics = new RabbitLyrics(
  document.getElementById('header-lyrics'),
  document.getElementById('header-audio')
);

document
  .getElementById('chinese-input')
  .addEventListener('change', function (e) {
    if (e.target.checked) {
      lyrics.setLyrics(chinese);
    }
  });

document
  .getElementById('japanese-input')
  .addEventListener('change', function (e) {
    if (e.target.checked) {
      lyrics.setLyrics(japanese);
    }
  });

document
  .getElementById('combined-input')
  .addEventListener('change', function (e) {
    if (e.target.checked) {
      lyrics.setLyrics(combined);
    }
  });

document.getElementById('japanese-input').checked = true;
lyrics.setLyrics(japanese);
