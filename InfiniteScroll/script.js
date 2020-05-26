const list = document.querySelector('#list');

let counter = 1;

const load10 = () => {
    for (let i = 0; i < 10; i++) {
        let item = document.createElement('li');
        item.classList.add('list--item');
        item.textContent = counter + ': Item in the list';
        counter++;
        list.appendChild(item);
    }
}

list.addEventListener('scroll', () => {
    if (list.scrollTop + list.clientHeight >= list.scrollHeight) {
        load10();
    }
});

load10();