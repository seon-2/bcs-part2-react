// 구조분해 실습 a.js

// 구조분해가 필요 없는 경우
const seon2 = {
  nickName: "seon-2",
};
const seon3 = {
  nickName: "seon-3",
};

const { nickName } = seon2;
// const { nickName } = seon3; // 오류 발생!! 키 값이 같음
// console.log(seon3.nickName);
const { nickName: newNickName } = seon3; // 키 값 바꾸기

console.log(newNickName);
