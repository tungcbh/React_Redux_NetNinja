import React, { Component } from 'react';
import FirstComponent from './FirstComponent';
class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h1>My second React app</h1>
        <p>Welcome to my page</p>
        <FirstComponent />
        {/* <firstComponent name="tung" age="25" uni="FBT" /> */}
      </div>
    );
  }

}

export default App;
