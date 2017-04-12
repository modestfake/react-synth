import React, { Component } from 'react';
import MainPanel from './MainPanel';
import BottomPanel from './BottomPanel';
import './App.scss';

class Synth extends Component {
  render() {
    return (
      <div className="App">
        <div className="Synth">
          <MainPanel />
          <BottomPanel />
        </div>
      </div>
    );
  }
}

export default Synth;
