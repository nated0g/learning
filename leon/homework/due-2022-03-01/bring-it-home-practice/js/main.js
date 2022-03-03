// *Variables*
// Create a variable and console log the value
document.querySelector('#log').addEventListener('click', () => {
    let firstVar = document.querySelector('#logVar').value;
    console.log(firstVar);
});
// Create a variable, add 10 to it, and alert the value
document.querySelector('#add10-btn').addEventListener('click', () => {
    let a = Number(document.querySelector('#add10').value);
    if (isNaN(a)) {
        alert("You didn't enter a valid number!!")
    } else {
        alert(`${a + 10}`);
    }
});
// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
document.querySelector('#sub4').addEventListener('click', () => {
    let a = Number(document.querySelector('#subA').value);
    let b = Number(document.querySelector('#subB').value);
    let c = Number(document.querySelector('#subC').value);
    let d = Number(document.querySelector('#subD').value);
    // Do some validation
    if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {

        alert("You didn't enter valid numbers!!")
    } else {
        subFour(a, b, c, d);
    }
});

function subFour(a, b, c, d) {
    alert(`${a} - ${b} - ${c} - ${d} = ${a - b - c - d}`)
}

// Create a function that divides one number by another and returns the remainder
function getRemainder(a, b) {
    return a % b;
}

document.querySelector('#mod').addEventListener('click', () => {
    let a = Number(document.querySelector('#modA').value);
    let b = Number(document.querySelector('#modB').value);
    if (isNaN(a) || isNaN(b)) {
        alert("You didn't enter valid numbers!!")
    } else {
        document.querySelector('#modResult').style.visibility = "visible";
        document.querySelector('#modResultText').innerHTML = getRemainder(a, b);
    }
});

document.querySelector('#closeModResult').addEventListener('click', () => {
    document.querySelector('#modResult').style.visibility = 'hidden';
});


// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(a, b) {
    if (a + b > 50) {
        alert("Jumanji");
    }
}

document.querySelector('#jum').addEventListener('click', () => {
    let a = Number(document.querySelector('#jumA').value);
    let b = Number(document.querySelector('#jumB').value);
    if (isNaN(a) || isNaN(b)) {
        alert("You didn't enter valid numbers!!")
    } else {
        jumanji(a, b);
    }
});

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function zebra(a, b, c) {
    let product = a * b * c;
    if (product % 3 === 0) {
        alert("🦓 ZEBRA 🦓");
    }
}

document.querySelector('#zeb').addEventListener('click', () => {
    let a = Number(document.querySelector('#zebA').value);
    let b = Number(document.querySelector('#zebB').value);
    let c = Number(document.querySelector('#zebC').value);
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("You didn't enter valid numbers!!")
    } else {
        zebra(a, b, c);
    }
});