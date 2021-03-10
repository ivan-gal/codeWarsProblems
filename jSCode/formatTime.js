'use strict';

function formatDuration(seconds) {
  let time = seconds;
  const year = 24 * 365 * 60 * 60;
  const day = 24 * 60 * 60;
  const hour = 60 * 60;
  const min = 60;
  const formatedTime = [0, 0, 0, 0, 0];

  while (time > year) {
    time /= year;
    formatedTime[0] += 1;
  }
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

  const [totalYear, totalDay, TotalHour, TotalMin, TotalSec] = formatedTime;

  return `${totalYear} year ,${totalDay} day  ,${TotalHour} 
  hour ${TotalMin} minutes ${Math.round(TotalSec)} seconds.`;
}

console.log(formatDuration(210102302032332301301));
