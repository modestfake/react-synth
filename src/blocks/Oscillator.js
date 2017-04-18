import React, { Component } from 'react';
import Knob from '../controls/Knob';
import DisplayInput from '../controls/DisplayInput';

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
        <div className="osc_octave">
          <DisplayInput
            title="Octave"
          />
          <DisplayInput
            title="Note"
          />
        </div>
        <div className="osc_knobs">
          <div className="osc_knob_group">
            <Knob
              defaultValue={100}
              title="Volume"
            />
          </div>
          <div className="osc_knob_group">
            <Knob
              defaultValue={0}
              title="Phase"
            />
          </div>
          <div className="osc_knob_group">
            <Knob
              defaultValue={0}
              title="Detune"
            />
          </div>
          <div className="osc_knob_group">
            <Knob
              defaultValue={0}
              title="Stereo"
            />
          </div>
          <div className="osc_knob_group">
            <Knob
              defaultValue={0}
              title="Pan"
              min={-64}
              max={64}
            />
          </div>
        </div>
        <div className="osc_bottom">

        </div>
      </div>
    );
  }
}

export default Oscillator;
