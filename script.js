let timerDisplay = document.getElementById("timerDisplay");
let startStopBtn = document.getElementById("startStopBtn");
let resetBtn = document.getElementById("resetBtn");

let timerInterval;
let seconds = 0;
let isRunning = false;

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let remainingSeconds = seconds % 60;
    return `${pad(minutes)}:${pad(remainingSeconds)}`;
}

function pad(num) {
    return num < 10 ? "0" + num : num;
}

function updateTimerDisplay() {
    timerDisplay.textContent = formatTime(seconds);
}

function startStopTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        startStopBtn.textContent = "Start";
    } else {
        timerInterval = setInterval(() => {
            seconds++;
            updateTimerDisplay();
        }, 1000);
        startStopBtn.textContent = "Stop";
    }
    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    updateTimerDisplay();
    startStopBtn.textContent = "Start";
    isRunning = false;
}

startStopBtn.addEventListener("click", startStopTimer);
resetBtn.addEventListener("click", resetTimer);
