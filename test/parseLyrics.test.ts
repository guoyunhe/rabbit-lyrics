import parseLyrics from '../src/parseLyrics';

describe('parseLyrics()', () => {
  it('parses basic lyrics', () => {
    const source =
      '[00:01.11]Arise ye workers from your slumbers\n[00:02.33]Arise ye prisoners of want';
    expect(parseLyrics(source)).toEqual([
      {
        startsAt: 1.11,
        endsAt: 2.33,
        content: [
          {
            startsAt: 1.11,
            endsAt: 2.33,
            content: 'Arise ye workers from your slumbers',
          },
        ],
      },
      {
        startsAt: 2.33,
        endsAt: Infinity,
        content: [
          {
            startsAt: 2.33,
            endsAt: Infinity,
            content: 'Arise ye prisoners of want',
          },
        ],
      },
    ]);
  });

  it('parses lyrics with line breaks', () => {
    const source =
      '[00:01.11]Arise ye workers from your slumbers\nDebout les damnés de la terre\n[00:02.33]Arise ye prisoners of want\nDebout les forçats de la faim';
    expect(parseLyrics(source)).toEqual([
      {
        startsAt: 1.11,
        endsAt: 2.33,
        content: [
          {
            startsAt: 1.11,
            endsAt: 2.33,
            content: 'Arise ye workers from your slumbers',
          },
        ],
      },
      {
        startsAt: 1.11,
        endsAt: 2.33,
        content: [
          {
            startsAt: 1.11,
            endsAt: 2.33,
            content: 'Debout les damnés de la terre',
          },
        ],
      },
      {
        startsAt: 2.33,
        endsAt: Infinity,
        content: [
          {
            startsAt: 2.33,
            endsAt: Infinity,
            content: 'Arise ye prisoners of want',
          },
        ],
      },
      {
        startsAt: 2.33,
        endsAt: Infinity,
        content: [
          {
            startsAt: 2.33,
            endsAt: Infinity,
            content: 'Debout les forçats de la faim',
          },
        ],
      },
    ]);
  });

  it('parses karaoke lyrics', () => {
    const source =
      '[00:01.11]Arise [00:01.33]ye [00:01.44]workers [00:01.66]from [00:01.88]your [00:02.11]slumbers\n[00:02.33]Arise [00:02.55]ye [00:02.66]prisoners [00:02.88]of [00:02.99]want';
    expect(parseLyrics(source)).toEqual([
      {
        startsAt: 1.11,
        endsAt: 2.33,
        content: [
          {
            startsAt: 1.11,
            endsAt: 1.33,
            content: 'Arise ',
          },
          {
            startsAt: 1.33,
            endsAt: 1.44,
            content: 'ye ',
          },
          {
            startsAt: 1.44,
            endsAt: 1.66,
            content: 'workers ',
          },
          {
            startsAt: 1.66,
            endsAt: 1.88,
            content: 'from ',
          },
          {
            startsAt: 1.88,
            endsAt: 2.11,
            content: 'your ',
          },
          {
            startsAt: 2.11,
            endsAt: 2.33,
            content: 'slumbers',
          },
        ],
      },
      {
        startsAt: 2.33,
        endsAt: Infinity,
        content: [
          {
            startsAt: 2.33,
            endsAt: 2.55,
            content: 'Arise ',
          },
          {
            startsAt: 2.55,
            endsAt: 2.66,
            content: 'ye ',
          },
          {
            startsAt: 2.66,
            endsAt: 2.88,
            content: 'prisoners ',
          },
          {
            startsAt: 2.88,
            endsAt: 2.99,
            content: 'of ',
          },
          {
            startsAt: 2.99,
            endsAt: Infinity,
            content: 'want',
          },
        ],
      },
    ]);
  });
});
