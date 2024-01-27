import fs from 'fs';
import config from './../gulp-config.js';

function createBuild(done) {
	try {
		if (!fs.existsSync(config.build)) {
			fs.mkdirSync(config.build);
			done();
			if (!fs.existsSync(config.pages)) {
				fs.mkdirSync(config.pages);
				done();
			}
		}
	} catch (err) {
		console.error(err);
	}
}

export default createBuild;