// 삼항연산자 실습

let age = 18;

// 삼항연산자
// react 안에서 return 안, html코드에서 조건문 써주고 싶을 때 종종 사용됨!
// let beverage = age >= 20 ? "Beer" : "Coke";

// if문
let beverage;
if (age >= 20) {
  beverage = "Beer";
} else {
  beverage = "Coke";
}

console.log(beverage);
