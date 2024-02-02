import {
	theme
} from "./tasks/theme.js";
import {
	modal
} from "./tasks/modal.js";
import {
	slider
}
from "./tasks/product-slider.js";

import {
	counterItems
} from "./tasks/counterItems.js";
import {
	password
} from "./tasks/password.js";

document.addEventListener('DOMContentLoaded', () => {
	theme();
	modal();
	slider();
	counterItems();
	password();
})