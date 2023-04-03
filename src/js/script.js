// "use strict";

import {
	scrollTo,
	throttle,
	debounce,
	sortOut,
	animate,
	getCurrentPos

} from './helpers.js';



import {
	scroller
} from './scroll.js';

import {
	table
} from './table.js';

import {
	pageNav
} from './pageNav.js';




scroller(getCurrentPos, scrollTo, sortOut, throttle, debounce, animate);
table(throttle, sortOut);
pageNav(getCurrentPos, sortOut, animate);