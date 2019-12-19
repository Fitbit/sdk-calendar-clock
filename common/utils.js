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
    return `in ${days} ${pluralize(days, "day")}`;
  }

  if (hours > 0) {
    return `in ${hours}${pluralize(hours, "hr")}${
      hours < 3 && minutes > 0 ? ` ${minutes}${pluralize(minutes, "min")}` : ""
    }`;
  }

  if (minutes > 0) {
    return `in ${minutes}${pluralize(minutes, "min")}`;
  }

  return "Now";
}

/**
 * Pluralizes the units if required
 * @param {Number} number
 * @param {String} unit
 */
function pluralize(number, unit) {
  return number === 1 ? unit : `${unit}s`;
}
