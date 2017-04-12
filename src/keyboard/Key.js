import React, { Component } from 'react';
import {observable, action} from 'mobx';
import {observer} from 'mobx-react';

@observer
class Key extends Component {
  @observable pressed = false;

  @action pressKey() {
    this.pressed = true;
  }

  @action releaseKey() {
    this.pressed = false;
  }

  render() {
    return (
      <div
        className={'key ' + this.props.color + (this.pressed ? ' pressed' : '')}
        onMouseDown={this.pressKey.bind(this)}
        onMouseUp={this.releaseKey.bind(this)}
      />
    );
  }
}

export default Key;
