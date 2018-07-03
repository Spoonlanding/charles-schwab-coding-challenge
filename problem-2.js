class Progress {
	constructor() {
		this.bars = [90, 20, 45],
		this._bindHandlers();
		for (let i of [0, 1, 2]) {
			this.render(i);
		}
	}

	_bindHandlers() {
		let buttonElements = document.getElementsByClassName('progress-button');
		for (let button of buttonElements) {
			button.onclick = e => {
				e.preventDefault();
				const barIndex = document.getElementById('bar-select').value;
				this.set(barIndex, e.target.value);
			};
		}
	}

	set(index, changeString) {
		const progress = this.bars[index];
		let [operation, value] = changeString.split(' ');
		value = parseInt(value);
		let newProgress = operation === 'minus' ? progress - value : progress + value;

		if (newProgress > 100) {
			newProgress = 100;
		} else if (newProgress < 0) {
			newProgress = 0;
		}

		this.bars[index] = newProgress;
		this.render(index);
	}

	render(index) {
		let barElement = document.getElementsByClassName('progress')[index];
		barElement.style.width = `${this.bars[index]}%`;
		barElement.parentElement.getElementsByClassName('progress-percent')[0].innerHTML = `${this.bars[index]}%`;
	}
}

const progressBars = new Progress();
