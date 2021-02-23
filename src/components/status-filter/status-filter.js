// компонент для фильтрации задач: all - все, active - не выполненные, done - выполненные
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './status-filter.scss';

const StatusFilter = observer(({ store }) => {
  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' },
  ];
  const { filter } = store;

  const elements = buttons.map(({ name, label }) => {
    const isActive = filter === name;
    const classNames = isActive ? 'button_active' : 'button_non-active';

    return (
      <button
        className={`button ${classNames}`}
        type="button"
        key={name}
        onClick={() => store.filterChange(name)}>
        {label}
      </button>
    );
  });

  return <div className="buttons-group">{elements}</div>;
});

export default StatusFilter;
