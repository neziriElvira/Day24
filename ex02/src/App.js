import React, { Component } from 'react';


class App extends Component {
  setMyStorage = () => {
    document.cookie = "Year=2021";
    localStorage.setItem('Paragon', 'yes, but Arena first');
    sessionStorage.setItem('frontend', 'React');
  }

  getMyStorage = () => {
    const myCookieData = document.cookie.split('=')[1];
    const myLocalStorageData = localStorage.getItem('Paragon');
    const mySessionStorageData = sessionStorage.getItem('frontend');
    return [myCookieData, myLocalStorageData, mySessionStorageData];
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.setMyStorage}>Click to Set Storage</button>
        <button onClick={this.getMyStorage}>Click to Get Storage</button>
      </div>
    )
  }
}

export default App;
