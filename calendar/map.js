// map 실습

const fruits = ["apple", "banana", "cherry"];
// console.log(fruits);

// for문
for (let i = 0; i < fruits.length; i++) {
  // 배열의 끝까지 돌 때는, 배열에 요소가 추가될 수도 있으니 배열의 길이(.length)까지 도는 것으로 한다.
  //   console.log(fruits[i]);
}

// map 함수 사용
// fruits.map((value, index) => {
//   console.log(`${index + 1}번째 과일 : ${value}`);
// });

// map 함수는 값을 받아서 복작복작 한 후, 새로운 배열을 생성할 수 있음
const array = [1, 2, 4, 8];
// console.log(array);

// const squareArray = array.map((v) => {
//   return v * v;
// });
// console.log(squareArray);
// map 함수 한 줄로
const squareArray = array.map((v) => v * v);

// for문으로 똑같이 만들어보기
const squareArray2 = [];

for (let i = 0; i < array.length; i++) {
  squareArray2.push(array[i] * array[i]);
}

console.log(squareArray);
console.log(squareArray2);
