import React, { Component } from 'react';
import {observable, action} from 'mobx';
import {observer, inject} from 'mobx-react';

@inject('store') @observer
class Key extends Component {
  @observable pressed = false;
  @observable activeKey = '';

  constructor(props) {
    super(props);

    this.activeKey = '';
  }

  @action pressKey = () => {
    this.pressed = true;
    this.activeKey = this.props.name;
    this.props.store.showActiveKey(this.activeKey);
  }

  @action releaseKey = () => {
    this.pressed = false;
    this.activeKey = '';
    this.props.store.showActiveKey(this.activeKey);
  }

  render() {
    return (
      <div
        className={'key ' + this.props.color + (this.pressed ? ' pressed' : '')}
        onMouseDown={this.pressKey}
        onMouseUp={this.releaseKey}
        onMouseLeave={this.releaseKey}
      />
    );
  }
}

export default Key;
