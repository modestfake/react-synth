import React, { Component } from 'react';

class Fader extends Component {
  render() {
    return (
      <div className={'fader' + (this.props.type === 'master' ? ' master' : '')}>
        <label>{this.props.type}</label>
        <input type="range" defaultValue={this.props.defaultValue} />
      </div>
    );
  }
}

export default Fader;
