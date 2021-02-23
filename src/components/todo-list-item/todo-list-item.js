// Компонент одной задачи списка дел
import React from 'react';
import { observer } from 'mobx-react';
import './todo-list-item.scss';

const TodoListItem = observer(
  ({ todo, onDeleted, onToggleImportant, onToggleDone }) => {
    let classNames = 'todo-list__item';
    if (todo.done) {
      classNames += ' todo-list__item_done';
    }
    // выделяем стилями, если пункт важный
    if (todo.important) {
      classNames += ' todo-list__item_important';
    }

    return (
      <span className={classNames}>
        <span className="todo-list__label" onClick={onToggleDone}>
          {todo.label}
        </span>
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
  },
);

export default TodoListItem;
