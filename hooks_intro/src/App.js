import React, { Component } from 'react';
import CounterClass from './CounterClass';
import CounterHooks from './CounterHooks';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <CounterClass />
        <CounterHooks />
      </div>
    )
  }
}

export default App;
