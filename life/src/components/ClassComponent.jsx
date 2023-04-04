import { Component } from "react";

// extends Component : Component에 들어있는 모든 기능들을 가져와서 쓰겠다
// Component는 라이프사이클 기능을 포함하고 있다. (index.d.ts의 interface ComponentLifecycle)
// 즉, 클래스컴포넌트는 라이프사이클 기능을 가진다!
class ClassComponent extends Component {
  render() {
    return <div className="bg-yellow-100 h-96">ClassComponent</div>;
  }
}

export default ClassComponent;
