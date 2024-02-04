const buttonMinus = document.querySelector('.characteristics__counter > button');
const buttonPlus = document.querySelector('.characteristics__counter > button:last-of-type');
const inputItems = document.querySelector('.characteristics__counter > input');

export function counterItems() {

	if (buttonMinus && buttonMinus && inputItems) {
		inputItems.value = 1;

		function click(operator) {
			if (operator === 'plus') {
				inputItems.value = +inputItems.value + 1;
			}
			if (operator === 'minus') {
				inputItems.value -= 1;
				if (+inputItems.value <= 1) {
					inputItems.value = 1;
				}
			}
		}

		buttonPlus.addEventListener('click', () => click('plus'));
		buttonMinus.addEventListener('click', () => click('minus'))
	}
}