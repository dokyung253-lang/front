//(2) 삭제함수
function boardDelate(){
 // 1. URL(웹주소)의 경로 가져오기
 const url = new URLSearchParams(location.search);
 // 2. 경로 상의 선택된 게시물번호(쿼리스트링) 가져오기
 const selectNo= url.get('no'); 
} // func end