// Компонент списка задач
import React from 'react';
import './todo-list.scss';

import TodoListItem from '../todo-list-item';

const TodoList = ({ todos, onDeleted, onToggleImportant }) => {
  // формируем разметку из каждой задачи в массиве todos
  const elements = todos.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li className="todo-list__group" key={id}>
        <TodoListItem
          {...itemProps}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
        />
      </li>
    );
  });
  return <ul className="todo-list">{elements}</ul>;
};

export default TodoList;
