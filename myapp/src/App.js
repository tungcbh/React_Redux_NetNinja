import React, { Component } from 'react';
import ShowData from './ShowData.js';
import AddData from './AddData.js';

class App extends Component {
  state = {
    datas: [
      { name: 'tung', age: 29, uni: "fpt", id: 1 },
      { name: 'vu', age: 18, uni: "hust", id: 2 },
      { name: 'phg', age: 20, uni: "uet", id: 3 },

    ]
  }

  addData = (data) => {
    data.id = this.state.datas.length + 1;
    let datas = [...this.state.datas, data];
    this.setState({
      datas: datas,
    })
  }

  deleteData = (id) => {
    // console.log(id);
    let datas = this.state.datas.filter((data) => {
      return data.id !== id;
    })
    this.setState({
      datas: datas
    })
  }

  render() {
    return (
      <div className="app-container">
        <h1>My second React app</h1>
        <p>Welcome to my page</p>
        <ShowData datas={this.state.datas} deleteData={this.deleteData} />
        <AddData addData={this.addData} />
      </div>
    );
  }

}

export default App;
