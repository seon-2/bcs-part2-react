// 구조분해 실습 a.js

// 객체 하나 만들기
const myProfile = {
  name: "jiseon",
  age: 999,
  job: "student",
  isGenius: true,
};

// console.log(myProfile);
// 이름만 출력하려면
// console.log(myProfile.name);

// 객체 구조분해
// 배열은 다 꺼냈지만, 객체는 필요한 것만 꺼냄.
// 배열은 순서가 정해져있지만, 객체는 순서가 없고 key와 value 존재!
const { name, age } = myProfile;
// const { age, name } = myProfile;  // 정상작동!
console.log(name); // js에서 이미 존재하는 키워드가 있음. 
console.log(age);