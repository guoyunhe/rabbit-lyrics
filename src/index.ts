/*
 * Rabbit Lyrics
 *
 * JavaScript audio and timed lyrics synchronizer. No jQuery required.
 *
 * License: GNU General Public License version 3
 * Author: Guo Yunhe <i@guoyunhe.com>
 * Repository: https://github.com/guoyunhe/rabbit-lyrics
 */

import findMediaElement from './findMediaElement';
import RabbitLyrics from './RabbitLyrics';
import './index.css';

export { RabbitLyrics };

// Support HTML initialization
document.addEventListener(
  'DOMContentLoaded',
  function () {
    let elements = document.getElementsByClassName('rabbit-lyrics');

    for (let i = 0; i < elements.length; i++) {
      const lyricsElement = elements.item(i) as HTMLElement;
      if (lyricsElement) {
        const mediaElement = findMediaElement(lyricsElement);
        if (mediaElement) {
          new RabbitLyrics(lyricsElement, mediaElement);
        }
      }
    }
  },
  false
);
