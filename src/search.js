import { render, clearContent } from './render';

const searchField = document.querySelector('.field__text');

export function find(data) {
	searchField.addEventListener('input', function () {
        clearContent();
		const searchValue = this.value.trim();
        if (searchValue === '') {
            data.forEach((item) => render(item.label));
		} else {
            data.forEach((item) => isInclude(item.label, searchValue) ? render(item.label) : false);
        }
	});
}

const isInclude = (targetValue, searchValue) =>
	String(targetValue).toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
