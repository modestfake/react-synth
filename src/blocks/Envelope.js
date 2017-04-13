import React, { Component } from 'react';

class Envelope extends Component {
  render() {
    return (
      <div className="env">
        <h4 className="block_header">{this.props.type} env</h4>
      </div>
    );
  }
}

export default Envelope;
