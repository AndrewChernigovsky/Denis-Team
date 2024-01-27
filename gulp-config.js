import gulp from 'gulp';

const PATH_BUILD = './build';
const PATH_SOURCE = './source';
const PATH_PAGES = './build/pages';

let isDevelopment = true;

const {
	src,
	dest,
	series,
	parallel,
	watch
} = gulp;


const config = {
	build: PATH_BUILD,
	source: PATH_SOURCE,
	pages: PATH_PAGES,
	isDev: isDevelopment,
	src: src,
	dest: dest,
	series: series,
	parallel: parallel,
	watch: watch
};

export default config;