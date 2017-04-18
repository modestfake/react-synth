import React, { Component } from 'react';

import {observable, action} from 'mobx';
import {observer, inject} from 'mobx-react';

@inject('store') @observer
class DisplayInput extends Component {
  constructor(props) {
    super(props);

    this.value = props.defaultValue;
    this.dragInit = this.dragInit.bind(this);
  }

  @observable value = 0;

  @action handleChange = (newValue) => {
    this.value = newValue;
  }

  dragInit(e) {
    const dragProps = {
      dragYStart: e.pageY,
      min: this.props.min,
      max: this.props.max,
      currentValue: this.value
    };
    
    this.props.store.handleMouseDown(dragProps);
  }

  render() {
    return (
      <div className="tune_group">
        <span className="dv_title">{this.props.title}</span>
        <span
          className="dv_input"
          onMouseDown={this.dragInit}
        >{this.value}</span>
        <input
          type="hidden"
          value={this.value}
        />
      </div>
    );
  }
}

export default DisplayInput;
