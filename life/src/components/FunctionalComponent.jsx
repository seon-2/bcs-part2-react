import { useEffect } from "react";

const FunctionalComponent = () => {
  // useEffect 라이프사이클을 함수형 컴포넌트에서 구현하기 위해서! (cf. 상태관리는 useState!)
  /*
  (alias) useEffect(effect: React.EffectCallback, deps?: 
    React.DependencyList | undefined): void
    import useEffect

    EffectCallback(함수)과 React.DependencyList(배열)가 필요
   */
  useEffect(() => {}, []);

  return <div className="bg-blue-100 h-96">FunctionalComponent</div>;
};

export default FunctionalComponent;
