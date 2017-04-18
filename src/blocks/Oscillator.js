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

  constructor(props) {
    super(props);

    this.preset = props.preset;
  }

  render() {
    return (
      <div className="osc">
        <h4 className="block_header">Osc {this.props.osc}</h4>
        <div className="osc_octave">
          <DisplayInput
            title="Octave"
            min={-3}
            max={3}
            defaultValue={this.preset.octave}
          />
          <DisplayInput
            title="Note"
            min={0}
            max={12}
            defaultValue={this.preset.note}
          />
        </div>
        <div className="osc_knobs">
          <div className="osc_knob_group">
            <Knob
              defaultValue={this.preset.volume}
              title="Volume"
            />
          </div>
          <div className="osc_knob_group">
            <Knob
              defaultValue={this.preset.phase}
              title="Phase"
            />
          </div>
          <div className="osc_knob_group">
            <Knob
              defaultValue={this.preset.detune}
              title="Detune"
            />
          </div>
          <div className="osc_knob_group">
            <Knob
              defaultValue={this.preset.stereo}
              title="Stereo"
            />
          </div>
          <div className="osc_knob_group">
            <Knob
              defaultValue={this.preset.pan}
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
