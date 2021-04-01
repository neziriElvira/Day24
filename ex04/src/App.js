import React, { Component } from 'react';

class App extends Component {
  setLocalStorage = () => {
    localStorage.setItem('Arena', 'Selection Month');
  }

  getLocalStorage = () => {
    let myLocalStorageData = localStorage.getItem('Arena');
    return myLocalStorageData;
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.setLocalStorage}>Click to set Local Storage</button>
        <button onClick={this.getLocalStorage}>Click to get Local Storage</button>
      </div>
    )
  }
}

export default App;
