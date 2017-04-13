import React, { Component } from 'react';
import Fader from '../controls/Fader';

class Mixer extends Component {
  render() {
    return (
      <div className="mixer">
        <h4 className="block_header">Mixer</h4>
        <div className="mixer_wrapper">
          <div className="mix_parts">
            <div className="ruler st-left"></div>
            <Fader type="MIX A" defaultValue="50" />
            <div className="ruler st-between"></div>
            <Fader type="MIX B" defaultValue="50" />
            <div className="ruler st-right"></div>
          </div>

          <div className="mix_master">
            <div className="ruler st-left"></div>
            <Fader type="master" defaultValue="100" />
            <div className="ruler st-right"></div>
          </div>

          <div className="mix_meter"></div>
        </div>
      </div>
    );
  }
}

export default Mixer;
