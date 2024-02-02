const buttons = document.querySelectorAll('.form__pass-btn');

export function password() {
	if (buttons) {
		buttons.forEach((el) => {
			el.addEventListener('click', (e) => {
				let thisInput = e.currentTarget.previousElementSibling
				if (
					thisInput.type === 'password'
				) {
					thisInput.type = 'text';
				} else {
					thisInput.type = 'password';
				}
			})
		})
	}
}