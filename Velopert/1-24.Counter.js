import React, { Component } from 'react';

class Counter extends Component {
  // 메서드와 컴포넌트 인스턴스의 관계를 맺기 위해서 bind작업
  // constructor(props) {
  //   super(props);
  //   this.handleIncrease = this.handleIncrease.bind(this);
  //   this.handleDecrease = this.handleDecrease.bind(this);
  // }
  // 내부종속된 경우 handle... 네이밍룰
  // class - properties 문법 사용 
  // state는 무조건 객체 형태
  state = {
    counter: 0,
    fixed: 1
  };
  handleIncrease = () => {
    this.setState(state => ({
      counter: state.counter + 1
    }));
  };

  handleDecrease = () => {
    this.setState(state => ({
      counter: state.counter - 1
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
        <p>고정된 값: {this.state.fixed}</p>
      </div>
    );
  }
}

export default Counter;