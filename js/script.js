'use strict';

document.addEventListener('DOMContentLoaded', () => {

  const timer = (selector, endtime) => {

      const calculateTime = (endtime) => {
        const time = Date.parse(endtime) - Date.parse(new Date()),
              endtimeObj = {
                'time': time,
                'days': Math.floor(time / 1000 / 60 / 60 / 24),
                'hours': Math.floor(time / 1000 / 60 / 60 % 24),
                'minutes': Math.floor(time / 1000 / 60 % 60),
                'seconds': Math.floor(time / 1000 % 60),
              };

        return endtimeObj;
      };

      const addTime = (selector) => {
        const timer = document.querySelector(selector),
              timerObj = {
                'timer': timer,
                'days': timer.querySelector('.timer__days'),
                'hours': timer.querySelector('.timer__hours'),
                'minutes': timer.querySelector('.timer__minutes'),
                'seconds': timer.querySelector('.timer__seconds'),
              };

        return timerObj;
      };

      const reloadTime = () => {
        const endtimeObj = calculateTime(endtime);
        const timerObj = addTime(selector);

        timerObj.days.textContent = endtimeObj.days;
        timerObj.hours.textContent = endtimeObj.hours;
        timerObj.minutes.textContent = endtimeObj.minutes;
        timerObj.seconds.textContent = endtimeObj.seconds;
      };

      const resetTime = () => {
        const timerObj = addTime(selector);

        timerObj.days.textContent = 0;
        timerObj.hours.textContent = 0;
        timerObj.minutes.textContent = 0;
        timerObj.seconds.textContent = 0;
      };

      const startTimer = () => {
        const endtimeObj = calculateTime(endtime),
              interval = setInterval(reloadTime, 1000);

        if (endtimeObj.time <= 0) {
          clearInterval(interval);
          resetTime();
        }
      };

      reloadTime();
      startTimer();
  };


  timer('.timer', document.querySelector('.timer__date').textContent);

});
