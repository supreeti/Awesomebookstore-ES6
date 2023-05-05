class Storebooks {
  list = JSON.parse(localStorage.bookstore || '[]');

  addbook = (title, author) => {
    this.list.push({
      title,
      author,
    });
    this.updatebooks();
  };

  removbook = (index) => {
    this.list.splice(index, 1);
    this.updatebooks();
  };

  updatebooks = () => {
    localStorage.setItem('bookstore', JSON.stringify(this.list));
  };
}

export default Storebooks;