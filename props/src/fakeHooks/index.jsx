// hooks 겉부분만(전체 아님!) 만들어서 가져와보는 실습

export const fakeUseState = () => {
  // 실제로는 useState를 구성하는 수식이 있음
  let value;
  const setValue = () => {};
  
  // 만약 객체를 return 한다면?
  //   return { value: value, setValue: setValue };
  return { value, setValue };
};
