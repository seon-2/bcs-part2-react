/** filter 함수 설명 */
let fruits = ["apple", "banana", "kiwi", "melon"];

// 다섯글자 이상인 과일만 배열에 남기기
let moreThanFiveLetters = fruits.filter((v, i) => {
  // return에 조건 입력하기
  return v.length >= 5;
});

// console.log(moreThanFiveLetters); // >> [ 'apple', 'banana', 'melon' ]

/** 객체 형태 배열에 filter 적용 */
const foods = [
  { type: "fruit", name: "apple" },
  { type: "vegetable", name: "carrot" },
  { type: "fruit", name: "banana" },
  { type: "vegetable", name: "potato" },
  { type: "fruit", name: "kiwi" },
  { type: "vegetable", name: "tomato" },
  { type: "fruit", name: "orange" },
];

const onlyFruits = foods.filter((v, i) => {
  // 과일인 것만 onlyFruits에 담기
  return v.type === "fruit";
  // 조건에 맞는 값이 담김
});

console.log(onlyFruits);

/**  map 함수로 만들어보기 */
const FruitsMap = foods.map((v, i) => {
  return v.type == "fruit";
  // 조건의 결과가 담김
});

console.log(FruitsMap);
// [true, false, true, false, true, false, true];

const FruitsMapIf = foods.map((v, i) => {
  if (v.type == "fruit") { // if문을 쓴다면?
    return v;
  }
});
console.log(FruitsMapIf);
/* 조건에 안 맞을 때 undefined로 뜸
[
  { type: 'fruit', name: 'apple' },
  undefined,
  { type: 'fruit', name: 'banana' },
  undefined,
  { type: 'fruit', name: 'kiwi' },
  undefined,
  { type: 'fruit', name: 'orange' }
]
*/