const operator = prompt('Anna operaattori ( joko +, -, * tai / ): ');

const number1 = parseFloat(prompt('Anna ensimmäinen numero: '));
const number2 = parseFloat(prompt('Anna toinen numero: '));

let result;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

console.log(`${number1} ${operator} ${number2} = ${result}`);