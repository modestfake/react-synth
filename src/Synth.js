import React, { Component } from 'react';
import MainPanel from './MainPanel';
import BottomPanel from './BottomPanel';
import './scss/App.scss';
import Presets from './Presets';

import {observable} from 'mobx';
import {observer, Provider} from 'mobx-react';
import throttle from 'lodash.throttle';

const store = observable({
  activePreset: Presets[0],
  activeKey: '',
  globalKeyPressed: false,
  globalDisplayInputPressed: false,
  dragProps: {
    dragYStart: 0,
    min: 0,
    max: 0,
    currentValue: 0,
    tempDragYStart: 0
  },
  maxDragDistance: 200,
  result: 0,
  showActiveKey(key) {
    this.activeKey = key;
  },
  handleMouseDown(dragOptions) {
    this.globalDisplayInputPressed = true;
    this.dragProps = Object.assign(this.dragProps, dragOptions);
    this.dragProps.tempDragYStart = dragOptions.dragYStart;
  },
  handleMouseUp() {
    this.globalDisplayInputPressed = false;
    this.dragProps.dragYStart = 0;
  }
});

@observer
class Synth extends Component {
  constructor(props) {
    super(props);

    this.calcPagePos = throttle(this.calcPagePos, 50);
  }

  handleMouseMove(e) {
    this.calcPagePos(e.pageY);
  }

  calcPagePos(currentY) {
    if (store.globalDisplayInputPressed) {
      const dragYStart = store.dragProps.dragYStart;
      const tempDragYStart = store.dragProps.tempDragYStart;
      const dragMaxUpY = dragYStart - store.maxDragDistance;
      const dragMaxDownY = dragYStart + store.maxDragDistance;
      const minVal = store.dragProps.min;
      const maxVal = store.dragProps.max;

      if (currentY >= dragMaxUpY && currentY <= dragMaxDownY) {
          store.dragProps.tempDragYStart = currentY;

        const newVal = (maxVal - minVal) / store.maxDragDistance * (dragYStart - currentY);

        if (newVal >= minVal
            && newVal <= maxVal
            && Math.round(newVal) !== store.dragProps.currentValue) {
          console.log(Math.round(newVal));
        }
      }
    }
  }


  render() {
    return (
      <Provider store={store}>
        <div
          className="App"
          onMouseUp={() => store.handleMouseUp()}
          onMouseMove={this.handleMouseMove.bind(this)}
        >
          <div className="Synth">
            <h2 className="active_key">{store.activeKey}</h2>
            <MainPanel />
            <BottomPanel />
          </div>
        </div>
      </Provider>
    );
  }
}

export default Synth;
