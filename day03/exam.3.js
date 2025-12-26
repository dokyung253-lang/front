// 1. 숫자
100 // 숫자 형
console.log( 100 ) // 1. 소괄호 안에서 부터 읽는다.
console.log( typeof 150 ) // 2) typeof 자료
// 100: 숫자형 vs "100":  문자형 // http 
console.log( 3.37 ) // 3) 컴퓨터는 소수점을 모른다. <부동소수점>. 18자릿수 이상 넘어가면 정확도 떨어짐

// 2. 문자
console.log( "안녕" ); // 1) " " 로 감싼 자료
console.log( '안녕' ); // 2) ' ' 로 감싼 자료
console.log( `안녕` ); // 3) ` `, 키보드 왼쪽 Tab 키 위에 (백틱 기호)
// 4) 이스케이프(제어)문자
console.log( "\\안녕4 ") // 4) \\일 때 하나만 출력, \엔터 위에 (원화기호)
console.log( "\n안녕5" ) // 5) \n일 때 줄바꿈
console.log( "\t안녕6" ) // 6) \t일 때 들여쓰기 ( tab )
console.log( " \"안녕\" ") // 7) \" 또는 \' 일 때 " 또는 ' 출력
// 8 ~ 9) 템플릿 리터럴: 문자열과 변수/수식/함수 를 조합할 때
let 키 = 170
console.log("나의 키 : "  + 키 ) // 8) 방법 1: "문자열" + 변수명 . 문자 + 숫자 > 문자
console.log(`나의 키: ${ 키 }` ) // 9) 방법 2: `문자열 ${ 변수명/수식/함수호출 }
// 10 ) 문자: 한 글자, 문자열 : 두 글자 이상, 문자열은 배열(여러 개 묶음)이다.
console.log( `안녕하세요`.length ) // 10)  문자열길이(문자 개수) 반환, 5
console.log( `안녕하세요`[1] ) // 11) 안[0], 녕 [1], 하[2], 세[3], 요[4] -> *순서번호는 0번 부터* [인덱스]

// 3. 논리 : 제어문( 조건문/반복문 ) 자주 사용된다., 경우의 수가 2개인 자료에 자주 쓰임.
console.log( true )
console.log( false )

// 4. 특수
let var1 ; // 변수를 선언할 때 초기(처음)에 값을 대임(=)하지 않았다. 초기값이 없다. 
console.log( var1 ); // 1) undefined : 변수는 존재하지만 값이 없다. (정의를 아예 하지 않음)

let var2  = null ; // 변수의 데이터가 유효하지 않는다. (정의는 되어있지만, 값이 없다.)
console.log( var2 ); // 2) *null

// 5. 배열 : 여러개 자료들을 *순서*대로 저장하는 *자료*
let ary1 = [ '봄', '여름', '가을', '겨울' ];
    // 1) let ary1 : 변수명 (선언/만들기)
    // 2) = 대입, 오른쪽 자료를 왼쪽에 넣기
    // 3) '봄', '여름' 등등 : 자료 
    // 4) [ ] , 배열
// 6. 인덱스 : 배열 내 저장된 순서번호* 0번 시작*, 중간에 삭제되더라도 한 칸 씩 당겨진다.
console.log( ary1[ 0 ]); // 변수명[인덱스 번호], 봄
console.log( ary1[ 1 ])
console.log( ary1[ 2 ])
console.log( ary1[ 3 ])
// 배열 내 자료가 4개 이면, 길이: 4, 인덱스: 0~3

// 7. 배열 내 자료(요소) 수정 : 변수명 [수정할인덱스] = 새로운 값
ary1[ 0 ] = 'SPRING'; 

// 8. 배열 내 자료(요소) 추가 : 변수명.push( 새로운 값 ), 마지막 인덱스 뒤로 추가됨
ary1.push( 'SPRING2' ); console.log( ary1 );
// ;세미콜론이란? 한 문장의 명령어 마침 뜻,
//  한 줄에 문장이 하나이면 생략 가능 vs 한 줄에 두 문장이면 ; 세미콜론 필수

// 9. 배열 내 자료(요소) 삭제 : 변수명.splice( 삭제할 인덱스 , 개수 )
ary1.splice( 2, 1 ); // 2번 인덱스부터 1개 삭제
console.log( ary1 );

// 10. 배열 내 자료(요소) 중간 삽입 : 변수명.splice( 삽입할 인덱스, 0, '자료' )
ary1.splice( 2, 0, '가을' ); console.log( ary1 );

// 11. 배열 내 자료(요소) 값 찾기 : 변수명.indesOF( 찾을값 ), 찾을 값이 존재하면 인덱스 반환 없으면 -1
let result = ary1.indexOf( '가을' ); console.log( result );

// 12. 배열 내 자료 개수 반환 : 변수명.length , 배열 내 총개수 반환
console.log( ary1.length ) // 5

// 형 변환 , 다른 프로그래밍/환경 통신간의 데이터 변환 다수 발생
let input = prompt ("숫자 : "); // prompt 무조건 문자열로 반환한다.
console.log( typeof input ); // "100" -> string(문자열)

input = input * 1;               // 방법 1]
console.log( typeof input );   // "100" * 1 --> 100  number(숫자)

input = Number( input );       // 방법 2]
console.log( typeof input );

console.log( Number("100") );       // "100" -> 100
console.log( parseInt("100") );     // "100" -> 100
console.log( parseFloat("3.14") );  // " 3.14" -> 3.14
console.log( String(100) );         // 100 -> "100"
console.log( 100 + "" );            // 100 -> "100"
console.log( Boolean("true") );     // "true" -> true
