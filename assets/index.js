'use strict';
const img = document.querySelector('#img');
const btn = document.querySelector('.switch');
const imgArr = [
  { src: './assets/img/vaporwave-retro-art.jpg', alt: 'retro' },
  {
    src: './assets/img/fon_pikseli_raznotsvetnyj_47113_800x600.jpg',
    alt: 'piksel',
  },
];
const crtAtr = document.createAttribute('alt');
crtAtr.value = 'new btn';
btn.setAttributeNode(crtAtr);
let currentAnimal = 0;
const newElem = document.createElement('p');
newElem.textContent = 'this new element from JS';
document.body.append(newElem);
document.body.children
function btnHandler(event) {
  currentAnimal = currentAnimal === 0 ? 1 : 0;
  btn.classList.toggle('togle');
  img.setAttribute('alt', imgArr[currentAnimal].alt);
  img.setAttribute('src', imgArr[currentAnimal].src);

  img.hidden = currentAnimal === 0 ?1 :0;
}
btn.addEventListener('click', btnHandler);
