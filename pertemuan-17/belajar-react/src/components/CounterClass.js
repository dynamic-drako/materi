import React, { Component } from "react";

class CounterClass extends Component {
  render() {
    return (
      <div>
        <h1>Counter class</h1>
        <button onClick={this.props.decrease}>-</button>
        {this.props.number}
        <button onClick={this.props.increase}>+</button>
      </div>
    );
  }
}

export default CounterClass;
