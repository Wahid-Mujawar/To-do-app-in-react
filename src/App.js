import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render(){
   return (
    <header>
      <form id="to-do-form">
        <input type="text" placeholder="Enter Text"></input>
        <button type="submit">ADD</button>
      </form>
    </header>
    );
  }
}

export default App;
