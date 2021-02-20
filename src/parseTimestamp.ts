/** Parse timestamp and return number in seconds */
export default function parseTimestamp(timestamp: string): number {
  if (!timestamp || typeof timestamp !== 'string') return 0;

  let results;

  // [hh:mm:ss.xx] format, used by audio books
  results = timestamp.match(/\[(\d+):(\d+):(\d+\.\d+)\]/);
  if (results && results.length === 4) {
    return (
      parseInt(results[1]) * 60 * 60 +
      parseInt(results[2]) * 60 +
      parseFloat(results[3])
    );
  }

  // [mm:ss.xx] format, used for songs
  results = timestamp.match(/\[(\d+):(\d+\.\d+)\]/);
  if (results && results.length === 3) {
    return parseInt(results[1]) * 60 + parseFloat(results[2]);
  }

  return 0;
}
