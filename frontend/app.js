import './styles/styles.css';
import UI from './UI';

const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.renderBooks();
});

document.getElementById('book-form').addEventListener('submit', e => {
    e.preventDefault();
    
    const title = document.getElementById('title').value;        
    const author = document.getElementById('author').value;        
    const isbn = document.getElementById('isbn').value;        
    const image = document.getElementById('image').files;
    
    const formData = new FormData();
    formData.append('image', image[0]);
    formData.append('title', title);
    formData.append('author', author);
    formData.append('isbn', isbn);

    ui.addNewBook(formData);
    ui.renderMessage('New Book Added', 'success', 3000);
});

document.getElementById('books-cards').addEventListener('click', e => {
    e.preventDefault();
    if (e.target.classList.contains('delete')) {
        const id = e.target.getAttribute('_id');
        ui.deleteBook(id);
        ui.renderMessage('Book Removed', 'danger', 2000);
    }
});