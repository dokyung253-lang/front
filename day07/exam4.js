
// [1] for 중첩 : for 안에 for
// (1) 2단 구구단
for( let 곱 = 1; 곱 <= 9; 곱 ++){
console.log( ` 2 X ${ 곱 } = ${2 * 곱}`);
}

// (2) 2단 ~ 9단
for ( let 단 = 2 ; 단 <= 9 ; 단++ ){ //단 이 2부터 9까지 1 씩 증가
        console.log(` ${단} X 1 = $ {단 * 1 } `);    
}

// (3) 1. 곱마다 단을 계산하는 건지? [X] 2. 단 마다 곱을 계산하는 건지? [O]
// 2단일 때 9번 곱. 3단일 때 9번 곱 , ~~~~~~ \
for( let 단 = 2 ; 단 <= 9 ; 단++ ){ // 단 이 2부터 9까지 1씩 증가
    for ( let 곱 = 1 ; 곱 <= 9 ; 곱++){ // 곱 이 1부터 9까지 1씩 증가
        console.log(` ${단} X ${곱} = ${단 *곱}`);
    } // 곱 End
}// 단 end  // 즉 : 곱은 단마다 9번씩 실행된다. 총 실행횟수 72번 반복

// [2] 별 출력하기
/*      line(row)       star(column)        
*       1               1                   첫번째 줄의 별 1개 출력
**      2               1 2                 두번쨰 줄의 별 2개 출력
***     3               1 2 3               세번째 줄의 별 3개 출력
****    4               1 2 3 4             네번째 줄의 별 4개 출력
*****   5               1 2 3 4 5           다섯번쨰 줄의 별 5개 출력
찾은 패턴1 : line은 1부터 5까지 1씩 증가하면서 줄바꿈 (/n) 출력
찾은 패턴2 : star는 1부터 line 까지 1씩 증가 하면서 "*" 출력
*/ 
let output="" ; // 출력할 문자열 선언 
// (1)
//for { line = 1 ; line <= 5 ; line++ }{ output = output + "n";} // console.log() 함수는 1개당 줄바꿈 1개 내장
// 예상 : output = "nnnnnn";

// (2)
//for( let star = 1 ; star <= 5; star++ ){ output = output + "*";}
// 예상 : output = "nnnnn*****"

// (3) 1. 줄마다 별 출력하는건지? [o, 별 출력하고 줄바꿈 ] 2. 별마다 줄 출력하는건지? [x]
for( let line = 1 ; line <= 5; line++ ){ 
    for(  let star = 1; star <= line; star++ ){ output = output + "*";} // 총합계와 동일하게 문자열 추가 / 연결
    output = output +"\n"; // 줄바꿈처리
} // for end
console.log( output );
// 예상하기 output, line 1일때, *\n
// line 2일 때 , *\n**\n
// line 3일 때 , *\n**\n***\n
// line 4일 때 , *\n**\n***\n****\n
// line 5일 때 , *\n**\n***\n****\n*****\n

// [3] 반복문 과 자주 사용되는 키워드
// [1] continue;
for( let i = 1; i <= 5 ; i++){
    if( i == 3){ continue; } // 만약애 i(반복변수)가 3일 때 반복문으로 이동<이하코드 실행안됨>
    console.log( 1 ); // 1 2 4 5 , 1부터 3을 제외한 5까지 출력된다. 이유: 3일 때 continue를 만났기 때문에.
}
// [2] break
for( let i = 1; i <= 5; i++ ){
    if( i == 3){ break; }// 만약에 1(반복변수)가 3일 때 반복문 탈출 / 종료,
    console.log( i ); // 1 2 , 1 부터 5까지 출력하되, 3이면 종료, 이유: 3일 때 break 만났기 때문에
} // for end

// [3] 무한루프 : 종료가 없는 계속되는 반복문
// 방법1 : for( ; ; ){ console.log(1); }
// 방법2 : while( true ){console.log(1);}
// 활용1 : for( ; ; ){ let a = prompt("무한입력: "); }
// 활용2 : for( ; ; ){ let b = prompt("무한입력: "); if(b == "x") break; } 
