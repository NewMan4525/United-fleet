import {
	animate
} from './helpers.js';

let body = document.querySelector('body');
let arrowR = document.querySelector('.arrowR');
let arrowL = document.querySelector('.arrowL');

let animateTime = 300;

arrowR.addEventListener('click', () => {
	animate({
		duration: animateTime,
		timing: function (timeFraction) {
			return 1 - Math.sin(Math.acos(timeFraction));
		},
		draw: function (progress) {
			arrowR.style.left = progress * 100 + '%';
		}
	});
	setTimeout(() => {
		//arrowR.style.display = 'none';
	}, animateTime);
});

arrowL.addEventListener('click', () => {
	animate({
		duration: animateTime,
		timing: function (timeFraction) {
			return 1 - Math.sin(Math.acos(timeFraction));
		},
		draw: function (progress) {
			arrowL.style.left = '-' +
				progress * 100 + '%';
		}
	});
	setTimeout(() => {
		//arrowL.style.display = 'none';
	}, animateTime);
});