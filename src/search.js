import { render, clearContent } from './render';

const searchField = document.querySelector('.field__text');

export function find(data) {
  searchField.addEventListener('input', function({ target: { value } }) {
    clearContent();
    const searchValue = value.trim();
    if (searchValue === '') {
      data.forEach(({ label }) => render(label));
    } else {
      data.forEach(
        ({ label }) => label.toLowerCase().includes(searchValue.toLowerCase()) && render(label)
      );
    }
  });
}
