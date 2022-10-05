let output = document.querySelector('#text');
output.addEventListener('click', randomingStrings(5));

// Can be usefull to create a unique IDs, Passwords, strings

function randomingStrings(stringLength) {
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYXAabcdefghijklmnopqrstuvwxyz1234567890';
    let randomString = ' ';
    for (let i = 0; i <= stringLength; i++) {
        randomString += CHARS[~~(Math.random() * CHARS.length) + 1];
    }
    output.innerText = `${randomString}`;
}
