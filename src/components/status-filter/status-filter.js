import React, { Component } from 'react';
import './status-filter.scss';

export default class StatusFilter extends Component {
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];

  render() {
    const buttons = this.buttons.map(({ name, label }) => {
      return (
        <button className="button" type="button" key={name}>
          {label}
        </button>
      );
    });

    return <div className="buttons-group">{buttons}</div>;
  }
}
