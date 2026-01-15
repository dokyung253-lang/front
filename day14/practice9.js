/* ======================================== 1. 부서 관리 ============================================= */
/* ====================== 메모리 설계 ====================== */
// 1. 정보 배열
// 1. 부서 정보
const deptAry = [
    { deptCode: 1, "deptName": "개발팀" },
    { deptCode: 2, "deptName": "디자인팀" },
    { deptCode: 3, "deptName": "운영팀" }
];

// 2. 사원 정보
const memberAry = [
    { "memName": "김민준", "deptCode": 1, memCode: 1, "position": "선임개발자", "image": "https://placehold.co/100x100" },
    { "memName": "이서연", "deptCode": 2, memCode: 2, "position": "수석디자이너", "image": "https://placehold.co/100x100" },
    { "memName": "박도윤", "deptCode": 3, memCode: 3, "position": "팀장", "image": "https://placehold.co/100x100" },
    { "memName": "유재석", "deptCode": 1, memCode: 4, "position": "대리", "image": "https://placehold.co/100x100" }
];

// 3. 휴가 신청 정보
const vacationAry = [
    { vCode: 1, memCode: 1, "start": "2024-08-04", "end": "2025-08-04", "reason": "병원진료" },
    { vCode: 2, memCode: 2, "start": "2024-07-21", "end": "2025-07-25", "reason": "여름휴가" }
];
/* ===================== 기능/함수 설계 ===================== */

// 1. 부서(4)
// 1) 부서 등록
function Add() {
    const input = document.querySelector(".teamname");
    deptAry.push({
        deptCode: String(deptAry.length + 1),
        deptName: input.value
    });
    deptPrint();
    input.value = "";
}
// 2) 부서 전체출력
deptPrint();
// 3) 부서 수정
function deptPrint(){
    const teambody = document.querySelector("#teambody");
    let html="";
      for( let index =0; index <= deptAry.length-1; index++){
          const dept = deptAry[index];
          const dName = dept.deptName;
          const dCode = dept.deptCode;
        
        html += `<tr>
                    <td> ${dName} </td>
                    <td>
                        <button onclick="deptUpdate('${dCode}')" class="updateBtn"> 수정 </button> 
                        <button onclick="deptDelete('${dCode}')" class="deleteBtn"> 삭제 </button>
                    </td>
                </tr>`
        } //for end
        teambody.innerHTML=html;
}
// 4) 부서 삭제


// 2. 사원 (4)
// 1) 사원 등록
let memCode = 5; 
function memAdd(){
    const deptDom = document.querySelector(".deptName");
    const deptName = deptDom.value;   
    
    const memCode = document.querySelector(".memCode");
    const memcode = memCode.value;                    

    const nameDom = document.querySelector(".memName");
    const name = nameDom.value;            

    const positionDom = document.querySelector(".position");
    const position = positionDom.value;                               
    
    const imageDom = document.querySelector(".image");
    const image = imageDom.files[0];

    if( deptName == "disabled" ){ alert("부서를 선택하세요."); return; }

    if( name ==""|| position =="" ){ alert("이름과 직급은 필수입력입니다."); return; }
    memCode += 1;
    const obj = { 
    "memCode": memCode,
    "memName": name,
    "position": position,
    "image": image == undefined  ? "https://placehold.co/100x100" : URL.createObjectURL(image),
    "deptCode": deptName, 
    };
    memberAry.push(obj); 
    productPrint(); 
}
// 2) 사원 전체출력
// 3) 사원 수정
// 4) 사원 삭제

// 3. 휴가신청 (3)
// 1) 휴가신청 등록
// 2) 휴가신청 전체출력
// 3) 휴가신청 삭제/취소

// + select 현재 존재하는 부서명만 출력 +
// + select 현재 존재하는 사원명만 출력 +