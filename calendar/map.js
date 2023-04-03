// map 실습

const fruits = ["apple", "banana", "cherry"];
// console.log(fruits);

// for문
for (let i = 0; i < fruits.length; i++) {
  // 배열의 끝까지 돌 때는, 배열에 요소가 추가될 수도 있으니 배열의 길이(.length)까지 도는 것으로 한다.
  //   console.log(fruits[i]);
}

// map 함수 사용
fruits.map((value, index) => {
  console.log(`${index + 1}번째 과일 : ${value}`);
});