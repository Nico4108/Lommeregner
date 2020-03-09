
function performOperation(operator) {
    var x = parseInt(document.getElementById('txt1').value);
    var y = parseInt(document.getElementById('txt2').value);

    var result;

    switch (operator) {

        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            if (y == 0)
                result = "Can not divid by 0";
            else
                result = x / y;
            break;

        default :
            result = 0;
            break;
    }

    document.getElementById('result').value = result;
}
