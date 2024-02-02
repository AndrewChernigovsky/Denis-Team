const buttonMinus = document.querySelector('.characteristics__counter > button');
const buttonPlus = document.querySelector('.characteristics__counter > button:last-of-type');
const inputItems = document.querySelector('.characteristics__counter > input');

export function counterItems() {

	if (buttonMinus && buttonMinus && inputItems) {
		let value = 1;

		function click(operator) {
			if (operator === 'plus') {
				value += 1;
				inputItems.value = String(value);
				console.log(inputItems.value);
			}
			if (operator === 'minus') {
				inputItems.value -= 1;
				if (inputItems.value < 0) {
					inputItems.value = 0;
				}
			}
		}

		buttonPlus.addEventListener('click', () => click('plus'));
		buttonMinus.addEventListener('click', () => click('minus'))
	}
}