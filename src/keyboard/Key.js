import React, { Component } from 'react';
import {observable, action} from 'mobx';
import {observer, inject} from 'mobx-react';

@inject('store') @observer
class Key extends Component {
  @observable pressed = false;
  @observable activeKey = '';

  @action pressKey = () => {
    this.props.store.globalKeyPressed = true;
    this.pressed = true;
    this.activeKey = this.props.name;
    this.props.store.showActiveKey(this.activeKey);
  }

  @action releaseKey = () => {
    this.props.store.globalKeyPressed = false;
    this.pressed = false;
    this.activeKey = '';
    this.props.store.showActiveKey(this.activeKey);
  }

  @action handleMouseOver = () => {
    if (this.props.store.globalKeyPressed) {
      this.pressKey();
    }
  }

  @action handleMouseLeave = () => {
    if (this.props.store.globalKeyPressed) {
      this.pressed = false;
      this.activeKey = '';
      this.props.store.showActiveKey(this.activeKey);
    }
  }

  render() {
    return (
      <div
        className={'key ' + this.props.color + (this.pressed ? ' pressed' : '')}
        onMouseDown={this.pressKey}
        onMouseUp={this.releaseKey}
        onMouseOver={this.handleMouseOver}
        onMouseLeave={this.handleMouseLeave}
      />
    );
  }
}

export default Key;
