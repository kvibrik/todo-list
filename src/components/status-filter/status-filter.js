// компонент для фильтрации задач: all - все, active - не выполненные, done - выполненные
import React, { Component } from 'react';
import './status-filter.scss';

export default class StatusFilter extends Component {
  buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];

  render() {
    const { filter, onFilterChange } = this.props;

    const buttons = this.buttons.map(({ name, label }) => {
      const isActive = filter === name;
      const classNames = isActive ? 'button_active' : 'button_non-active';

      return (
        <button
          className={`button ${classNames}`}
          type="button"
          key={name}
          onClick={() => onFilterChange(name)}>
          {label}
        </button>
      );
    });

    return <div className="buttons-group">{buttons}</div>;
  }
}
