import {
	theme
} from "./tasks/theme.js";
import {
	modal
} from "./tasks/modal.js";
import {
	renameAllPaths
} from "./tasks/renameAllPaths.js";

document.addEventListener('DOMContentLoaded', () => {
	theme();
	modal();
	renameAllPaths();
})