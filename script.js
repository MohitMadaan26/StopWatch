//collecting all the required and necessary values
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let displayTimer = document.getElementById('displayTime');
let interval = null;

//event handler for start button
document.getElementById('startBtn').addEventListener('click',(event)=>{
    if(interval != null){
        clearInterval(interval);
    }

    interval = setInterval(showTime,10);
});

//event handler for stop button
document.getElementById('stopBtn').addEventListener('click',()=>{  
    startBtn.innerHTML='RESUME';
    clearInterval(interval);   
});
//event handler for reset button
document.getElementById('resetBtn').addEventListener('click',()=>{
    startBtn.innerHTML='START';
    clearInterval(interval);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    
    displayTimer.innerHTML='00 : 00 : 00 : 000';
   
});
//show Time function to calculate and display accurate time in the display bar
function showTime(){
    //increase milliseconds by 10 automatically initially
    milliseconds+=10;
    //reset ms, sec, mins and hours to 0 when they reach 1000 and 60 resp and increase the count of the next bogger unit of time
    if(milliseconds == 1000){
        milliseconds = 0;
        seconds++;

        if(seconds == 60){
            seconds = 0;
            minutes++;

            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }

let h;
if (hours < 10) {
  h = "0" + hours;
} else {
  h = hours;
}

let m;
if (minutes < 10) {
  m = "0" + minutes;
} else {
  m = minutes;
}

let s;
if (seconds < 10) {
  s = "0" + seconds;
} else {
  s = seconds;
}

let ms;
if (milliseconds < 10) {
  ms = "00" + milliseconds;
} else if (milliseconds < 100) {
  ms = "0" + milliseconds;
} else {
  ms = milliseconds;
}

displayTimer.innerHTML = " " + h + " : " + m + " : " + s + " : " + ms;}