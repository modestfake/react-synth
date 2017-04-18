import React, { Component } from 'react';
import Oscillator from './blocks/Oscillator';
import Envelope from './blocks/Envelope';
import FilterOsc from './blocks/FilterOsc';
import FilterMain from './blocks/FilterMain';
import Screen from './blocks/Screen';
import Mixer from './blocks/Mixer';

import {observer, inject} from 'mobx-react';

@inject('store')
class MainPanel extends Component {
  constructor(props) {
    super(props);

    this.preset = props.store.activePreset.config;
  }

  render() {
    return (
      <div className="main_panel">
        <div className="row top">
          <Oscillator osc="1" preset={this.preset.osc1} />
          <Envelope type="amp" />
          <Oscillator osc="2" preset={this.preset.osc2} />
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
