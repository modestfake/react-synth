import React, { Component } from 'react';
import Knob from 'react-canvas-knob';

import {observable, action} from 'mobx';
import {observer} from 'mobx-react';

@observer
class Oscillator extends Component {
  @observable knobValue = 50;

  @action handleChange = (newValue) => {
    this.knobValue = newValue;
  }

  render() {
    return (
      <div className="osc">
        <h4 className="block_header">Osc {this.props.osc}</h4>
        <Knob
          value={this.knobValue}
          min={0}
          max={127}
          onChange={this.handleChange}
          onChangeEnd={this.handleChange}
          width={50}
          stopper={true}
          angleArc={290}
          angleOffset={-145}
          fgColor="#20b4e4"
          title="Frequency"
          // bgColor=""
        />
      </div>
    );
  }
}

export default Oscillator;
