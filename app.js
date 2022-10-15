// getting HTML elements

const output = document.querySelector('.text');

// String Generator function

output.addEventListener('click', function randomingStrings() {
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYXAabcdefghijklmnopqrstuvwxyz1234567890';
    let randomString = '';
    for (let i = 0; i <= 7; i++) {
        randomString += CHARS[~~(Math.random() * CHARS.length)];
    }
    console.log(randomString);
    this.innerHTML = `${randomString}`;
});
