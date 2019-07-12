import data from './data';
import { render, clearContent } from './render';

const button = document.querySelector('.button');
const input = document.querySelector('.field__text');
const contentList = document.querySelector('.content__list');

export const getTextFromListItem = (listItems) => {
	listItems.forEach((listItem) => {
		listItem.addEventListener('click', function () {
			input.value = this.innerText;
			input.setAttribute('data-text', this.innerText);
			contentList.classList.remove('active');
			clearContent();
		});
	});
};

export const clickOnInputField = () => {
	document.addEventListener('click', function (e) {
		if (e.target === input || e.target === button) {
			if (!contentList.classList.contains('active') && !button.classList.contains('active')) {
				data.forEach((item) => render(item.label));
				button.innerHTML = 'Close';
				input.value = '';
				input.focus();
			} else {
				input.removeAttribute('data-text');
				clearContent();
			}
		} else {
			input.value = input.getAttribute('data-text');
			clearContent();
		}
	}, true);
};

window.onscroll = () => {
	input.value = input.getAttribute('data-text');
	clearContent();
};
window.onresize = () => {
	input.value = input.getAttribute('data-text');
	clearContent();
};
