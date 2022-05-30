function calc() {
    // Number() : 숫자로 형변환하는 객체
    // 웹 페이지 입력 내용은 항상 문자열
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
    let output = `<h3>${number1} ${operator} ${number2} = ${result}<h3>`
    div.innerHTML = output;
}
