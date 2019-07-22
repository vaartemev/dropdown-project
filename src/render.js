import { getTextFromListItem } from './handlers';

const contentList = document.querySelector('.content__list');
const button = document.querySelector('.button');

export const render = text => {
  const listItem = document.createElement('li');
  listItem.classList.add('content__item');
  listItem.innerHTML = text;
  contentList.appendChild(listItem);

  button.classList.add('button-active');
  contentList.classList.add('content__list-active');

  const contentItem = document.querySelectorAll('.content__item');
  getTextFromListItem(contentItem);
};

export const clearContent = () => {
  contentList.innerHTML = '';
  button.innerHTML = 'Open';
  button.classList.remove('button-active');
  contentList.classList.remove('content__list-active');
};
