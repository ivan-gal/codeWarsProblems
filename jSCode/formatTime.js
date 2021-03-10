'use strict';

function formatDuration(seconds) {
  let time = seconds;
  const day = 24 * 60 * 60;
  const hour = 60 * 60;
  const min = 60;
  const formatedTime = [0, 0, 0, 0];

  while (time > day) {
    time /= day;
    formatedTime[1] += 1;
  }
  while (time > hour) {
    time /= hour;
    formatedTime[2] += 1;
  }
  while (time > min) {
    time /= min;
    formatedTime[3] += 1;
  }

  formatedTime[4] = time;
  let finalInput = '';

  let [totalDay, TotalHour, TotalMin, TotalSec] = formatedTime;
  TotalSec = Math.round(TotalSec);

  switch (totalDay) {
    case 0:
      totalDay = '';
      break;
    case 1:
      totalDay = totalDay + ' day,';
      break;
    default:
      totalDay = totalDay + ' days,';
      break;
  }
  switch (TotalHour) {
    case 0:
      TotalHour = '';
      break;
    case 1:
      TotalHour = TotalHour + ' hour,';
      break;
    default:
      TotalHour = TotalHour + ' hours,';
      break;
  }
  switch (TotalMin) {
    case 0:
      TotalMin = '';
      break;
    case 1:
      TotalMin = TotalMin + ' minute';
      break;
    default:
      TotalMin = TotalMin + 'minutes';
      break;
  }

  switch (TotalSec) {
    case 1:
      TotalSec = TotalSec + ' second';
      break;
    default:
      TotalSec = TotalSec + ' seconds';
      break;
  }

  return `${totalYear}${totalDay}${TotalHour}${TotalMin} and ${TotalSec}`;
}

console.log(formatDuration(210102302032332301301));
