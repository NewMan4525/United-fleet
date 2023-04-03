'use strict';

function scroller(getCurrentPos, scrollTo, sortOut, throttle, debounce, animate) {
	try {

		class FullScreenScroll {

			constructor() {
				this.pageNavArrows = document.querySelectorAll('.smoll-arrow.pageNav-arrow');
				this.headings = document.querySelectorAll('.heading');
				this.elemsOffsetTop = {};
				this.currentPos = null;
				this.animTime = 300;
				this.wheelCount = 3;

				this.prColors = ['#F7E7A5', '#6EB3A2', '#252146'];



			}

			animateEffects(element, effect) {
				let angles = element.querySelectorAll('.angle-parent');
				let subAngles = element.querySelectorAll('.sub-angle');


				if (effect == 'active') {
					setTimeout(() => {
						angles.forEach((element, index) => {
							subAngles[index].style.backgroundColor = this.prColors[0];
							element.style.backgroundColor = this.prColors[1];
							subAngles[index].style.transitionDuration = '300ms';
							element.style.transitionDuration = '300ms';

						});

					}, this.animTime);
				}
				if (effect == 'deactive') {
					setTimeout(() => {
						angles.forEach((element, index) => {
							subAngles[index].style.backgroundColor = this.prColors[1];
							element.style.backgroundColor = this.prColors[2];

						});

					}, this.animTime);
				}

			}

			moveClick(e) {

				try {

					let element;

					if (e.target.classList.value == 'arrow arrow-U smoll-arrow pageNav-arrow ' ||
						e.target.classList.value == 'arrow arrow-U sub-arrow pageNav-arrow' ||
						e.deltaY < 0 &&
						window.pageYOffset !== this.elemsOffsetTop[0][1]
					) {
						scrollTo(this.elemsOffsetTop[this.currentPos - 1][1]);
						element = this.headings[this.currentPos - 1];
						this.animateEffects(element, 'active');
						this.currentPos--;
						element = this.headings[this.currentPos + 1];
						this.animateEffects(element, 'deactive');
					}

					if (e.target.classList.value == 'arrow arrow-D  smoll-arrow pageNav-arrow' ||
						e.target.classList.value == 'arrow arrow-D sub-arrow pageNav-arrow' ||
						e.deltaY > 0 &&
						window.pageYOffset !== this.elemsOffsetTop[Object.keys(this.elemsOffsetTop).length - 1][1]
					) {
						scrollTo(this.elemsOffsetTop[this.currentPos + 1][1]);

						element = this.headings[this.currentPos + 1];
						this.animateEffects(element, 'active');
						this.currentPos++;
						element = this.headings[this.currentPos - 1];
						this.animateEffects(element, 'deactive');

					}

				} catch (err) {
					this.logger(err);
				}
			}

			addEvents() {
				this.pageNavArrows[0].addEventListener('click', (e) => {
					this.moveClick(e);
				});
				this.pageNavArrows[1].addEventListener('click', (e) => {
					this.moveClick(e);
				});

				let wheelSet = (e) => {
					if (!e.ctrlKey) {
						//this.calculateCurrentPos();
						getCurrentPos('heading');
						this.moveClick(e);
					}

				};
				let debounceWheelSet = debounce(wheelSet, 300);

				window.addEventListener('wheel', (e) => {
					debounceWheelSet(e);
				});

				let resizeSet = () => {
					sortOut.call(this, this.headings, this.quiue4Headings);
					//this.calculateCurrentPos();
					getCurrentPos('heading');

				};
				let throttlRresizeSet = throttle(resizeSet, 300);
				window.addEventListener('resize', () => {
					throttlRresizeSet();
				});
			}

			// calculateCurrentPos() {
			// 	let verticalDisplayCenter = window.pageYOffset + document.documentElement.clientHeight / 2;
			// 	for (let index = 0; index < Object.keys(this.elemsOffsetTop).length; index++) {

			// 		if (
			// 			index <= Object.keys(this.elemsOffsetTop).length - 2 &&
			// 			this.elemsOffsetTop[index][1] <= verticalDisplayCenter &&
			// 			verticalDisplayCenter < this.elemsOffsetTop[index + 1][1]) {
			// 			this.currentPos = index;
			// 		}

			// 		if (
			// 			index == Object.keys(this.elemsOffsetTop).length - 1 &&
			// 			this.elemsOffsetTop[index][1] <= verticalDisplayCenter &&
			// 			verticalDisplayCenter < this.elemsOffsetTop[index][1] + verticalDisplayCenter + 10) {
			// 			this.currentPos = index;
			// 		}
			// 	}

			// }

			quiue4Headings(element, index) {
				this.elemsOffsetTop[index] = [element, element.offsetTop];

			}

			start() {
				sortOut.call(this, this.headings, this.quiue4Headings);
				//this.calculateCurrentPos();
				getCurrentPos('heading');
				this.addEvents();
			}

			logger(msg) {
				//console.log(msg);
			}
		}

		const fullScreenScroll = new FullScreenScroll();
		fullScreenScroll.start();

	} catch (err) {
		console.log(err);
	}
}
export {
	scroller
};