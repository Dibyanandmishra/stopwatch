let paraText = document.getElementById("text-container");
let displayText = document.getElementById("display");

let value = 0;
let intervalId = null;

// HH:MM:SS
function formatTime(val) {
	const hrs = String(Math.floor(val / 3600)).padStart(2, '0');
	const mins = String(Math.floor((val % 3600) / 60)).padStart(2, '0');
	const secs = String(val % 60).padStart(2, '0');
	return `${hrs}:${mins}:${secs}`;
}

const showValue = () => {
	const newPara = document.createElement("p");
	newPara.innerText = `The stopwatch time is: ${formatTime(value)}`;
	paraText.append(newPara);
}

const startTimer = () => {
	if (intervalId !== null) return; // To prevent multiple starts
	intervalId = setInterval(() => {
		displayText.innerHTML = formatTime(++value);
	}, 1000);
}

const stopTimer = () =>{
	clearInterval(intervalId);
	intervalId = null; // Reset intervalId
	if (value !== 0) {
		showValue();
	}
}

const clearTimer = ()=>{
	paraText.innerHTML = null;
}

const resetTimer = () =>{
	displayText.innerText = formatTime(0);
	value = 0;
	stopTimer();
}

const lapTimer = ()=>{
	showValue();
}

document.getElementById("startid").addEventListener("click", startTimer);
document.getElementById("stopid").addEventListener("click", stopTimer);
document.getElementById("clearid").addEventListener("click", clearTimer);
document.getElementById("resetid").addEventListener("click", resetTimer);
document.getElementById("lapid").addEventListener("click", lapTimer);
