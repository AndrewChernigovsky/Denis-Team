const thumbsAll = document.querySelectorAll('.slider-list-thumbs > .thumbs-wrapper > *[data-thumb]');
const fullSizeAll = document.querySelectorAll('.slider-list > *[data-full]');
const counterNum = document.querySelector('.int');
const active = 'active';

export function slider() {


	counterNum.textContent = thumbsAll.length - 6;

	function activeClass(thumbsActive, fullSizeActive) {
		if (thumbsActive) {
			Array.from(thumbsActive).map((el) => el.classList.remove(active));
		}
		if (fullSizeActive) {
			Array.from(fullSizeActive).map((el) => el.classList.remove(active));
		}
	}
	if (thumbsAll) {
		thumbsAll.forEach((thumb, index) => {

			thumb.addEventListener('click', (e) => {
				activeClass(thumbsAll, fullSizeAll);

				if (
					thumb.dataset.thumb == fullSizeAll[index].dataset.full
				) {
					thumb.classList.toggle(active);
					fullSizeAll[index].classList.toggle(active);
				}
			})
		})

	}
}