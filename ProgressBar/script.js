const bar = document.querySelector('.bar');

// function fillBar(seconds) {
//     let current = 0;
//     const interval = setInterval(() => {
//         bar.style.width = current + '%';
//         current++;

//         console.log('Increased');

//         if (current >= 100) {
//             clearInterval(interval);
//         }

//     }, (seconds * 1000) /100);
// }

let current = 0;

function incrementBar(amount) {
    current += amount;

    if (current > 100) {
        bar.style.width = '100%';
        return;
    }

    bar.style.width = current  + '%';
    return;
}