import parseTimestamp from './parseTimestamp';

interface LyricsElementData {
  /** Seconds of starting timestamp */
  startsAt: number;
  /** Seconds of ending timestamp */
  endsAt: number;
}

export interface LyricsLineData extends LyricsElementData {
  /** Lyrics line content */
  content: LyricsInlineData[];
}

export interface LyricsInlineData extends LyricsElementData {
  /** Lyrics inline content */
  content: string;
}

const timeRegex = /\[(\d+:)?\d+:\d+\.\d+\]/;
const startRegex = /^\[(\d+:)?\d+:\d+\.\d+\]/;
const endRegex = /\[(\d+:)?\d+:\d+\.\d+\]$/;

export default function parseLyrics(source: string): LyricsLineData[] {
  const lines = source
    .trim()
    .split(/\r\n|\n|\r/)
    .map((line) => line.trim());
  const results: LyricsLineData[] = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    const startMatch = line.match(startRegex);
    const endMatch = line.match(endRegex);

    // Infinity will be replaced later by checking the context
    const startsAt = startMatch ? parseTimestamp(startMatch[0]) : Infinity;
    const endsAt = endMatch ? parseTimestamp(endMatch[0]) : Infinity;

    const content = parseLyricsLine(line);

    results.push({ startsAt, endsAt, content });
  }
  fillMissingEndTimestamps(results);
  fillMissingStartTimestamps(results);
  return results;
}

function parseLyricsLine(source: string): LyricsInlineData[] {
  const results: LyricsInlineData[] = [];
  let pointer = 0;
  let lastTime = Infinity;
  while (pointer < source.length) {
    const match = source.substr(pointer).match(timeRegex);
    if (match && match[0] && typeof match.index !== 'undefined') {
      const time = parseTimestamp(match[0]);
      if (match.index > 0) {
        results.push({
          startsAt: lastTime,
          endsAt: time,
          content: source.substr(pointer, match.index),
        });
      }
      lastTime = time;
      pointer += match.index + match[0].length;
    } else {
      results.push({
        startsAt: lastTime,
        endsAt: Infinity,
        content: source.substr(pointer),
      });
      pointer = source.length;
    }
  }
  return results;
}

function fillMissingStartTimestamps(results: LyricsLineData[]): void {
  let lastTime = Infinity;
  for (let i = 0; i < results.length; i++) {
    if (results[i].startsAt === Infinity) {
      results[i].startsAt = lastTime;
    } else {
      lastTime = results[i].startsAt;
    }
    for (let j = 0; j < results[i].content.length; j++) {
      if (results[i].content[j].startsAt === Infinity) {
        results[i].content[j].startsAt = lastTime;
      } else {
        lastTime = results[i].content[j].startsAt;
      }
    }
  }
}

function fillMissingEndTimestamps(results: LyricsLineData[]): void {
  let lastTime = Infinity;
  for (let i = results.length - 1; i >= 0; i--) {
    if (results[i].endsAt === Infinity) {
      results[i].endsAt = lastTime;
    } else {
      lastTime = results[i].endsAt;
    }
    for (let j = results[i].content.length - 1; j >= 0; j--) {
      if (results[i].content[j].endsAt === Infinity) {
        results[i].content[j].endsAt = lastTime;
      } else {
        lastTime = results[i].content[j].endsAt;
      }
      if (results[i].content[j].startsAt !== Infinity) {
        lastTime = results[i].content[j].startsAt;
      }
    }
    if (results[i].startsAt !== Infinity) {
      lastTime = results[i].startsAt;
    }
  }
}
