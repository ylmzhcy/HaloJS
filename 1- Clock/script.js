'use strict';

function getTime() {
  var date = new Date();
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();

  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  seconds = seconds < 10 ? '0' + seconds : seconds;

  var time = hours + ':' + minutes + ':' + seconds;
  document.getElementById('clock-display').innerText = time;
  document.getElementById('clock-display').textContent = time;

  setTimeout(getTime, 1000);
}

getTime();
