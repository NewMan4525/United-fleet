'use strict';

export function animate({
	timing,
	draw,
	duration
}) {

	let start = performance.now();

	requestAnimationFrame(function animate(time) {
		// timeFraction изменяется от 0 до 1
		let timeFraction = (time - start) / duration;
		if (timeFraction > 1) {
			timeFraction = 1;
		}

		// вычисление текущего состояния анимации
		let progress = timing(timeFraction);

		draw(progress); // отрисовать её

		if (timeFraction < 1) {
			requestAnimationFrame(animate);
		}
	});
}

export function scrollTo(offset) {
	window.scroll({
		left: 0,
		top: offset,
		behavior: 'smooth'
	});
}

export function throttle(callee, timeout) {
	let timer = null;
	return function perform(...args) {
		if (timer) return
		timer = setTimeout(() => {
			callee(...args);
			clearTimeout(timer);
			timer = null;
		}, timeout);
	};

}



export function debounce(f, ms) {

	let isCooldown = false;

	return function () {
		if (isCooldown) return;

		f.apply(this, arguments);

		isCooldown = true;

		setTimeout(() => isCooldown = false, ms);
	};

}



// my helpers--------------------------------


export function sortOut(arr, func4Elem) {
	arr.forEach((element, index) => {
		func4Elem.call(this, element, index);
	});
}


function commonEvents(params) {

}


// export function getCurrentPos(className) {
// 	let center = window.pageYOffset + document.documentElement.clientHeight / 2;
// 	let posVal = [];
// 	document.querySelectorAll(`.${className}`)
// 		.forEach(el => {
// 			posVal.push(el.offsetTop);
// 		});
// 	for (let i = 0; i < posVal.length; i++) {
// 		if (i <= posVal.length - 2 &&
// 			posVal[i] <= center &&
// 			center < posVal[i + 1]) {
// 			return i;
// 		}
// 		if (i == posVal.length - 1 &&
// 			posVal[i] <= center &&
// 			center < posVal[i] + center + 10) {
// 			return i;
// 		}
// 	}
// }


export function getCurrentPos(className) {
	let maxim, center = window.pageYOffset; + document.documentElement.clientHeight / 2;
	let max = [];
	document.querySelectorAll(`.${className}`)
		.forEach((el, i) => {
			if (el.offsetTop < center - 25) {
				max.push(++i);
				maxim = Math.max(max);
				max = [];
			}
		});

	return isNaN(maxim) ? 0 : maxim;
}