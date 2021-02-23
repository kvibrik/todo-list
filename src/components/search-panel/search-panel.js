// компонент поиска задач из списка по текстовому запросу
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './search-panel.scss';

const SearchPanel = observer(
  class SearchPanel extends Component {
    state = {
      term: '',
    };

    onSearchChange = e => {
      const term = e.target.value;

      this.setState({ term });
      // this.props.state.searchChange(this.state.term);
      this.props.store.searchChange(term);
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
  },
);

export default SearchPanel;
