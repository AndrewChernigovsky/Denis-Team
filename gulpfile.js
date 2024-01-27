import scripts from './gulp-tasks/scripts.js';
import styles from './gulp-tasks/styles.js';
import deleteBuild from './gulp-tasks/delete-build.js';
import createBuild from './gulp-tasks/create-build.js';
import html from './gulp-tasks/html.js';
import startServer from './gulp-tasks/server.js';
import copyAssets from './gulp-tasks/copyAssets.js';
import config from './gulp-config.js';

export function runDev(done) {
	config.series(deleteBuild, createBuild, config.parallel(html, styles, scripts), startServer)(done);
}
export function runBuild(done) {
	config.isDev = false;
	config.series(deleteBuild, createBuild, scripts, html, styles, copyAssets, startServer)(done);
}