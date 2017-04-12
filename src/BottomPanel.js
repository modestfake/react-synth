import React, { Component } from 'react';
import Wheel from './controls/Wheel';
import Octave from './keyboard/Octave';

class BottomPanel extends Component {
  render() {
    return (
      <div className="bottom_panel">
        <div className="wheels">
          <Wheel />
          <Wheel />
        </div>
        <div className="keyboard_panel">
          <Octave octave="2" />
          <Octave octave="3" />
          <Octave octave="4" />
          <Octave octave="5" />
        </div>
      </div>
    );
  }
}

export default BottomPanel;
