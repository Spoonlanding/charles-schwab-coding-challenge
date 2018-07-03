const stepButtons = document.getElementsByClassName('step-button');
const steps = document.getElementsByClassName('step');
let currentStep = 2;

steps[currentStep].classList.add('active');

for (let button of stepButtons) {
	button.onclick = e => {
		e.preventDefault();
		steps[currentStep].classList.remove('active');

		if (e.target.value === 'prev') {
			currentStep = currentStep <= 0 ? 0 : currentStep - 1;
		} else if (e.target.value === 'next') {
			currentStep = currentStep >= 3 ? 3 : currentStep + 1;
		}

		steps[currentStep].classList.add('active');
	};
}