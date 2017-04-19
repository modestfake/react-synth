import React, { Component } from 'react';
import {observable, action} from 'mobx';
import {observer, inject} from 'mobx-react';

@inject('store') @observer
class DisplayInput extends Component {
  @action dragInit = (e) => {
    const dragProps = {
      name: this.props.name,
      osc: this.props.osc,
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
        <span className="dv_title">{this.props.name}</span>
        <span
          className="dv_input"
          onMouseDown={this.dragInit}
        >{this.props.defaultValue}</span>
        {/* <input
          type="hidden"
          value={this.value}
        /> */}
      </div>
    );
  }
}

export default DisplayInput;
