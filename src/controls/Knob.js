import React, { Component } from 'react';
import KnobCanvas from 'react-canvas-knob';

import {observable, action} from 'mobx';
import {observer} from 'mobx-react';

@observer
class Knob extends Component {
  @observable knobValue = 0;

  constructor(props) {
    super(props);

    this.knobValue = props.defaultValue;
    this.min = typeof props.min !== 'undefined' ? props.min : 0;
    this.max = typeof props.max !== 'undefined' ? props.max : 127;
  }

  @action handleChange = (newValue) => {
    this.knobValue = newValue;
  }

  render() {
    return (
      <div>
        <KnobCanvas
          value={this.knobValue}
          min={this.min}
          max={this.max}
          onChange={this.handleChange}
          onChangeEnd={this.handleChange}
          width={35}
          height={35}
          stopper={true}
          angleArc={290}
          angleOffset={-145}
          fgColor="#20b4e4"
          title={this.props.title}
          // bgColor=""
        />
        <span className="knob_title">{this.props.title}</span>
      </div>
    );
  }
}

export default Knob;
