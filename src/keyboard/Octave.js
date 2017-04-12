import React, { Component } from 'react';
import Key from './Key';
import Const from '../Const';

class Octave extends Component {
  render() {
    const keys = Const.KEYS.map((num) =>
      <Key color={num.color} name={num.key + this.props.octave} key={num.key + this.props.octave} />
    );

    return (
      <div className="octave">
        {keys}
      </div>
    );
  }
}

export default Octave;
