import Storebooks from './modules/Bookstore.js';
import luxon from './modules/luxon.js';

const Addbook = document.querySelector('#add');
const newbooks = new Storebooks();
const navbar = document.querySelectorAll('.links li');

const Date = document.getElementById('currdate');
const Time = () => {
  Date.innerHTML = luxon.DateTime.now().toLocaleString(
    luxon.DateTime.DATETIME_MED_WITH_WEEKDAY,
  );
};
setInterval(Time, 2000);

navbar.forEach((link) => {
  link.addEventListener('click',() => {  
    if (link.innerText === 'List') {
      document.querySelector('.book').classList.remove('hide');
      document.querySelector('.addbook').classList.add('hide');
      document.querySelector('.contat').classList.add('hide');
    } else if (link.innerText === 'Add') {
      document.querySelector('.book').classList.add('hide');
      document.querySelector('.addbook').classList.remove('hide');
      document.querySelector('.contat').classList.add('hide');
    } else if (link.innerText === 'Contact') {
      document.querySelector('.book').classList.add('hide');
      document.querySelector('.addbook').classList.add('hide');
      document.querySelector('.contat').classList.remove('hide');
    }
  });
});

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

window.onload = () => updatebook();