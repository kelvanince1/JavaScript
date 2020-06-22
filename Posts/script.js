const button = document.querySelector('#btn');
const text = document.querySelector('#txt');
const posts = document.querySelector('#posts');

let counter = 0;

button.addEventListener('click', (e) => {
    e.preventDefault();
    
    let item = document.createElement('p');
    item.classList.add('item');
    item.textContent = text.value;

    counter++;

    posts.appendChild(item);

    text.value = '';
});