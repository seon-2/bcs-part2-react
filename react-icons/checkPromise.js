async function checkPromise() {
  // 실행이 되면 resolve, 실행이 안되면 reject
  // var Promise: PromiseConstructor
  // new <any>(executor: (resolve: (value: any) => void, reject: (reason?: any) => void) => void) => Promise<any>
  try {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("완료"), 1000);
    });

    let result = await promise;

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

checkPromise();
// >> 완료
// async await는 try catch와 같이 잘 쓰임
// 정상적인 상황은 try문 실행, 에러가 발생하면 catch로 빼냄
