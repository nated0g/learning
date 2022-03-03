document.querySelector('#cToF').addEventListener('click', () => {
    let temp = Number(document.querySelector('#cels').value);
    if (isNaN(temp)) {
        alert("Invalid Entry!")
    } else {
        document.querySelector('#fahr').value = (temp * 9/5) + 32;
    }
});

document.querySelector('#fToC').addEventListener('click', () => {
    let temp = Number(document.querySelector('#fahr').value);
    if (isNaN(temp)) {
        alert("Invalid Entry!")
    } else {
        document.querySelector('#cels').value =  (temp - 32) * 5/9;
    }
});
