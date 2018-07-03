const buttons = document.getElementsByClassName('progress-button');
const progressBars = document.getElementsByClassName('progress');
const progressPercents = document.getElementsByClassName('progress-percent');
let progressValues = [90, 20, 45];

const setProgress = (id, change) => {
	let progress = progressValues[id];
	let [operation, value] = change.split(' ');
	value = parseInt(value);
	let newProgress = operation === 'minus' ? progress - value : progress + value;
	if (newProgress > 100) {
		newProgress = 100;
	} else if (newProgress < 0) {
		newProgress = 0;
	}
	progressValues[id] = newProgress;
}

for (let i of [0, 1, 2]) {
	progressBars[i].style.width = `${progressValues[i]}%`;
	progressBars[i].parentElement.getElementsByClassName('progress-percent')[0].innerHTML = `${progressValues[i]}%`;
}

for (let button of buttons) {
	button.onclick = e => {
		e.preventDefault();
		const selectedBarId = document.getElementById('bar-select').value;
		const selectedBar = progressBars[selectedBarId];
		setProgress(selectedBarId, e.target.value);
		selectedBar.style.width = `${progressValues[selectedBarId]}%`;
		selectedBar.parentElement.getElementsByClassName('progress-percent')[0].innerHTML = `${progressValues[selectedBarId]}%`;
	};
}
