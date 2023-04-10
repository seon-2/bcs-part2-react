function checkPromise() {
  // 실행이 되면 resolve, 실행이 안되면 reject
  // var Promise: PromiseConstructor
  // new <any>(executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void) => Promise<any>
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료"), 1000);
  });

  let result = promise;
  console.log(result);
}

checkPromise();
// Promise { <pending> } 보류중.
// 지금 상태에 promise는 비동기 함수이기 때문에 바로 9번 줄이 실행됨
