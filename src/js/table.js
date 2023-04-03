'use strict';

export function table(throttle, sortOut) {

	class Table {

		constructor() {
			this.tables = document.querySelectorAll('.table');
			this.subTables = document.querySelectorAll('.subtable');
			this.horizontalDist = 0;
			this.verticalDist = 0;
			this.throttleTime = 300;




			this.angles = document.querySelectorAll('.angle-decore');
			this.anglesLU = [];
			this.anglesRU = [];
			this.anglesLD = [];
			this.anglesRD = [];




		}




		distributionAngles(element) {

			switch (element.classList.value) {
				case 'angle-decore angle-decore-LU':

					break;
				case 'angle-decore angle-decore-RU':

					break;
				case 'angle-decore angle-decore-LD':

					break;
				case 'angle-decore angle-decore-RD':

					break;
			}

		}



		quiue4Angles(element, index) {

			element.style.width = (this.horizontalDist * 0.5 + this.horizontalDist) + 'px';
			element.style.height = (this.horizontalDist * 0.5 + this.horizontalDist) + 'px';
			//this.distributionAngles();

		}



		makeAngleDist(element) {
			this.horizontalDist = element.offsetWidth * 0.05;
			this.verticalDist = element.offsetHeight - this.horizontalDist;
		}

		makeElemAngle(element) {
			element.style.clipPath =
				'polygon(5% 0, 95% 0, 100% ' + this.horizontalDist + 'px, 100% ' +
				this.verticalDist + 'px, 95% 100%, 5% 100%, 0 ' + this.verticalDist + 'px, 0 ' + this.horizontalDist + 'px)';
			element.style.shapeOutside =
				'polygon(5% 0, 95% 0, 100% ' + this.horizontalDist + 'px, 100% ' +
				this.verticalDist + 'px, 95% 100%, 5% 100%, 0 ' + this.verticalDist + 'px, 0 ' + this.horizontalDist + 'px)';

			if (element.classList.contains('subtable')) {
				element.style.clipPath =
					'polygon(5% 0, 95% 0, 100% ' + this.horizontalDist + 'px, 100% ' +
					this.verticalDist + 'px, 95% 100%, 5% 100%, 0 ' + this.verticalDist + 'px, 0 ' + this.horizontalDist + 'px)';
				element.style.shapeOutside =
					'polygon(5% 0, 95% 0, 100% ' + this.horizontalDist + 'px, 100% ' +
					this.verticalDist + 'px, 95% 100%, 5% 100%, 0 ' + this.verticalDist + 'px, 0 ' + this.horizontalDist + 'px)';

			}


		}

		resizeQuiue(element, index) {
			this.makeAngleDist(this.tables[0]);
			sortOut.call(this, this.tables, this.quiue4Table);
			this.makeAngleDist(this.subTables[0]);
			sortOut.call(this, this.subTables, this.quiue4Table);
			sortOut.call(this, this.angles, this.quiue4Angles);
		}

		addEvents() {
			let throttleResizeQuiue4Table = throttle(() => {
				this.resizeQuiue();

			}, this.throttleTime);

			window.addEventListener('resize', () => {
				throttleResizeQuiue4Table();
			});
		}

		quiue4Table(element, index) {
			this.makeElemAngle(element);
		}

		start() {
			this.makeAngleDist(this.tables[0]);
			sortOut.call(this, this.tables, this.quiue4Table);
			this.makeAngleDist(this.subTables[0]);
			sortOut.call(this, this.subTables, this.quiue4Table);
			sortOut.call(this, this.angles, this.quiue4Angles);
			this.addEvents();
		}

	}
	const table = new Table();
	table.start();

}