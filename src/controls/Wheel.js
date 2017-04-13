import React, { Component } from 'react';
import {observable, action} from 'mobx';
import {observer} from 'mobx-react';

@observer
class Wheel extends Component {
  @observable active = false;

  @action handleClick = (e) => {
    this.active = true;
  }

  @action handleDragStart = (e) => {
    let img = document.createElement('img');
    img.src = '';
    e.dataTransfer.setDragImage(img, 0, 0);
  }

  @action handleDrag = (e) => {
    console.log(e);
  }

  render() {
    return (
      <div className="wheel_wrapper">
        <div
          className="wheel"
          draggable="true"
          onMouseDown={this.handleClick}
          onDragStart={this.handleDragStart}
          onDrag={this.handleDrag}
        />
      </div>
    );
  }
}

export default Wheel;
