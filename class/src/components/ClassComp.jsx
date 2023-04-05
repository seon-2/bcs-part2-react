import { Component } from "react";

// Component를 상속받음
class ClassComp extends Component {
  state = {
    count: 0,
  };

  // 기존 count 값을 받아온 인자값(num)으로 바꾸는 역할
  // react Component의 setState 사용
  setCount(num) {
    this.setState({
      count: num,
    });
  }

  render() {
    // this의 개념! 자기 자신을 지칭 (어디에서 지칭하느냐_함수 호출 방법에 따라 다름)
    // 클래스형 컴포넌트에서 this는 현재 클래스. 여기에서는 ClassComp 클래스.
    // 웹 브라우저에서 this는 웹 브라우저 자체를 말함
    // nodejs에서 this는 global
    return (
      <div className="bg-blue-100 w-1/2 min-h-screen flex flex-col justify-center items-center text-2xl">
        <div>{this.state.count}</div>
        <button
          className="bg-purple-300 px-4 py-2 rounded-md"
        //   버튼 안에 인라인으로 화살표 함수 이용해서 setCount 적용
          onClick={() => this.setCount(this.state.count + 1)}
        >
          +
        </button>
      </div>
    );
  }
}

export default ClassComp;
