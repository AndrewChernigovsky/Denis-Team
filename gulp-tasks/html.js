import config from './../gulp-config.js';
import fileinclude from 'gulp-file-include';

function html1(cb) {
	return config.src([`${config.source}/**/*.html`, `!${config.source}/html/**/*.html`])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(config.dest(config.build));
};

function html2Pages() {
	return config.src([`${config.source}/html/pages/**/*.html`])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(config.dest(`${config.build}/pages/`));
};

function html(done) {
	html1();
	html2Pages();
	done();
}
export default html;