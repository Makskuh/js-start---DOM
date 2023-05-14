'use strict';
const img = document.querySelector('#img');
const yourTask = document.querySelector('.question-btn');
const todoList = document.querySelector('.article-todo');
const deleteBtn = document.querySelector('.btn');
let newTask;
let newSection ;
let newButtonDelete;
yourTask.addEventListener('click', function () {
let newElem;
newTask = prompt('Write new task');
if(newTask != '') {
  newSection = document.createElement('section');
  newSection.classList.add('section-question');
  newButtonDelete = document.createElement('button');
  newButtonDelete.classList.add('btn');
  newButtonDelete.innerText = 'Delete'
  todoList.append(newSection)
  newElem = document.createElement('p')
  newElem.Textcontent = (newTask);
  newElem.classList.add('text');
  newSection.append(newTask);
  newSection.append(newButtonDelete);
} else
alert('Write something')
});
todoList.addEventListener('click', function(event) {
  if(event.target !== yourTask) {
  let elem = event.target;
  elem.parentElement.remove();
  } else undefined;
})
