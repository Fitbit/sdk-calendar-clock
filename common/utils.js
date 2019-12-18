/**
 * Add zero in front of numbers < 10
 * @param {number} i
 */
export function zeroPad(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

/**
 * Convert a Date object to seconds since January 1, 1970
 * @param {Date} date
 */
export function toEpochSec(date) {
  return Math.floor(date.getTime() / 1000);
}

/**
 * Convert a seconds since January 1, 1970 to a Date object
 * @param {Number} seconds
 */
export function fromEpochSec(seconds) {
  return new Date(seconds * 1000);
}

/**
 * Returns a friendly time until a specified date
 * @param {Date} date
 */
export function timeUntil(date) {
  const today = new Date();
  const days = parseInt((date - today) / (1000 * 60 * 60 * 24));
  const hours = parseInt((Math.abs(date - today) / (1000 * 60 * 60)) % 24);
  const minutes = parseInt(
    (Math.abs(date.getTime() - today.getTime()) / (1000 * 60)) % 60
  );

  if (days > 0) {
    return `in ${days} day${pluralize(days)}`;
  }

  if (hours > 0) {
    return `in ${hours}hr${pluralize(hours)}${
      hours < 3 && minutes > 0 ? ` ${minutes}min${pluralize(minutes)}` : ""
    }`;
  }

  if (minutes > 0) {
    return `in ${minutes}min${pluralize(minutes)}`;
  }

  return "Now";
}

/**
 * Returns an `s` if the number is plural
 * @param {Number} number
 */
function pluralize(number) {
  return number === 1 ? "" : "s";
}
