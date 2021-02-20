/**
 * Find first audio or video element before lyrics element. Only used when
 * no mediaElement was specified. If nothing found, return null.
 */
export default function findMediaElement(
  element: HTMLElement
): HTMLMediaElement | null {
  if (element.dataset.media) {
    const mediaElement = document.querySelector(element.dataset.media);
    if (mediaElement) return mediaElement as HTMLMediaElement;
  }

  let previousElement = element.previousElementSibling;
  // First, lookup siblings before
  while (previousElement) {
    if (
      previousElement.tagName.toLowerCase() === 'audio' ||
      previousElement.tagName.toLowerCase() === 'video'
    ) {
      return previousElement as HTMLMediaElement;
    } else {
      const mediaChildren = previousElement.querySelectorAll('audio, video');
      if (mediaChildren) {
        return mediaChildren.item(mediaChildren.length - 1) as HTMLMediaElement;
      }
    }
    previousElement = previousElement.previousElementSibling;
  }

  if (element.parentElement) {
    return findMediaElement(element.parentElement);
  } else {
    return null;
  }
}
