import React, { Component } from 'react';

import {observable, action} from 'mobx';
import {observer} from 'mobx-react';

@observer
class DisplayInput extends Component {
  @observable value = 0;

  constructor(props) {
    super(props);

    // this.value = props.defaultValue;
  }

  @action handleChange = (newValue) => {
    this.value = newValue;
  }

  render() {
    return (
      <div className="tune_group">
        <span className="dv_title">{this.props.title}</span>
        <span className="dv_input">{this.value}</span>
        <input
          type="hidden"
          value={this.value}
        />
      </div>
    );
  }
}

export default DisplayInput;
