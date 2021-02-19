// Компонент списка задач
import React from 'react';
import './todo-list.scss';

import TodoListItem from '../todo-list-item';

const TodoList = ({ todos }) => {
  const elements = todos.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li className="todo-list__item" key={id}>
        <TodoListItem {...itemProps} />
      </li>
    );
  });
  return <ul className="todo-list">{elements}</ul>;
};

export default TodoList;
