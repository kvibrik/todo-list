import React, { Component } from 'react';
// Components
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';

import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader />
        <div className="top-panel">
          <SearchPanel />
        </div>
      </div>
    );
  }
}
