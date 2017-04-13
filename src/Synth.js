import React, { Component } from 'react';
import MainPanel from './MainPanel';
import BottomPanel from './BottomPanel';
import './scss/App.scss';

import {observable} from 'mobx';
import {observer, Provider} from 'mobx-react';

const store = observable({
  activeKey: '',
  globalPressed: false,
  showActiveKey(key) {
    this.activeKey = key;
  }
});

@observer
class Synth extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
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
