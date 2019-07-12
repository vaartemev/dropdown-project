import data from './data';
import { render, clearContent } from './render';

const button = document.querySelector('.button');
const input = document.querySelector('.field__text');
const contentList = document.querySelector('.content__list');
const inputField = document.querySelector('.field');

export const getTextFromListItem = (listItems) => {
    listItems.forEach((listItem) => {
        listItem.addEventListener('click', function(){
            input.value = this.innerText;
            contentList.classList.remove('active');
            clearContent();
        });
    });
}

export const clickOnInputField = () => {
    inputField.addEventListener('click', (e) => {
        if(!contentList.classList.contains('active')){
            data.forEach((item) => render(item.label));
            button.innerHTML = 'Close';
            input.value = '';
            input.focus();
        } else if(e.target !== input){
            clearContent();
            button.innerHTML = 'Open';
        }
        
    });
    clicker();
}

function clicker() {
    const listItem = document.querySelector('.content__item');
    document.addEventListener('click', function(e) {
        if(e.target !== listItem){
           clearContent();
        }
    }, true);
}