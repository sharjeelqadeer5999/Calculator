let input = '';
let output = 0;
let equalPressed = false;
const operators = ['*', '/', '+', '-', '=', '%', 'Del', 'C'];
document.getElementById('output').value = output;

function buttons(butnVal) {
    if (equalPressed && butnVal != 'C' && butnVal != '=' && butnVal != 'Del' && output != 'Invalid Input') {
        input = output + butnVal;
        equalPressed = false;
    } else {
        if (operators.includes(butnVal) && (input.length === 0)) {
            input += butnVal === '-' ? '0-' : '';
        }
        else if (butnVal === 'C') {
            input = '';
            output = 0;
            equalPressed = false;
        }
        else if (butnVal === 'Del') {
            input = input.slice(0, input.length - 1);
            equalPressed = false;
        }
        else if (input.charAt(input.length - 1) === '.' && butnVal === '.') {
            input += '';
        }
        else if (operators.includes(input.charAt(input.length - 1)) && operators.includes(butnVal) && butnVal != '=') {
            input = input.slice(0, input.length - 1) + butnVal;
        }
        else if (butnVal === '=') {
            try {
                output = eval(input);
                equalPressed = true;
            } catch (e) {
                output = 'Invalid Input';
            }
        }
        else {
            input += butnVal;
        }
    }
    (function updateFields() {
        if (input.length === 0) {
            output = 0;
        }
        document.getElementById('input').value = input;
        document.getElementById('output').value = output;
    })();
}



