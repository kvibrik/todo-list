import React, { Component } from 'react';
// Components
import AppHeader from '../app-header';

import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader />
      </div>
    );
  }
}
