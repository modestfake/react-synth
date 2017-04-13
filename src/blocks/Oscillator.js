import React, { Component } from 'react';

class Oscillator extends Component {
  render() {
    return (
      <div className="osc">
        <h4 className="block_header">Osc {this.props.osc}</h4>
      </div>
    );
  }
}

export default Oscillator;
