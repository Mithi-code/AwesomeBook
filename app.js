let books = [];
let num = 0;
const container = document.querySelector('.book-display');
const title = document.querySelector('.text-title');
const author = document.querySelector('.text-author');
const add = document.querySelector('.add');
const remove = (element) => {
  const id = parseInt(element.id, 10);
  element.addEventListener('click', () => {
    const newbooks = books.filter((book) => {
      if (book.id !== id) return book;
      return '';
    });
    books = newbooks;
    localStorage.setItem('books', JSON.stringify(books));
    const el = `l${id}`;
    const children = container.childNodes;
    children.forEach((element) => {
      if (element.id === el) {
        container.removeChild(element);
      }
    });
  });
};
const displayData = (books) => {
  let tmp = '';
  for (let i = 0; i < books.length; i += 1) {
    tmp += `
        <div id="l${books[i].id}">
            <div>${books[i].title}</div>
            <div>${books[i].author}</div>
            <button class = "remove" id="${books[i].id}">remove</button>
            <hr>
        </div>
        `;
  }
  container.innerHTML = tmp;
  const bookToRemove = document.querySelectorAll('.remove');
  bookToRemove.forEach(remove);
};
const loadData = () => {
  if (localStorage.getItem('books')) {
    books = JSON.parse(localStorage.getItem('books'));
    displayData(books);
  }
  if (localStorage.getItem('num')) num = parseInt(localStorage.getItem('num'), 10);
};
const saveData = () => {
  add.addEventListener('click', () => {
    if (title.value && author.value) {
      num += 1;
      const book = { id: num, title: title.value, author: author.value };
      books.push(book);
      localStorage.setItem('books', JSON.stringify(books));
      localStorage.setItem('num', num);
      displayData(books);
      title.value = '';
      author.value = '';
    }
  });
};
loadData();
saveData();
