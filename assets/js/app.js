'use strict';

const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const cards = document.getElementsByClassName('love-card');
let position = 0;

window.onload = () => {
	setCardClass(0);
};

function setButtonsClass(position) {
	if (position === 0) {
		prevBtn.classList.add('opacity-50');
		prevBtn.disabled = true;
	} else {
		prevBtn.classList.remove('opacity-50');
		prevBtn.disabled = false;
	}

	if (position === cards.length - 1) {
		nextBtn.classList.add('opacity-50');
		nextBtn.disabled = true;
	} else {
		nextBtn.classList.remove('opacity-50');
		nextBtn.disabled = false;
	}
}

function setCardClass(position) {
	for (var i = 0; i < cards.length; i++) {
		let translate = 'translate-x-full';

		if (i < position) {
			translate = '-translate-x-full';
		}

		cards[i].classList.add('opacity-0', translate, 'absolute', 'left-0', 'top-0');
	}

	cards[position].classList.remove('opacity-0', 'translate-x-full', '-translate-x-full', 'absolute', 'left-0', 'top-0');
}

function next() {
	if (position !== cards.length - 1) {
		position += 1;
		setCardClass(position);
	}

	setButtonsClass(position);
}

function prev() {
	if (position !== 0) {
		position -= 1;
		setCardClass(position);
	}

	setButtonsClass(position);
}
