const SHOW_MODAL = document.getElementById('signIn');
const CLOSE_MODAL = document.getElementById('closeSign');
const MODAL = document.querySelector('.modal');
const OVERLAY = document.querySelector('.overlay');

export function modal() {
	if (MODAL) {

		function show() {
			MODAL.classList.toggle('opened');
			OVERLAY.classList.toggle('active');
			BODY.classList.toggle('hidden');
		}

		SHOW_MODAL.addEventListener('click', () => {
			show()
		})
		CLOSE_MODAL.addEventListener('click', () => {
			show();
			document.removeEventListener('keydown', (e) => {
				if (e.key === 'Escape') {
					show()
				}
			})
		})
		OVERLAY.addEventListener('click', () => {
			show()
		})

		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				show()
			}
		})
	}
}