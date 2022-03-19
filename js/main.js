const nav = document.querySelector(`.nav`);
const navBtn = document.querySelector(`.burger-btn`);
const allNavItem = document.querySelectorAll(`.nav__item`);
const active = () => {
	nav.classList.toggle(`nav--active`);

	allNavItem.forEach((item) => {
		item.addEventListener(`click`, () => {
			nav.classList.remove(`nav--active`);
		});
	});
	handleNavAnimation();
};
const handleNavAnimation = () => {
	let delayTime = 0;
	allNavItem.forEach((iteam) => {
		iteam.classList.toggle('nav-item-animation');
		iteam.style.animationDelay = '.' + delayTime + 's';
		delayTime++;
	});
};

navBtn.addEventListener(`click`, active);
