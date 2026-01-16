/* 
    [인터벌 : interval] : 간격/ 주기 
        1. 시간적인 간격에 따라 특정 코드 / 함수 실행
        2. 사용법
            setInterval(함수명, 밀리초);
            - 함수명: 함수명만 작성한, ( ) 생략한다.
            - 밀리초 : 1/1000초
            예시] let 변수명 = setInterval(함수명, 밀리초);
           (2)
           clearInterval(종료할 Interval 객체)
*/
// [1] 
let value = 0;
function 증가함수( ){
    value = value +1 ; // 전역변수 1 증가
    const box1 = document.querySelector("#box1");
    box1.innerHTML = value;

}// f end
// 특정한 시간/간격 마다 함수 실행
setInterval( 증가함수, 1000 ); // 1초(1/1000) 마다 '증가함수' 자동 실행
// 주의할 점: 증가함수;함수 그 자체 vs 증가함수();함수 실행 서로 다름. 

// [2] 
function 시계함수(){
    let today = new Date(); // new Date() : 현재 시스템의 날짜/시간 반환 함수
    let hour = today.getHours(); // '시' new Data().getHours()
    let minute = today.getMinutes();// '분'
    let second = today.getSeconds(); // "초"
    let time = `${hour} : ${minute< 10 ? '0'+minute : minute} : ${second < 10 ? '0'+second : second}`;
    const box2 = document.querySelector("#box2");
    box2.innerHTML=time;
} // f end
setInterval(시계함수, 1000); // 자동으로 1초 마다 시계함수가 자동 실행된다.

//[3]
let time = 0; // 현재 타이머의 시간(초)
let timerId;  // interval 객체를 저장하는 전역 변수(*전역변수 : 서로다른 함수간의 "공유")
function 타이머시작(){
    // ! interval 실행 후 반환된 객체를 timerId에 대입, 왜? 추후에 제어(종료)하기 위해서
    timerId = setInterval(시간함수, 1000); // setting해줌 내가실행할 함수(시간함수)와 초(1000 = 1초)

}
function 타이머중지(){
    clearInterval(timerId); // clearInterval( 종료할 inerval 객체)
}
function 타이머초기화(){
    clearInterval(timerId); // 실행 중인 타이머 중지
    time = 0; // 전역변수인 time을 0으로 만듦
    document.querySelector("#box3").innerHTML = time; // 화면에 표시된 숫자 0으로 리셋

}
function 시간함수(){
    time++ // 1 증가
   
    document.querySelector("#box3").innerHTML = time;
    // 유재석.공부하기().밥먹기() ; 소괄호가 많을 땐 뒤에 있는 소괄호(행위)부터 실행
}
