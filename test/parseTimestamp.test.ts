import parseTimestamp from '../src/parseTimestamp';

describe('parseTimestamp()', () => {
  it('parses timestamp in [xx:xx.xx] format', () => {
    expect(parseTimestamp('[00:00.00]')).toEqual(0);
    expect(parseTimestamp('[00:01.23]')).toEqual(1.23);
    expect(parseTimestamp('[01:20.03]')).toEqual(1 * 60 + 20.03);
    expect(parseTimestamp('[23:20.03]')).toEqual(23 * 60 + 20.03);
  });

  it('parses timestamp in [xx:xx:xx.xx] format', () => {
    expect(parseTimestamp('[0:00:45.87]')).toEqual(45.87);
    expect(parseTimestamp('[1:00:45.87]')).toEqual(1 * 60 * 60 + 45.87);
    expect(parseTimestamp('[1:23:31.23]')).toEqual(
      1 * 60 * 60 + 23 * 60 + 31.23
    );
    expect(parseTimestamp('[4:23:31.23]')).toEqual(
      4 * 60 * 60 + 23 * 60 + 31.23
    );
  });
});
