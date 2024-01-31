const paths = document.querySelectorAll('[src]');
const script = document.querySelector('script');

export function renameAllPaths() {
	const currentUrl = window.location.href;
	console.log(currentUrl);
	let dataSrcScript = script.dataset.path;
	console.log(dataSrcScript, '123');
	paths.forEach((path) => {
		console.log(path);
		let src = path.getAttribute('src');
		if (src != dataSrcScript) {
			src = './../.' + src;
			path.setAttribute('src', src);
			console.log(src);
		}
	})
}