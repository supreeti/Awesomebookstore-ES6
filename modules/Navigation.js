const navbar = document.querySelectorAll('.links li');

navbar.forEach((link) => {
    link.addEventListener('click', () => {
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
export default navbar;