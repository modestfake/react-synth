import React, { Component } from 'react';
import MainPanel from './MainPanel';
import BottomPanel from './BottomPanel';
import './scss/App.scss';
import Presets from './Presets';

import {observable, action} from 'mobx';
import {observer, Provider} from 'mobx-react';
import throttle from 'lodash.throttle';

@observer
class Synth extends Component {
  @observable store = {
    activePreset: Presets[0],
    activeKey: '',
    test: '',
    globalKeyPressed: false,
    globalDisplayInputPressed: false,
    dragProps: {
      name: '',
      osc: 0,
      dragYStart: 0,
      min: 0,
      max: 0,
      currentValue: 0,
      tempDragYStart: 0
    },
    maxDragDistance: 200,
    result: 0,
    showActiveKey(key, active) {
      this.activeKey = key;
      if (active !== 'over') this.globalKeyPressed = active;
    },
    handleMouseDown(dragOptions) {
      this.activeKey = ' ';
      this.globalDisplayInputPressed = true;
      this.dragProps = Object.assign(this.dragProps, dragOptions);
      this.dragProps.tempDragYStart = dragOptions.dragYStart;
    },
    handleMouseUp() {
      this.store.activeKey = '';
      this.store.globalDisplayInputPressed = false;
      this.store.dragProps.dragYStart = 0;
      console.log('10. Mouse up', this.store);
    },
    handleMouseMove(e) {
      this.store.calcPagePos(e.pageY);
    },
    calcPagePos(currentY) {
      if (this.globalDisplayInputPressed) {
        const dragYStart = this.dragProps.dragYStart;
        const dragMaxUpY = dragYStart - this.maxDragDistance;
        const dragMaxDownY = dragYStart + this.maxDragDistance;
        const minVal = this.dragProps.min;
        const maxVal = this.dragProps.max;

        if (currentY >= dragMaxUpY && currentY <= dragMaxDownY) {
            this.dragProps.tempDragYStart = currentY;

          const newVal = (maxVal - minVal) / this.maxDragDistance * (dragYStart - currentY);

          if (newVal >= minVal
              && newVal <= maxVal
              && Math.round(newVal) !== this.dragProps.currentValue
            ) {
              const value = Math.round(newVal);
              this.activePreset.config[`osc${this.dragProps.osc}`][this.dragProps.name] = Math.round(newVal);
          }
        }
      }
    }
  };

  constructor(props) {
    super(props);

    this.store.calcPagePos = throttle(this.store.calcPagePos, 30);
  }


  render() {
    return (
      <Provider store={this.store}>
        <div
          className="App"
          onMouseUp={this.store.handleMouseUp.bind(this)}
          onMouseMove={this.store.handleMouseMove.bind(this)}
        >
          <div className="Synth">
            <h2 className="active_key">{this.store.activeKey}</h2>
            <MainPanel />
            <BottomPanel />
          </div>
        </div>
      </Provider>
    );
  }
}

export default Synth;
