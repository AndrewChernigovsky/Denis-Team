import {
	theme
} from "./tasks/theme.js";
import {
	modal
} from "./tasks/modal.js";
import {
	renameAllPaths
} from "./tasks/renameAllPaths.js";
import {
	slider
}
from "./tasks/product-slider.js";

import {
	counterItems
} from "./tasks/counterItems.js";

document.addEventListener('DOMContentLoaded', () => {
	theme();
	modal();
	// renameAllPaths();
	slider();
	counterItems();
})