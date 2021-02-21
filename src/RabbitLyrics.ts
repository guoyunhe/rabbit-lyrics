import parseLyrics, { LyricsInlineData, LyricsLineData } from './parseLyrics';

export type RabbitLyricsViewMode = 'clip' | 'full' | 'mini';
export type RabbitLyricsAlignment = 'left' | 'right' | 'center';

export interface RabbitLyricsLine extends LyricsLineData {
  element: HTMLDivElement;
  content: (LyricsInlineData & {
    element: HTMLSpanElement;
  })[];
}

/**
 * RabbitLyrics options.
 */
export interface RabbitLyricsOptions {
  /**
   * Support three view modes:
   * - clip: a scrollable lyrics (default), good for music player
   * - full: full text lyrics, good for audio books
   * - mini: single line lyrics, good for videos
   * To change height and font size, please use your own CSS overrides.
   */
  viewMode: RabbitLyricsViewMode;
  /** Alignment direction. Default is 'center'. */
  alignment: RabbitLyricsAlignment;
  /** Lyrics text with timestamps. */
  lyrics: string;
}

/**
 * RabbitLyrics main controller.
 */
export default class RabbitLyrics implements RabbitLyricsOptions {
  public viewMode: RabbitLyricsViewMode = 'clip';
  public alignment: RabbitLyricsAlignment = 'center';
  public lyrics: string = '';
  public lyricsLines: RabbitLyricsLine[] = [];

  constructor(
    /** Lyrics container element. Support data-* attributes for options. */
    public lyricsElement: HTMLElement & { rabbitLyrics?: RabbitLyrics },
    /** Audio or video element. Note: embeded media elements in <iframe> are not supported. */
    public mediaElement: HTMLMediaElement,
    /** Lyrics options. */
    options?: Partial<RabbitLyricsOptions>
  ) {
    if (this.lyricsElement.rabbitLyrics) {
      // Return existing instance to avoid duplicates
      return this.lyricsElement.rabbitLyrics;
    }
    // Bind new instance to lyrics element
    this.lyricsElement.rabbitLyrics = this;

    // Merge element attribute options
    Object.assign(this, this.getOptionsFromAttributes());
    // Merge user specified options
    if (options) {
      Object.assign(this, options);
    }

    this.render();

    // Bind this to event handlers
    // Rest scroll bar
    this.lyricsElement.scrollTop = 0;

    // Bind playback update events
    this.mediaElement.addEventListener('timeupdate', this.synchronize);

    this.mediaElement.addEventListener('play', this.handleStatusChange);
    this.mediaElement.addEventListener('playing', this.handleStatusChange);
    this.mediaElement.addEventListener('pause', this.handleStatusChange);
    this.mediaElement.addEventListener('waiting', this.handleStatusChange);
    this.mediaElement.addEventListener('ended', this.handleStatusChange);
  }

  private render(): void {
    // Add class names
    this.lyricsElement.classList.add('rabbit-lyrics');
    this.lyricsElement.classList.add('rabbit-lyrics--' + this.viewMode);
    this.lyricsElement.classList.add('rabbit-lyrics--' + this.alignment);
    this.lyricsElement.textContent = null;

    // Render lyrics lines
    this.lyricsLines = parseLyrics(this.lyrics).map((line) => {
      const lineElement = document.createElement('div');
      lineElement.className = 'rabbit-lyrics__line';
      lineElement.addEventListener('click', () => {
        this.mediaElement.currentTime = line.startsAt;
      });
      const lineContent = line.content.map((inline) => {
        const inlineElement = document.createElement('span');
        inlineElement.className = 'rabbit-lyrics__inline';
        inlineElement.textContent = inline.content;
        lineElement.append(inlineElement);
        return { ...inline, element: inlineElement };
      });
      this.lyricsElement.append(lineElement);
      return { ...line, content: lineContent, element: lineElement };
    });
  }

  private getOptionsFromAttributes(): Partial<RabbitLyricsOptions> {
    const options: Partial<RabbitLyricsOptions> = {};

    if (this.lyricsElement.textContent?.trim()) {
      options.lyrics = this.lyricsElement.textContent.trim();
    }

    if (this.lyricsElement.dataset.viewMode) {
      options.viewMode = this.lyricsElement.dataset
        .viewMode as RabbitLyricsViewMode;
    }

    if (this.lyricsElement.dataset.alignment) {
      options.alignment = this.lyricsElement.dataset
        .alignment as RabbitLyricsAlignment;
    }

    return options;
  }

  private handleStatusChange = (e: Event) => {
    let status; // playing, paused, waiting, ended
    switch (e.type) {
      case 'play':
      case 'playing':
        status = 'playing';
        break;
      case 'pause':
        status = 'paused';
        break;
      case 'waiting':
        status = 'waiting';
        break;
      case 'ended':
        status = 'ended';
        break;
    }
    this.lyricsElement.classList.remove(
      'rabbit-lyrics--playing',
      'rabbit-lyrics--paused',
      'rabbit-lyrics--waiting',
      'rabbit-lyrics--ended'
    );
    if (status) {
      this.lyricsElement.classList.add('rabbit-lyrics--' + status);
    }
  };

  /**
   * Synchronize media element time and lyrics lines
   */
  private synchronize = () => {
    let time = this.mediaElement.currentTime;
    let changed = false; // If here are active lines changed
    const activeLines = this.lyricsLines.filter((line) => {
      if (time >= line.startsAt && time < line.endsAt) {
        // If line should be active
        if (!line.element.classList.contains('rabbit-lyrics__line--active')) {
          // If it hasn't been activated
          changed = true;
          line.element.classList.add('rabbit-lyrics__line--active');
        }
        line.content.forEach((inline) => {
          if (time >= inline.startsAt) {
            inline.element.classList.add('rabbit-lyrics__inline--active');
          } else {
            inline.element.classList.remove('rabbit-lyrics__inline--active');
          }
        });
        return true;
      } else {
        // If line should be inactive
        if (line.element.classList.contains('rabbit-lyrics__line--active')) {
          // If it hasn't been deactivated
          changed = true;
          line.element.classList.remove('rabbit-lyrics__line--active');
          line.content.forEach((inline) => {
            inline.element.classList.remove('rabbit-lyrics__inline--active');
          });
        }
        return false;
      }
    });

    if (changed && activeLines.length > 0) {
      // Calculate scroll top. Vertically align active lines in middle
      const activeLinesOffsetTop =
        (activeLines[0].element.offsetTop +
          activeLines[activeLines.length - 1].element.offsetTop +
          activeLines[activeLines.length - 1].element.offsetHeight) /
        2;
      this.lyricsElement.scrollTop =
        activeLinesOffsetTop - this.lyricsElement.clientHeight / 2;
    }
  };
}
