import Storebooks from './modules/Bookstore.js';
import navbar from './modules/Navigation.js';
import time from './modules/Datetime.js';

const dateTime = time;
setInterval(dateTime, 1000);

const Addbook = document.querySelector('#add');
const newbooks = new Storebooks();

const updatebook = () => {
  const booklist = document.querySelector('.allbooks');
  booklist.innerHTML = '';
  for (let i = 0; i < newbooks.list.length; i += 1) {
    booklist.innerHTML += `<ul class="awesomebook">
        <li>"${newbooks.list[i].title}" from "${newbooks.list[i].author}"</li>
        <button class ='remove' id='${i}' type="button">Remove</button>
      </ul>`;
  }
  const removeBtn = document.querySelectorAll('.remove');
  removeBtn.forEach((list) => {
    list.addEventListener('click', (e) => {
      newbooks.removbook(e.target.id);
      updatebook();
    });
  });
};

Addbook.addEventListener('click', () => {
  const title = document.querySelector('#title');
  const author = document.querySelector('#author');
  newbooks.addbook(title.value, author.value);
  title.value = '';
  author.value = '';
  updatebook();
});

window.onload = () => {
  updatebook();
  navbar();
};