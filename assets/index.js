'use strict';
const todoList = document.querySelector('.article-todo');
const form = document.querySelector('#form');
const btnSubmit = document.querySelector('#submit');

function deleteHandler(event) {
  event.target.parentElement.remove();
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const { target: formElements } = e;
  const { elements } = formElements;
  if (elements.newTask.value === '' || elements.newTask.value === ' ') {
    throw new TypeError('Write something');
    return;
  }
  const newSection = document.createElement('section');
  newSection.classList.add('section-question');

  const newButtonDelete = document.createElement('button');
  newButtonDelete.classList.add('btn');
  newButtonDelete.innerText = 'Delete';
  newButtonDelete.addEventListener('click', deleteHandler);

  todoList.append(newSection);

  const newElem = document.createElement('p');
  newElem.textContent = elements.newTask.value;
  newElem.classList.add('text');

  newSection.append(newElem);
  newSection.append(newButtonDelete);
  elements.newTask.value = '';
});

const div = document.querySelector('#div');
const text = document.querySelector('#text-div');

div.addEventListener('click', (e) => {
  if (e.target.dataset.color === 'red','blue','green','yellow') {
    div.style.color = e.target.dataset.color
  }
  if(e.target.dataset.weight === '800') {
    div.style.fontWeight =e.target.dataset.weight;
  }
  if(e.target.dataset.bgc === 'grey') {
    div.style.backgroundColor =e.target.dataset.bgc;
  }
});
