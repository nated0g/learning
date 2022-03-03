//create a function that adds two numbers and alerts the sum
document.querySelector('#sum').addEventListener('click', sumAlert);
document.querySelector('#prod').addEventListener('click', logProd);
document.querySelector('#mod').addEventListener('click', showMod);
document.querySelector('#closeModResult').addEventListener('click', () => {
    document.querySelector('#modResult').style.visibility = 'hidden';
});

function sumAlert() {
    let a = Number(document.querySelector('#sumA').value);
    let b = Number(document.querySelector('#sumB').value);
    if (isNaN(a) || isNaN(b)) {
        alert("You didn't enter valid numbers!!")
    } else {
        alert(`The sum of ${a}+${b} is ${a + b}`);
    }
}

//create a function that multiplys three numbers and console logs the product

function logProd() {
    let a = Number(document.querySelector('#prodA').value);
    let b = Number(document.querySelector('#prodB').value);
    let c = Number(document.querySelector('#prodC').value);
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("You didn't enter valid numbers!!")
    } else {
        alert("Check the console!")
        console.log(`The product of ${a}×${b}×${c} is ${a * b * c}`);
    }
}
//create a function that divides two numbers and returns the ???

function showMod() {
    let a = Number(document.querySelector('#modA').value);
    let b = Number(document.querySelector('#modB').value);
    if (isNaN(a) || isNaN(b)) {
        alert("You didn't enter valid numbers!!")
    } else {
        document.querySelector('#modResult').style.visibility = "visible";
        document.querySelector('#modResultText').innerHTML = a % b;
    }
}