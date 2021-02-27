import { chinese, combined, japanese, karaoke, romaji } from './lyrics';

const examples = document.getElementsByClassName('example');

for (const example of examples) {
  example.innerHTML = example.innerHTML
    .replace('{{japanese}}', japanese)
    .replace('{{chinese}}', chinese)
    .replace('{{combined}}', combined)
    .replace('{{karaoke}}', karaoke)
    .replace('{{romaji}}', romaji);
  const pre = document.createElement('pre');
  const code = document.createElement('code');
  code.className = 'language-html';
  code.textContent = example.innerHTML
    .trim()
    .replaceAll(
      'guoyunhe.me/wp-content/uploads/2015/03/hao-gan-win-win-wu-tiao-jian',
      'example.com/audio'
    )
    .replaceAll('        ', '');
  pre.append(code);
  example.append(pre);
}
