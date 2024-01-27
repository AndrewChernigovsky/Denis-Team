import {
	rmSync
} from 'node:fs';
import config from './../gulp-config.js';

function deleteBuild(done) {
	rmSync(config.build, {
		force: true,
		recursive: true,
	});
	done();
}

export default deleteBuild;