const bar = document.querySelector('.bar');

function fillBar(seconds) {
    let current = 0;
    const interval = setInterval(() => {
        bar.style.width = current + '%';
        current++;

        console.log('Increased');

        if (current >= 100) {
            clearInterval(interval);
        }

    }, (seconds * 1000) /100);
}