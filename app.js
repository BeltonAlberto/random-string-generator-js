// getting HTML elements

const output = document.querySelector('.text');

// String Generator function

output.addEventListener('click', function randomingStrings() {
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYXAabcdefghijklmnopqrstuvwxyz1234567890';
    const STRLENGTH = 5;
    let randomString = ' ';
    for (let i = 0; i <= STRLENGTH; i++) {
        randomString += CHARS[~~(Math.random() * CHARS.length)];
    }
    console.log(randomString);
    output.innerHTML = `${randomString}`;
});
