// 1] 산술연산자 : + 더하기, - 빼기, * 곱하기, / 나누기, % 나머지
console.log( 10 + 3 ); // 13
console.log( 10 - 3 ); // 7
console.log( 10 * 3 ); // 30
console.log( 10 / 3 ); 3.333333333333335
console.log( parseInt( 10 / 3 ) ); // 몫 3
console.log( 10 % 3 ); // 나머지 1

// [지문1] prompt 함수로 국어 , 영어 , 수학 점수를 각 입력받아서 (각 변수에 저장하고) 총점 과 평균을 계산하여 console탭에 출력하시오.
// 소프트웨어 프로세스 : 입력 --> 저장 --> 처리 --> 출력
/*
let kor = prompt("국어점수: ");   // 1. prompt 함수로 국어, 영어, 수학 점수를 각 입력
let eng = prompt("영어점수: ");   // 2. 각 변수에 저장하고
let math = prompt("수학점수: ");
// 3. 처리( 계산 )
let sum = Number( kor ) + Number( eng ) = Number( math ) ;       // prompt로 입력받은 것들은 문자열이다.
let avg = sum / 3 ;
// 4. 출력
console.log( `result sum " ${sum}, avg ${ avg}` ) ; // `백틱 : 문자열 변수 
*/

// [지문2] prompt 함수로 반지름를 입력받아서 원넓이[반지름*반지름*3.14] 계산하여 console탭에 출력하시오.
/*let radius = Number( prompt('반지름 : ')) // ( ) 안에 있는 소괄호 우선 처리
console.log( `reqsult2 : ${ radius * radius * 3.14 } ` );

// [지문3] prompt 함수로 두 실수를 입력받아서 앞 실수의 값이 뒤실수의 값의 비율(백분율)% 계산하여 console탭에 출력하시오.
/*
let f1 = Number( prompt('실수1 : ') )
let f2 = Number( prompt('실수2 : ') )
let ratio = ( f1 / f2 )  * 100;  // 1 : 100%, 0.1 : 10% , 0.01 : 1%
console.log( `result3 : ${ ratio }% ` )
*/

// 2] 비교 연산자 : >초과 < 미만 >= 이상 <= 이하 ==(값) 같다 !=(값)같지않다 ===(값과 타입)같다 !==(값과 타입)같지 않다.
// 비교 결과는 true 또는 false

// 3] 논리연산자 : && 이면서  || 이거나  ! 부정 
// | : 엔터 위에 원화기호+Shift 
// && 이면서 이고 면서 그리고 모두, 모두 참이면 참, 모두 충족해야 참
// || 이거나 거나 또는 하나라도, 하나라도 참이면 참, 하나만 충족해도 참
// !: 부정 반대 not 조건, true -> false, false -> true
// 주의할 점: 50 < 점수 < 100와 같은 표현식은 없다. --> 점수 > 50 && 점수 < 100
// 논리 결과는 true 또는 false


// [지문4] prompt 함수로 정수를 입력받아 입력받은 값이 홀수이면 true / 짝수이면 false 로 console탭에 출력하시오.
/*
// 4-1 : 입력 , 다음에 처리할 연산이 있으므로 변수에 저장하면 좋다.
// 4-2 : 저장 
let int1 = prompt('정수: ');
// 4-3 : 처리( 값이 홀수 / 짝수 ), 값 % 2 나머지가 0이면 짝수, 1이면 홀수
let result = int1 % 2 == 1 ; // 입력받은 int 값이 나누기 2 했을 때 1과 같으면
// 주의할 점 : =(대입) , ==(비교)
console.log( `result4 : ${ result }` );
*/


// [지문5] prompt 함수로 정수를 입력받아 입력받은 값이 7의 배수이면 true / 아니면 false 로 console탭에 출력하시오.
/*
// * 배수찾기 : 값 % 배수값 했을 떄 나머지가 0이면 그 값은 배수값이다.
let int2 = prompt('정수 : ');
console.log( `result5 : ${ int2 % 7 == 0 }` )
*/

// [지문6] prompt 함수로 아이디 와 비밀번호를 입력받아서 (입력받은)아이디가 'admin' 이고 (입력받은)비밀번호가 1234 와 일치하면 true / 아니면 false 출력하시오.
/*
let id = prompt ('id: ');
let pw = prompt ( 'pwd : ');
// 조건 2개 == 이고 == 조건 1 && 조건 
let result = id == 'admit' && pwd == '1234' // 조건 2개를 모두 만족하면 true
console.log( `result6 : ${ result }` );
*/

// [지문7] prompt 함수로 정수를 입력받아 입력받은 값이 홀수 이면서 7배수 이면 true / 아니면 false 로 console탭에 출력하시오.
//let int3 = prompt(' 정수 : ' );
//let result2 = int3 % 2 == 1 && int3 % 7 == 0
//console.log( `result7 : ${ result2 }`); 

/*
    4] 할당/ (복합) 대입 연산자
        = 오른쪽 자료를 왼쪽에 대입, let 변수명 = 3
        += 오른쪽 자료를 왼쪽 자료와 더한 후 왼쪽에 대입
            => let a = 3; a += 3, a는 5가저장된다.
            => let a = 2; a = a + 2, a는 5가 저장된다.
            -= , *= , /=, %=
    
    5] 증감연산자 , 증가 또는 감소 연산자
        ++ , --
        1] 선위 증가 : ++ 변수명 , 선위 감소 : -- 변수명,
        2] 후위 증가 : 변수명 ++ , 후위 감소: 변수명 --
        * 선위 후위는 ;(세미콜론) / 한 문장 안에서 우선순위 정한다.
        -> a++  vs a = a+1  vs  a += 1  3개 모두 결과 동일

    6] 삼항연산자 , 조건 ? 참 : 거짓
        1] 조건 : 조건에는 논리(true/false) 또는 논리를 반환하는 연산
        2] 참 : true 대신에 반환할 자료 , 예] true 대신 '합격'
        3] 거짓 : false 대신에 반환할 자료, 예] false 대신 '불합격'
        -> if조건문과 비슷하지만 다르다. 리액트 환경에서 주로 사용됨.(간단한 조건식에 사용.)
        -> 중첩 가능: 조건 1 (참), 조건 2 (참), 조건 3 (참). 그 외에 거짓
*/
let age = 40;
++age
age++ // 혼자 있을 땐 결과에 차이점이 없다.
console.log( ++age ); //세미콜론 안에여러 명령어가 존재하므로
console.log( age++ )

// 주의할 점 : 변수명은 같은 파일 또는 범위내 중복 이름이 안된다.

// [지문8] 1차점수 와 2차점수 prompt함수로 각 입력받아서 총점이 150점이상이면 '합격' 아니면 '불합격' HTML의 <h3> 에 출력하시오.
let one = prompt('1차 점수 : ') // 1. 입력 2. 저장 
let two = prompt('2차 점수 : ') 
let sum = Number(one) + Number(two) ; // 3. 처리 (더하기) , * 대입 연산자 기준으로 오른쪽 먼저 연산
let result = sum >= 150 ? '합격': '불합격'; // 3. 처리 (논리 : 조건 찾기 = 총점이 150 이상)
// 4. html 에 문자열 출력하기
document.write(`<h3> 실습 8: ${ result } </h3>`); // `백틱 안에서 문자열과 연결
//document.querySelector( `h3` ).innerHtml = `실습 8 ${ result }`; // html에 미리 h3 마크업 만들어야 한다.
/*115, 116 중 하나만 사용. (똑같은 것)
*/

// [지문9] 두 사람의 이름을 prompt함수로 각 입력받아서 만일 이름이 '유재석' 이면 뒤에 (방장) 이라고 이름 뒤에 붙이고 아니면 생략한다.  HTML의 <ol> 에 결과를 출력하시오.
let name1 = prompt(' 첫번째 고객명 : ');
let name2 = prompt(' 두번째 고객명:');
name1 += name1 == '유재석' ? '(방장)': '' ;// 논리 : 조건 찾기 = 이름이 '유재석' 이면
name2 += name2 == '유재석' ? '(방장)': '' ;
let result2 =  `<li> ${ name1 } </li>
                <li> ${ name2 } </li>` // 연산은 인수에 따라 결과를 항상 다르게 반환한다.

document.querySelector('ol').innerHTML = result2;