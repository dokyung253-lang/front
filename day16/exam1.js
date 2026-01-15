// [1] 서로 다른  JS 파일에서 변수/함수 사용 가능 여부
// 하나의 HTML에서 여러 개의 JS 파일 호출했을 때
//  <script src='test1.js'></script>
//  <script src='exam1.js'></script>
console.log(var1); // 다른 test1.js의 var1에서 선언된 변수 사용
func1(); // 다른 test.js에서 선언된 함수 사용

// [2] JS는 HTML에 종속된 관계라서 F5(새로고침) > 초기화(변수재생성)
// => 따라서 백엔드 필요. 백엔드 없이 영구저장 가능/불가? -> 가능
// 자동로그인, 검색기록, 비회원제 장바구니, 최근본제품 등등 (쿠키; 일정한 기간동안 저장할 수 있는 저장소)

/* 웹스토리지 : 
    1.  브라우저 ->  F12 ->[application/ 응용프로그램] 탭 -> 왼쪽 사이드바 메뉴
        [로컬 저장소] / [세션 저장소]
    2. 종류
        1] sessionStorage : 세션 저장소를 관리하는 객체
            * 서로 다른 html간의 자료 공유하지 않는다.
            * 모든 브라우저가 종료:  자료 자동 삭제
        
        2] localStorage : 로컬 저장소를 관리하는 객체     *객체; 기능/데이터를 가짐
            * 서로 다른 html간의 자료를 공유한다.           <단, 동일한 도메인(html주소)끼리만 가능>
            * 모든 브라우저가 종료 : 자료 유지              <사용자가 직접 삭제>
        
    3.  주요 기능/ 함수
        1] .setItem('key', value ); : 세션/로컬 저장소에 속성/자료 추가  * 배열이라고 보면 됨
        2] .getItem('key');         : 세션/로컬 저장소에 'key' 해당하는 자료 호출
        3] .removeItem('key');      : 세션/로컬 저장소에 'key' 해당하는 자료 삭제 
        4] .clear();                : 모든 key 삭제

    4. JSON 변환 : 세션/로컬 저장소는 문자열(HTTP기반) 저장이 가능하다.
        1] JSON.stringify() : JS객체 -> JSON문자열
        2] JSON.parse( sessionStorage.getItem) : JSON문자열 -> JS객체
*/ 
console.log( sessionStorage );
console.log( localStorage );

// (1) 저장
sessionStorage.setItem( 'name', '유재석' );              // F12 -> application탭 -> 확인 가능
localStorage.setItem('age','40');                       // F12 -> application탭 -> 확인 가능

// (2) 호출
console.log( sessionStorage.getItem('name')); // 세션 저장소에 저장된 'name'이라는 키를 갖는 값 호출
console.log( localStorage.getItem('age'));    // 로컬 저장소에 저장된 'age'라는 키 갖는 값 호출

// (3) 삭제
sessionStorage.removeItem('name');            // 세션저장소에 저장된 'name'이라는 키값 삭제 
localStorage.removeItem('key');               // 로컬 저장소에 저장된 'age'라는 키값 삭제

// (4) 활용 : 복잡한(샘플)데이터 
   // * 세션/로컬 저장소는 문자열만 저장이 가능하다. 배열 / 객체 ---> 문자열로 변환  **** JSON : 자바스크립트 객체 기반의 문자열 형식 ****
   sessionStorage.setItem('회원목록',  JSON.stringify( [{name : "유재석", age : "40"}, {name : "강호동", age : "40"}]));
   console.log( JSON.parse( sessionStorage.getItem('회원목록')));