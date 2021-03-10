'use strict';

function formatDuration(seconds) {
  let time = seconds;
  let dayCount = 0;
  let hourCount = 0;
  let minuteCount = 0;
  let yearCount = 0;
  const dayD = 24 * 60 * 60;
  const hourD = 60 * 60;
  const minD = 60;
  const yearD = 24 * 60 * 60 * 365;

  while (time >= yearD) {
    time = time - yearD;
    yearCount = yearCount + 1;
  }

  while (time >= dayD) {
    time = time - dayD;
    dayCount = dayCount + 1;
  }
  while (time >= hourD) {
    time = time - hourD;
    hourCount = hourCount + 1;
  }
  while (time >= minD) {
    time = time - minD;
    minuteCount = minuteCount + 1;
  }

  switch (yearCount) {
    case 0:
      yearCount = '';
      break;
    case 1:
      if (hourCount === 0 && minuteCount === 0 && dayCount === 0) {
        yearCount = yearCount + ' year';
      } else {
        yearCount = yearCount + ' year, ';
      }

      break;
    default:
      if (hourCount === 0 && minuteCount === 0 && dayCount === 0) {
        yearCount = yearCount + ' years';
      } else {
        yearCount = yearCount + ' years, ';
      }
      break;
  }

  switch (dayCount) {
    case 0:
      dayCount = '';
      break;
    case 1:
      if (hourCount === 0 && minuteCount === 0) {
        dayCount = dayCount + ' day';
      } else {
        dayCount = dayCount + ' day, ';
      }

      break;
    default:
      if (hourCount === 0 && minuteCount === 0) {
        dayCount = dayCount + ' days';
      } else {
        dayCount = dayCount + ' days, ';
      }
      break;
  }
  switch (hourCount) {
    case 0:
      hourCount = '';
      break;
    case 1:
      if (minuteCount === 0) {
        hourCount = hourCount + ' hour';
      } else {
        hourCount = hourCount + ' hour, ';
      }
      break;
    default:
      if (minuteCount === 0) {
        hourCount = hourCount + ' hours';
      } else {
        hourCount = hourCount + ' hours, ';
      }
      break;
  }
  switch (minuteCount) {
    case 0:
      minuteCount = '';
      break;
    case 1:
      seconds > 3600 ? (minuteCount = minuteCount + ' minute') : (minuteCount = minuteCount + ' minute');

      break;
    default:
      seconds > 3600 ? (minuteCount = minuteCount + ' minutes') : (minuteCount = minuteCount + ' minutes');
      break;
  }

  switch (time) {
    case 0:
      seconds === 0 ? (time = 'now') : (time = '');
      break;
    case 1:
      if (seconds > 60) {
        time = ' and ' + time + ' second';
      } else {
        time = time + ' second';
      }

      break;
    default:
      if (seconds > 60) {
        time = ' and ' + time + ' seconds';
      } else {
        time = time + ' seconds';
      }
  }
  const totalLength = yearCount.length + dayCount.length + hourCount.length + minuteCount.length + time.length;

  if (totalLength > 20 && seconds % 60 === 0) {
    let finalHour = hourCount.slice(0, hourCount.length - 2);

    return yearCount + dayCount + finalHour + ' and ' + minuteCount;
  }
  return yearCount + dayCount + hourCount + minuteCount + time;
}

console.log(formatDuration(3600));
