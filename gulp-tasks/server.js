import server from 'browser-sync';
import {
	readFileSync
} from 'node:fs';
import config from './../gulp-config.js';
import scripts from './scripts.js';
import styles from './styles.js';
import html from './html.js';

function startServer() {
	server.init({
		server: {
			baseDir: config.build
		},
		serveStatic: [{
				route: '/fonts',
				dir: `${config.source}/fonts`,
			},
			{
				route: '/*.ico',
				dir: `${config.source}/*.ico`,
			},
			{
				route: '/*.webmanifest',
				dir: `${config.source}/*.webmanifest`,
			},
			{
				route: '/favicons',
				dir: `${config.source}/favicons`,
			},
			{
				route: '/vendor',
				dir: `${config.source}/vendor`,
			},
			{
				route: '/images',
				dir: `${config.source}/images`,
			},
		],
		cors: true,
		notify: false,
		ui: false,
	}, (err, bs) => {
		bs.addMiddleware('*', (req, res) => {
			res.write(readFileSync(`${config.build}/404.html`));
			res.end();
		});
	});

	config.watch(`${config.source}/html/**/*.html`, config.series(html, reloadServer));
	config.watch(`${config.source}/*.html`, config.series(html, reloadServer));
	config.watch(`${config.source}/styles/**/*.scss`, config.series(styles, reloadServer));
	config.watch(`${config.source}/js/**/*.js`, config.series(scripts, reloadServer));
}

export function reloadServer(done) {
	server.reload();
	done();
}

export default startServer;