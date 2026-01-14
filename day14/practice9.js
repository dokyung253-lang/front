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
const leaveAry = [
    { leaveCode: 1, memCode: 1, "start": "2024-08-04", "end": "2025-08-04", "reason": "병원진료" },
    { leaveCode: 2, memCode: 2, "start": "2024-07-21", "end": "2025-07-25", "reason": "여름휴가" }
];
/* ===================== 기능/함수 설계 ===================== */
// [1] 등록함수: deptName을 입력받으면, tr 만들어서 Html의 #team > table안에 저장
deptPrint();
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
function Add() {
    const input = document.querySelector(".teamname");
    deptAry.push({
        deptCode: String(deptAry.length + 1),
        deptName: input.value
    });
    deptPrint();
    input.value = "";
}

//[2] 출력함수 : 