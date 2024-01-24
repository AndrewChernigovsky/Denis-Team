import fileinclude from 'gulp-file-include';
import gulp from 'gulp';
import {
	rmSync,
	readFileSync
} from 'node:fs';
import
fs
from 'fs';
import server from 'browser-sync';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import postUrl from 'postcss-url';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import plumber from 'gulp-plumber';

const sass = gulpSass(dartSass);
const {
	src,
	dest,
	series,
	parallel,
	watch
} = gulp;

const PATH_BUILD = './build';
const PATH_SOURCE = './source';
const PATH_PAGES = './build/pages';

let isDevelopment = true;

export function createPages(done) {
	try {
		if (!fs.existsSync(PATH_PAGES)) {
			fs.mkdirSync(PATH_PAGES);
		}
	} catch (err) {
		console.error(err);
	}
	done();
}

export function deleteBuild(done) {
	rmSync(PATH_BUILD, {
		force: true,
		recursive: true,
	});
	done();
}

export function createBuild(done) {
	try {
		if (!fs.existsSync(PATH_BUILD)) {
			fs.mkdirSync(PATH_BUILD);
			done();
		}
	} catch (err) {
		console.error(err);
	}

}

export function html() {
	return src([`${PATH_SOURCE}/**/*.html`, `!${PATH_SOURCE}/html/**/*.html`])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(dest(PATH_BUILD));
};
export function html2Pages() {
	return src([`${PATH_SOURCE}/html/pages/**/*.html`])
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(dest(`${PATH_BUILD}/pages/`));
};

export function processStyles() {
	return src(`${PATH_SOURCE}/styles/*.scss`, {
			sourcemaps: isDevelopment
		})
		.pipe(plumber())
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss([
			postUrl({
				assetsPath: '../'
			}),
			autoprefixer(),
			csso()
		]))
		.pipe(dest(`${PATH_BUILD}/css`, {
			sourcemaps: isDevelopment
		}))
		.pipe(server.stream());
}

export function startServer() {
	server.init({
		server: {
			baseDir: PATH_BUILD
		},
		serveStatic: [{
				route: '/fonts',
				dir: `${PATH_SOURCE}/fonts`,
			},
			{
				route: '/*.ico',
				dir: `${PATH_SOURCE}/*.ico`,
			},
			{
				route: '/*.webmanifest',
				dir: `${PATH_SOURCE}/*.webmanifest`,
			},
			{
				route: '/favicons',
				dir: `${PATH_SOURCE}/favicons`,
			},
			{
				route: '/vendor',
				dir: `${PATH_SOURCE}/vendor`,
			},
			{
				route: '/images',
				dir: `${PATH_SOURCE}/images`,
			},
		],
		cors: true,
		notify: false,
		ui: false,
	}, (err, bs) => {
		bs.addMiddleware('*', (req, res) => {
			res.write(readFileSync(`${PATH_BUILD}/404.html`));
			res.end();
		});
	});

	watch(`${PATH_SOURCE}/html/**/*.html`, series(html, html2Pages, reloadServer));
	watch(`${PATH_SOURCE}/*.html`, series(html, html2Pages, reloadServer));
	watch(`${PATH_SOURCE}/styles/**/*.scss`, series(processStyles, reloadServer));
}

export function copyImages() {
	return src(`${PATH_SOURCE}/images/**/*`)
		.pipe(dest(`${PATH_BUILD}/images/`));
}
export function copyFonts() {
	return src(`${PATH_SOURCE}/fonts/**/*`)
		.pipe(dest(`${PATH_BUILD}/fonts/`));
}

export function copyAssets(cb) {

	parallel(copyImages, copyFonts)(cb);
}

export function reloadServer(done) {
	server.reload();
	done();
}

export function runDev(done) {
	series(deleteBuild, createBuild, createPages, html, html2Pages, processStyles, startServer)(done);
}
export function runBuild(done) {
	isDevelopment = false;
	series(deleteBuild, createBuild, createPages, html, html2Pages, processStyles, copyAssets, startServer)(done);
}