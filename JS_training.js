var buttonPlus = document.getElementById('buttonPlus');
var buttonMinus = document.getElementById('buttonMinus');
var buttonMultiply = document.getElementById('buttonMultiply');
var buttonDevide = document.getElementById('buttonDevide');

function doing(argument) {
    var input1 = document.getElementById('number1');
    var input2 = document.getElementById('number2');

    var number1 = Number(input1.value);
    var number2 = Number(input2.value);

    var summ;
    switch (argument) {
        case '+':
            summ= number1+number2;
            break
        case '-':
            summ=number1-number2;
            break
        case '*':
            summ = number*number2;
        case '/':
        summ = number1/number2
    }
    window.alert(summ)

 }

function onButtonPlusClick() {
    doing('+')
    
}

function onButtonMinusClick() {
    doing('-')
}

function onButtonMultiplyClick() {
    doing('*')
}

function onButtonDevideClick() {
    doing('/')
}

buttonPlus.addEventListener('click', onButtonPlusClick);
buttonMinus.addEventListener('click', onButtonMinusClick);
buttonMultiply.addEventListener('click', onButtonMultiplyClick);
buttonDevide.addEventListener('click', onButtonDevideClick);