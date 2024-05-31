import React, { Component } from 'react';
import FirstComponent from './FirstComponent';
class App extends Component {
  state = {
    Data : [
      {name : 'tung', age: 29, uni:"fpt", id:1},
      {name : 'vu', age: 18, uni:"hust", id:2},
      {name : 'phg', age: 20, uni:"uet", id:3},

    ]
  }
  render() {
    return (
      <div className="app-container">
        <h1>My second React app</h1>
        <p>Welcome to my page</p>
        <FirstComponent Data={this.state.Data}/>
        {/* <firstComponent name="tung" age="25" uni="FBT" /> */}
      </div>
    );
  }

}

export default App;
