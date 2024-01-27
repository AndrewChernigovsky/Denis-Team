import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';
import postcss from 'gulp-postcss';
import postUrl from 'postcss-url';
import autoprefixer from 'autoprefixer';
import csso from 'postcss-csso';
import plumber from 'gulp-plumber';
import server from 'browser-sync';
import config from './../gulp-config.js';
const sass = gulpSass(dartSass);

function styles() {
	return config.src(`${config.source}/styles/*.scss`, {
			sourcemaps: config.isDev
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
		.pipe(config.dest(`${config.build}/css`, {
			sourcemaps: config.isDev
		}))
		.pipe(server.stream());
}

export default styles;