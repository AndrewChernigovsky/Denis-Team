const BODY = document.querySelector('body');
const TOGGLE_THEME = document.getElementById('themeToggle');
const ACTIVE = 'theme-active';

const elementsWithDataTheme = document.querySelectorAll('[data-theme]');

// Перебираем найденные элементы

export function theme() {
	TOGGLE_THEME.addEventListener('click', () => {
		BODY.classList.toggle(ACTIVE);
		elementsWithDataTheme.forEach(function (element) {
			element.classList.toggle(ACTIVE);
		});
	})
}