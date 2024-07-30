
var stopwatch = document.getElementById('stopwatch'),
startButton = document.getElementById('start'),
stopButton = document.getElementById('stop'),
seconds = 0, minutes = 0, hours = 0,t


function add() {
seconds++;
if (seconds >= 60) {
seconds = 0;
minutes++;
if (minutes >= 60) {
  minutes = 0;
  hours++;
}
}

stopwatch.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" +
                       (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" +
                       (seconds > 9 ? seconds : "0" + seconds);

timer();
}
function timer() {
t = setTimeout(add, 1000);
}
timer();


startButton.onclick = timer;
stopButton.onclick = function() {
clearTimeout(t);
}

