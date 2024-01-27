import config from './../gulp-config.js';

export function copyImages() {
	return config.src(`${config.source}/images/**/*`)
		.pipe(config.dest(`${config.build}/images/`));
}
export function copyFonts() {
	return config.src(`${config.source}/fonts/**/*`)
		.pipe(config.dest(`${config.build}/fonts/`));
}

function copyAssets(cb) {
	config.parallel(copyImages, copyFonts)(cb);
}

export default copyAssets;