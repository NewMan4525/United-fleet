//b menu

// let bMenu = document.getElementById('b_menu');
// let bMenuElems = bMenu.querySelectorAll('.b_menu-elem');


// bMenu.addEventListener('click', () => {
// 	if (!bMenu.classList.contains('.b_menu_active')) {

// 		animate({
// 			duration: animateTime,
// 			timing: function back(x, timeFraction) {
// 				return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
// 			}.bind(null, 10),
// 			draw: function (progress) {
// 				bMenuElems[0].style.transformOrigin = 'center';
// 				bMenuElems[1].style.transformOrigin = 'center';
// 				bMenuElems[2].style.transformOrigin = 'center';
// 				bMenuElems[0].style.transform =
// 					'rotate(' + progress * 45 + 'deg) translateY(' + progress * 200 + '%) translateX(' + progress * 20 + '%)';
// 				bMenuElems[1].style.transform = 'scaleX(' + progress * 0.1 + ')';
// 				bMenuElems[2].style.transform =
// 					'rotate(' + progress * -45 + 'deg) translateY(' + progress * -200 + '%) translateX(' + progress * 20 + '%)';
// 			}
// 		});
// 	} else {
// 		animate({
// 			duration: animateTime,
// 			timing: function back(x, timeFraction) {
// 				return Math.pow(timeFraction, 2) * ((x + 1) * timeFraction - x);
// 			}.bind(null, 10),
// 			draw: function (progress) {

// 				bMenuElems[0].style.transformOrigin = 'center';
// 				bMenuElems[1].style.transformOrigin = 'center';
// 				bMenuElems[2].style.transformOrigin = 'center';
// 				bMenuElems[0].style.transform =
// 					'rotate(' + progress * 0 + 'deg) translateY(' + progress * 0 + '%) translateX(' + progress * 0 + '%)';
// 				bMenuElems[1].style.transform = 'scaleX(' + progress * 1 + ')';
// 				bMenuElems[2].style.transform =
// 					'rotate(' + progress * 0 + 'deg) translateY(' + progress * 0 + '%) translateX(' + progress * 0 + '%)';



// 			}
// 		});
// 	}

// 	bMenu.classList.toggle('.b_menu_active');
// });