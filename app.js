const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const continueBtn = document.querySelector(".continue");
const resetBtn = document.querySelector(".reset");

const hoursEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');

let [hours, minutes, seconds] = [0,0,0];

let secondText;
let minuteText;
let hourText;

const startTime = () => {
    seconds += 1
    if(seconds > 59) {
        minutes += 1
        seconds = 0
    }

    if(minutes > 59) {
        hours += 1
        minutes = 0;
    }

    secondText = seconds < 10 ? "0" + seconds.toString():seconds;
    minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
    hourText = hours < 10 ? "0" + hours.toString() : hours;
    secondsEl.textContent = secondText;
    minutesEl.textContent = minuteText;
    hoursEl.textContent = hourText;
}

let intervalId = null;
let continueInterval;

startBtn.addEventListener('click', () => {

    if(!intervalId){
        intervalId = setInterval(startTime,1000)
    }
    
})



pauseBtn.addEventListener('click', () => {
    clearInterval(intervalId)
    // clearInterval(continueInterval)
})

continueBtn.addEventListener('click', () => {
    clearInterval(intervalId)
    // clearInterval(continueInterval)
    intervalId = setInterval(startTime,1000)
})

resetBtn.addEventListener('click', () => {
    clearInterval(intervalId)
    hours = 0
    minutes = 0
    seconds = 0
    secondText = seconds < 10 ? "0" + seconds.toString():seconds;
    minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
    hourText = hours < 10 ? "0" + hours.toString() : hours;
    secondsEl.textContent = secondText;
    minutesEl.textContent = minuteText;
    hoursEl.textContent = hourText;
    intervalId = null;
})

