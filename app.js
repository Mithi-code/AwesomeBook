class libraries {
static books = [];
static id = 0;
// const container = document.querySelector('.book-display');
// const title = document.querySelector('.text-title');
// const author = document.querySelector('.text-author');
// const add = document.querySelector('.add');
// const remove = (element) => {
//   const id = parseInt(element.id, 10);
//   element.addEventListener('click', () => {
//     const newbooks = books.filter((book) => {
//       if (book.id !== id) return book;
//       return '';
//     });
//     books = newbooks;
//     localStorage.setItem('books', JSON.stringify(books));
//     const el = `l${id}`;
//     const children = container.childNodes;
//     children.forEach((element) => {
//       if (element.id === el) {
//         container.removeChild(element);
//       }
//     });
//   });
// };
static add = (bookTitle, bookAuthor) => {
  this.id += 1;
  const newBook = { id: this.id, title: bookTitle, author: bookAuthor };
  this.books.push(newBook);
  localStorage.setItem('books', JSON.stringify(this.books));
  localStorage.setItem('id', this.id);
  this.displayData(this.books);
}

// const displayData = (books) => {
//   let tmp = '';
//   for (let i = 0; i < books.length; i += 1) {
//     tmp += `
//         <div id="l${books[i].id}">
//             <div>${books[i].title}</div>
//             <div>${books[i].author}</div>
//             <button class = "remove" id="${books[i].id}">remove</button>
//             <hr>
//         </div>
//         `;
//   }
static displayData = () => {
  const container = document.querySelector('#books_display');
  let tmp = '';
  for (let i = 0; i < this.books.length; i += 1) {
    tmp += `
    <div id="l${this.books[i].id}">
        <div>${this.books[i].title}</div>
        <div>${this.books[i].author}</div>
        <button class = "remove" id="${this.books[i].id}">remove</button>
        <hr>
    </div>
    `;
  }
  container.innerHTML = tmp;
  const bookToRemove = document.querySelectorAll('.remove');
  bookToRemove.forEach(remove);
};
// const loadData = () => {
//   if (localStorage.getItem('books')) {
//     books = JSON.parse(localStorage.getItem('books'));
//     displayData(books);
//   }
//   if (localStorage.getItem('num')) {
//     num = parseInt(localStorage.getItem('num'), 10);
//   }
// };
static remove = (element) => {
  const id = parseInt(element.id, 10);
  const container = document.querySelector('#books_display');
  element.addEventListener('click', () => {
    const newbooks = this.books.filter((book) => {
      if (book.id !== id) return book;
      return '';
    });
    this.books = newbooks;
    localStorage.setItem('books', JSON.stringify(this.books));
    const el = `l${id}`;
    const children = container.childNodes;
    children.forEach((element) => {
      if (element.id === el) {
        container.removeChild(element);
      }
    });
  });
}

// const saveData = () => {
//   add.addEventListener('click', () => {
//     if (title.value && author.value) {
//       num += 1;
//       const book = { id: num, title: title.value, author: author.value };
//       books.push(book);
//       localStorage.setItem('books', JSON.stringify(books));
//       localStorage.setItem('num', num);
//       displayData(books);
//       title.value = '';
//       author.value = '';
//     }
//   });
// };
static loadData = () => {
  if (localStorage.getItem('books')) {
    this.books = JSON.parse(localStorage.getItem('books'));
    this.displayData();
  }
  if (localStorage.getItem('id')) this.id = parseInt(localStorage.getItem('id'), 10);
}
}

const title = document.querySelector('.text_title');
const author = document.querySelector('.text_author');
const add = document.querySelector('.add');

Libraries.loadData();
 Libraries.displayData();
add.addEventListener('click', () => {
  Libraries.add(title.value, author.value);
  title.value = '';
  author.value = '';
});

