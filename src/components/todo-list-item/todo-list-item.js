// Компонент одной задачи списка дел
import React, { Component } from 'react';
import './todo-list-item.scss';

export default class TodoListItem extends Component {
  render() {
    const { label, important, done } = this.props;
    let classNames = 'todo-list__item';
    if (done) {
      classNames += 'todo-list__item_done';
    }
    if (important) {
      classNames += 'todo-list__item_important';
    }

    return (
      <span className={classNames}>
        <span className="todo-list__label">{label}</span>
        <button className="button button_non-padding" type="button">
          <i className="bi bi-trash" />
        </button>
        <button className="button button_non-padding" type="button">
          <i class="bi bi-exclamation"></i>
        </button>
      </span>
    );
  }
}
