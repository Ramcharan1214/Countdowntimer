var start = document.getElementById("start");
var reset = document.getElementById("reset");

var hours = document.getElementById("hours");
var minutes = document.getElementById("minutes");
var seconds = document.getElementById("seconds");

var startTimer = null;

function timer(){
  if(hours.value == 0 && minutes.value == 0 && seconds.value ==0 ){
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
  } else if (seconds.value != 0){
    seconds.value--;
  } else if (minutes.value != 0 && seconds.value == 0){
    minutes.value--;
    seconds.value = 59;
  } else if (hours.value !=0 && minutes.value == 0 && seconds.value == 0){
    hours.value--;
    minutes.value = 60;
    seconds.value = 59;
  }
};

function stopTimer(){
  clearInterval(timer);
};

start.addEventListener("click", function(){
    function startInterval(){
      startTimer = setInterval(function(){
        timer();
      },1000)
    }
    startInterval();
  })
  
  reset.addEventListener("click", function(){
    hours.value = 0;
    minutes.value = 0;
    seconds.value = 0;
    stopTimer();

})