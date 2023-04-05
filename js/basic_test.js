// 한줄 주석 : 임시 자바스크립트 파일을 생성했습니다.
var jb = 'hi'; // 변수 선언 뒤에 주석처리 가능

/*
 여러 줄 주석 : 여러 줄에 걸쳐 주석을 처리합니다.
*/

var a = 1;
var b;
b = 5;

if (true) {
	let c = 'let 접근'
	var c_1 = 'var 접근'
}
// console.log(c); // Error? Uncaught ReferenceError: c is not defined 
// let은 지역변수 {}에서 선언 -> {}에서만 사용
console.log(c_1);

let d = 5;
// let d = '값 재할당' //Error? Uncaught SyntaxError: Identifier 'd' has already been declared 
// 동일한 데이터 타입으로만 재할당 가능 
console.log(d);

const e = '상수1 접근'
// e = 5; // Uncaught TypeError: Assignment to constant variable.
// 재할당 불가능

// const f //Error? Uncaught SyntaxError: Missing initializer in const declaration
// 상수는 변수 선언하면서 초기화 필수
console.log(e);