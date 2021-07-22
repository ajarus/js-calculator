var operationButtons = document.getElementsByClassName('operation-button')

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
        case '/':
            summ = number1/number2;
            break
        default:
            summ = number1*number2
    }
    window.alert(summ)

 }

function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    doing(operation);
}

for (var i = 0; i < operationButtons.length; i++) {
    var button = operationButtons[i]; 
    button.addEventListener('click', onOperationButtonClick);
}