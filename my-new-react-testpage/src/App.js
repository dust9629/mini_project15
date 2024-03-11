// import logo from './logo.svg';
import { useState } from "react";
import './App.css';

function App() {
  //return (
    // JSX
    // JSX는 함수 호출과 객체 생성을 위한 문법적 편의를 제공하는 JavaScript의 확장
    // HTML과 비슷하게 생겼으나 JavaScript 이며 HTML과 다른 부분이 있음
    // JSX는 Babel에 의해 Transcompile됨
  //);
  const App = () => {
    return (
      <div>
        <p>hello</p>
        <span>Greetings</span>
        <div>bye</div>
      </div>
    );
  }
  // JSX의 장점
  // 1. 개발자 편의성 향상
  // 2. 협업에 용이 / 생산성 향상
  // 3. 문법 오류와 코드량 감소

  // JSX 특징 / HTML과 차이점
  // 1. HTML태그 내에 JavaScript 연산
  // 2. class -> className
  // 3. 스타일은 object로
  // 4. 닫는 태그 필수
  // 5. 최상단 element는 반드시 하나

  const App2 = () => {
    const a = 3;
    const b = 6;
    return <div>{a} + {b} = {a+b}</div>
  } 

  (
    <div className="greeting" style={{padding: 10, color: "red"}}>
      {name}님 안녕하세요. <br/>
      반갑습니다.
    </div>
  )

  // component
  // 1. React에서 페이지를 구성하는 최소 단위
  // 2. Component의 이름은 대문자로 시작
  // 3. Class Component / Function Component 로 나뉨
  // 4. Controlled Componet / Uncontrolled Componet

  const MyComponent = (props) => {
    const {user, color, children} = props
    return (
      <div style={{ color }}>
        <p>{user.name} 님의 하위 element는 !</p>
        {children}
      </div>
    )
  }

  const App3 = () => {
    return (
      <div>
        <p>hello</p>
        <MyComponent user={{name: "jake"}} color="blue">text</MyComponent>
      </div>
    )
  }

  // Class Component / Function Component
  class Hello extends Component {
    render (){
      const { name } =this.props
      return <div>{name}님 안녕하세요.</div>
    }
  }

  const Hello = (props) => {
    const { name } = props
    return <div>{name}님 안녕하세요.</div>
  }
  // 초기 리액트의 컴포넌트는 모두 class였음
  // v16부터 새로운 Function 컴포넌트와 Hooks 개념이 발표되며 주로 Function을 사용

  // 컴포넌트끼리 데이터를 주고받을 땐 Props
  // 컴포넌트 내에서 데이터를 관리할 땐 State
  // 데이터는 부모 -> 자식으로만 전달
}

export default App;
