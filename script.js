function addTask() {
    const input = document.getElementById("task-input");
    const task = input.value.trim();

    if (task === "") return;

    const li = document.createElement("li");
    li.textContent = task;

    document.getElementById("task-list").appendChild(li);
    input.value = "";
}

let time = 25*60; // 25 minutes in seconds
let timerId;

function updateTimerDisplay() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    document.getElementById("timer").textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
}

function startTimer() {
    if (timerId) return;

    timerId = setInterval(() => {
        if (time > 0) {
            time--;
            updateTimerDisplay();
        } else {
            clearInterval(timerId);
            timerId = null;
            alert("Time's up! Take a break.");
        }
    }, 1000);
}

function resetTimer() {
  clearInterval(timerId); // stop the timer
  timerId = null;         // clear the variable
  time = 25 * 60;         // reset time
  updateTimerDisplay();   // show 25:00 again
}

updateTimerDisplay(); 