async function checkPromise() {
  // 실행이 되면 resolve, 실행이 안되면 reject
  // var Promise: PromiseConstructor
  // new <any>(executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void) => Promise<any>
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료"), 1000);
  });

  let result = await promise;
  console.log(result);
}

checkPromise();
// >> 완료
// promise 를 가지고 있는 함수에 async를 붙여주고 promise에 await 붙임.
// 1초 기다렸다가 resolve에 "완료" 가 담기고 그게 result에 담겨서 console 출력
