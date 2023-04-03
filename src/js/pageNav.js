'use strict';

export function pageNav(getCurrentPos, sortOut, animate) {

	class PageNav {
		constructor() {
			this.mainMenu = document.getElementById('main-menu');







			this.nav = document.getElementById('pageNav');
			this.navList = document.getElementById('pageNav-list');
			//this.navArrows = this.navList.querySelectorAll('.smoll-arrow');
			//this.navItems = this.navList.querySelectorAll('.pageNav-item');


			this.headings = document.querySelectorAll('.heading');
			this.menuTrigBtn = document.querySelector('.menu-btn');


			this.animTime = 300;
		}



		mainMenumove() {
			function quad(timeFraction) {
				return Math.pow(timeFraction, 2);
			}

			function makeEaseInOut(timing) {
				return function (timeFraction) {
					return 1 - timing(1 - timeFraction);
				};
			}
			let quadEaseInOut = makeEaseInOut(quad);
			let element = this.mainMenu;
			if (element.classList.contains('active')) {
				animate({
					duration: this.animTime,
					timing: quadEaseInOut,
					draw: function (progress) {
						element.style.left = -progress * 75 + '%';
					}
				});
			} else {
				animate({
					duration: this.animTime,
					timing: quadEaseInOut,
					draw: function (progress) {
						element.style.left = -75 + (progress * 75) + '%';
					}
				});
			}
			element.classList.toggle('active');

		}


		quiue4Trigger() {
			this.mainMenumove();
		}
		addEvents() {

			this.menuTrigBtn.addEventListener('click', () => {
				this.quiue4Trigger();

			});

		}


		start() {

			getCurrentPos('heading');
			this.addEvents();
			//this.Quiue();

		}
	}
	const pageNav = new PageNav();
	pageNav.start();



}