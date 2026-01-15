/*[ JS 실습1 ]
- 빽다방의 키오스크 에서의 존재하는 자료들을 찾아서 작성하시오.
- 찾을 자료형 종류
1.숫자 자료 : 3개 이상 
2.문자열 자료 : 3개 이상 
3.불리언 자료 : 3개 이상 
4.배열 자료 : 3개 이상 
5.객체 자료 : 3개 이상 
- 각 찾은 자료들을 console.log() 에 출력하시오.
*/
// 숫자찾기
console.log(2000) //제품별가격
console.log(4000) //총결제금액
console.log(3) // 주문수량
// vs 가독성 높이기 위해 변수 활용
let 제품별가격 = 2000
console.log(제품별가격);
let 총결제금액 = 4000
console.log(총결제금액);
let 주문수량 = 3
console.log(주문수량);

// 문자열찾기
console.log("아메리카노", '커피', '스무디/쉐이크', 'A-03')

// 불리언 찾기
const 품절여부 = true; console.log(품절여부);
const 영수증출력여부 = false; console.log(영수증출력여부);
const 적립여부 = true; console.log(적립여부);

// 배열찾기
let priceary=[2000, 3000, 4000]
console.log(priceary)
let categoryary=["커피", '음료','주스']
console.log(categoryary)
let productary=['아메리카노','바닐라라떼','카페모카']
console.log(productary)

// 객체 찾기
let productobj = {name:'원조커피', price: 2500, stock:35}
console.log(productobj)
let receiptobj ={ordernumber: "A-03", price:3500, day:"2025-12-25"}
console.log(receiptobj)
let cafeobj= {brand:'빽다방', location:'성결대점', open:"09:30"}
console.log(cafeobj)