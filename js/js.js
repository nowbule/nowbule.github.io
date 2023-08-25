
const p = document.getElementById('hover-effect');

p.addEventListener('mouseenter', () => {
  p.classList.add('hovered');
});

p.addEventListener('mouseleave', () => {
  p.classList.remove('hovered');
});

/*-------------------计时器-----------------------------*/
 /*（脉冲计时）
 function startTimer() {
  var startTime = Date.now();

  setInterval(function() {
    var elapsedTime = Math.floor((Date.now() - startTime) / 1000);

    var minutes = Math.floor(elapsedTime / 60);
    var seconds = elapsedTime % 60;

    document.getElementById("timer").innerHTML = minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');
  }, 1000);
}
*/
var startTime;

function startTimer() {
  startTime = Date.now();
  setInterval(updateTimer, 1000);
}

function stopTimer() {
  var elapsedTime = Date.now() - startTime;
  var seconds = Math.floor(elapsedTime / 1000);
  alert("你在这个页面停留了 " + seconds + " 秒钟。");
}

function updateTimer() {
  var elapsedTime = Date.now() - startTime;
  var hours = Math.floor(elapsedTime / 3600000);
  var minutes = Math.floor((elapsedTime - hours * 3600000) / 60000);
  var seconds = Math.floor((elapsedTime - hours * 3600000 - minutes * 60000) / 1000);
  var timerElement = document.getElementById("timer");
  timerElement.innerHTML = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}

function pad(num) {
  return ("0" + num).slice(-2);
}
