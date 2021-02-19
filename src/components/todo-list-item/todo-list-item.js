// Компонент одной задачи списка дел
import React, { Component } from 'react';
import './todo-list-item.scss';

export default class TodoListItem extends Component {
  render() {
    const { label, important, done, onDeleted, onToggleImportant } = this.props;
    let classNames = 'todo-list__item';
    // выделяем стилями, если пункт выполнен
    if (done) {
      classNames += ' todo-list__item_done';
    }
    // выделяем стилями, если пункт важный
    if (important) {
      classNames += ' todo-list__item_important';
    }

    return (
      <span className={classNames}>
        <span className="todo-list__label">{label}</span>
        <button
          className="button button_non-padding button_red"
          type="button"
          onClick={onDeleted}>
          <i className="bi bi-trash" />
        </button>
        <button
          className="button button_non-padding button_green"
          type="button"
          onClick={onToggleImportant}>
          <i className="bi bi-exclamation"></i>
        </button>
      </span>
    );
  }
}
