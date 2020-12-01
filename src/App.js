import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render(){
   return (
    <header>
      <div className="App">
      <form id="to-do-form">
        <input type="text" placeholder="Enter Text"></input>
        <button type="submit">Add</button>
      </form>
      </div>
    </header>
    );
  }
}

export default App;
