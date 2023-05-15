'use strict';
const yourTask = document.querySelector('.question-btn');
const todoList = document.querySelector('.article-todo');
function deleteHandler(event){
  event.target.parentElement.remove()
  }

yourTask.addEventListener('click', function () {

const newTask = prompt('Write new task');
if(newTask != '') {
  const newSection = document.createElement('section');
  newSection.classList.add('section-question');
  
  const newButtonDelete = document.createElement('button');
  newButtonDelete.classList.add('btn');
  newButtonDelete.innerText = 'Delete';
  newButtonDelete.addEventListener('click',deleteHandler)
  todoList.append(newSection)
  const newElem = document.createElement('p')
  newElem.Textcontent = (newTask);
  newElem.classList.add('text');
  newSection.append(newTask);
  newSection.append(newButtonDelete);
} else
alert('Write something')
});

