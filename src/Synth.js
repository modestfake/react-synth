import React, { Component } from 'react';
import MainPanel from './MainPanel';
import BottomPanel from './BottomPanel';

class Synth extends Component {
  render() {
    return (
      <div>
        <MainPanel />
        <BottomPanel />
      </div>
    );
  }
}

export default Synth;
