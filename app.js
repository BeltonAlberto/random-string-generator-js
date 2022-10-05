let output = document.querySelector('.text');
output.addEventListener('click', function randomingStrings() {
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYXAabcdefghijklmnopqrstuvwxyz1234567890';
    const stringLength = 5;
    let randomString = ' ';
    for (let i = 0; i <= stringLength; i++) {
        randomString += CHARS[~~(Math.random() * CHARS.length)];
    }
    console.log(randomString);
    console.log(CHARS.length);
    output.innerHTML = `${randomString}`;
});
