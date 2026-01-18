function boardWrite(){
    const titleInput = document.querySelector('#titleInput');
    const contentInput= document.querySelector('#contentInput');
    const pwdInput=document.querySelector('#pwdInput');
    const title=titleInput.value;  //입력값 가져오기
    const content=contentInput.value;
    const pwd=pwdInput.value;
    const obj = {title, content, pwd}// 객체화
    let boardList=localStorage.getItem('boardList');
     if(boardList == null){boardList=[]}
     else{boardList=JSON.parse(boardList);}
     obj.no=boardList.length==0?1: boardList[boardList.length-1].no+1;
     boardList.push(obj);
     localStorage.setItem('boardList',JSON.stringify(boardList));
     alert('게시물작성성공');
     location.href='list.html'
}