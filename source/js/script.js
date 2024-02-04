import {
	theme
} from "./tasks/theme.js";
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
	slider();
	counterItems();
	password();
})