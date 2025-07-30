import getReadingTime from 'reading-time';
import { toString } from 'mdast-util-to-string';

export function remarkReadingTime() {
  return function (tree, { data }) {
    const textOnPage = toString(tree);
    const readingTime = getReadingTime(textOnPage);
    
    // Automaticky generuj slovenský text v požadovanom formáte
    const minutes = readingTime.minutes;
    const roundedMinutes = Math.ceil(minutes) || 1;
    data.astro.frontmatter.minutesRead = `${roundedMinutes}-minútové čítanie`;
  };
}