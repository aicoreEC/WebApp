function calc() {
    let number1 = Number( document.getElementById( 'number1' ).value );
    let number2 = Number( document.getElementById( 'number2' ).value );
    let operator = document.getElementById( 'operator' ).value;
    let result = 0;

    if ( operator === '+' ) {
        result = number1 + number2;
    } else if ( operator === '-' ) {
        result = number1 - number2;
    } else if ( operator === '*' ) {
        result = number1 * number2;
    } else {
        result = number1 / number2;
    }

    let div = document.getElementById( 'result' );
    let output = `${number1} ${operator} ${number2} = ${result}`
    div.innerHTML = output;
}
