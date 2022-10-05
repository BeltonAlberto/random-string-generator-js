let output = document.querySelector('.text');
output.addEventListener('click', function randomingStrings() {
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYXAabcdefghijklmnopqrstuvwxyz1234567890';
    const STRlENGTH = 5;
    let randomString = ' ';
    for (let i = 0; i <= STRLENGTH; i++) {
        randomString += CHARS[~~(Math.random() * CHARS.length)];
    }
    console.log(randomString);
    output.innerHTML = `${randomString}`;
});
