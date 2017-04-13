import React, { Component } from 'react';
import Fader from '../controls/Fader';

class Envelope extends Component {
  render() {
    return (
      <div className="env">
        <h4 className="block_header">{this.props.type} env</h4>
        <div className="env_wrapper">
          <div className="ruler st-left"></div>
          <Fader type="A" defaultValue="0" />
          <div className="ruler st-between"></div>
          <Fader type="D" defaultValue="60" />
          <div className="ruler st-between"></div>
          <Fader type="S" defaultValue="85" />
          <div className="ruler st-between"></div>
          <Fader type="R" defaultValue="15" />
          <div className="ruler st-right"></div>
        </div>
      </div>
    );
  }
}

export default Envelope;
