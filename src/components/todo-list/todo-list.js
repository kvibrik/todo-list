// Компонент списка задач
import React from 'react';
import { observer } from 'mobx-react';
import './todo-list.scss';

import TodoListItem from '../todo-list-item';

const TodoList = observer(({ store }) => {
  // формируем разметку из каждой задачи в массиве todos
  const { todos } = store;
  const elements = todos.map(todo => {
    const { id } = todo;

    const onDeleted = id => {
      store.deleteTodoItem(id);
    };

    const onToggleImportant = id => {
      store.toggleImportant(id);
    };
    const onToggleDone = id => {
      store.toggleDone(id);
    };

    return (
      <li className="todo-list__group" key={id}>
        <TodoListItem
          todo={todo}
          onDeleted={() => onDeleted(id)}
          onToggleImportant={() => onToggleImportant(id)}
          onToggleDone={() => onToggleDone(id)}
        />
      </li>
    );
  });
  return <ul className="todo-list">{elements}</ul>;
});

export default TodoList;
