const buttons = document.getElementsByClassName('progress-button');
const progressBars = document.getElementsByClassName('progress');
const progressPercents = document.getElementsByClassName('progress-percent');
let progressValues = [90, 20, 45];

const setProgress = (barIndex, changeString) => {
	let progress = progressValues[barIndex];
	let [ operation, value ] = changeString.split(' ');
	value = parseInt(value);
	let newProgress = operation === 'minus' ? progress - value : progress + value;
	if (newProgress > 100) {
		newProgress = 100;
	} else if (newProgress < 0) {
		newProgress = 0;
	}
	progressValues[barIndex] = newProgress;
	renderProgress(barIndex);
};

const renderProgress = barIndex => {
	const selectedBar = progressBars[barIndex];
	selectedBar.style.width = `${progressValues[barIndex]}%`;
	selectedBar.parentElement.getElementsByClassName('progress-percent')[0].innerHTML = `${progressValues[barIndex]}%`;
};

// render intial progress
for (let i of [0, 1, 2]) {
	renderProgress(i);
}

// bind click events
for (let button of buttons) {
	button.onclick = e => {
		e.preventDefault();
		const barIndex = document.getElementById('bar-select').value;
		setProgress(barIndex, e.target.value);
	};
}
