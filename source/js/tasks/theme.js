const BODY = document.querySelector('body');
const TOGGLE_THEME = document.getElementById('themeToggle');
const BUTTONS_IMAGES_THEME = document.querySelectorAll(".button-icon-theme");
const ACTIVE = 'theme-active';


export function theme() {
	TOGGLE_THEME.addEventListener('click', () => {
		BODY.classList.toggle(ACTIVE);
	})

}