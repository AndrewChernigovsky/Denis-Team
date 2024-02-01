const thumbsWrapper = document.querySelector('.thumbs-wrapper');
const thumbsAll = document.querySelectorAll('.slider-list-thumbs > .thumbs-wrapper > *[data-thumb]');
const fullSizeAll = document.querySelectorAll('.slider-list > *[data-full]');
const counterNum = document.querySelector('.int');
const counterButton = document.querySelector('.slider-list-thumbs__counter');
const active = 'active';


// в то время как timePassed идёт от 0 до 2000
// left изменяет значение от 0px до 400px


export function slider() {

	// counterButton.addEventListener('click', () => {
	// 	thumbsAll.forEach((el, index) => {
	// 		if (index === thumbsAll.length - 1) {

	// 			let sizes = el.getBoundingClientRect();
	// 			let start = Date.now();
	// 			let timer = setInterval(function () {
	// 				let timePassed = Date.now() - start;

	// 				if (timePassed >= 2000) {
	// 					clearInterval(timer);
	// 					return;
	// 				}
	// 				draw(timePassed);
	// 			}, 20);

	// 			function draw(timePassed) {
	// 				let size = timePassed / 5;
	// 				if (size <= sizes.height) {
	// 					thumbsWrapper.style.marginTop = '-' + (size + 'px');

	// 				}
	// 			}


	// 		}
	// 	})
	// })

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
				console.log(thumb.dataset.thumb, 'thumb');
				console.log(fullSizeAll[index].dataset.full, 'fullSizeAll');

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