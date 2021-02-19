import React, { Component } from 'react';
import './search-panel.scss';

export default class SearchPanel extends Component {
  state = {
    term: '',
  };

  onSearchChange = e => {
    const term = e.target.value;

    this.setState({ term });
  };

  render() {
    const { term } = this.state;

    return (
      <input
        type="text"
        placeholder="type to search"
        className="search-panel"
        value={term}
        onChange={this.onSearchChange}
      />
    );
  }
}