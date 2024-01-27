const TOGGLE_THEME = document.getElementById('themeToggle');
const BODY = document.querySelector('body');
const LINKS = document.querySelectorAll("a");
const PARAGRAPHS = document.querySelectorAll("p");
const HEADLINES = document.querySelectorAll("h2");
const BUTTONS_IMAGES_THEME = document.querySelectorAll(".button-icon-theme");
const ACTIVE = 'theme-active';

const SHOW_MODAL = document.getElementById('signIn');
const CLOSE_MODAL = document.getElementById('closeSign');
const MODAL = document.querySelector('.modal');
const OVERLAY = document.querySelector('.overlay');

TOGGLE_THEME.addEventListener('click', () => {
	BODY.classList.toggle(ACTIVE);
	LINKS.forEach((el) => {
		el.classList.toggle(ACTIVE);
	})
	PARAGRAPHS.forEach((el) => {
		el.classList.toggle(ACTIVE);
	})
	HEADLINES.forEach((el) => {
		el.classList.toggle(ACTIVE);
	})
	TOGGLE_THEME.classList.toggle(ACTIVE);
	BUTTONS_IMAGES_THEME.forEach((el) => {
		el.classList.toggle(ACTIVE);
	})
})

function modal() {
	MODAL.classList.toggle('opened');
	OVERLAY.classList.toggle('active');
	BODY.classList.toggle('hidden');
}

SHOW_MODAL.addEventListener('click', () => {
	modal()
})
CLOSE_MODAL.addEventListener('click', () => {
	modal()
})
OVERLAY.addEventListener('click', () => {
	modal()
})

document.addEventListener('keydown', (e) => {
	if (e.key === 'Escape') {
		modal()
	}
})