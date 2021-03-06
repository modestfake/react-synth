import React, { Component } from 'react';
import Oscillator from './blocks/Oscillator';
import Envelope from './blocks/Envelope';
import FilterOsc from './blocks/FilterOsc';
import FilterMain from './blocks/FilterMain';
import Screen from './blocks/Screen';
import Mixer from './blocks/Mixer';

import {observer, inject} from 'mobx-react';

@inject('store') @observer
class MainPanel extends Component {
  render() {
    return (
      <div className="main_panel">
        <div className="row top">
          <Oscillator osc="1" preset={this.props.store.activePreset.config.osc1} />
          <Envelope type="amp" />
          <Oscillator osc="2" preset={this.props.store.activePreset.config.osc2} />
        </div>
        <div className="row middle">
          <div className="filter_group">
            <FilterOsc />
            <FilterMain />
          </div>
          <Screen />
          <Mixer />
        </div>
      </div>
    );
  }
}

export default MainPanel;
