import React, { Component } from 'react';
// Components
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import StatusFilter from '../status-filter';
import TodoList from '../todo-list';

import './App.scss';

export default class App extends Component {
  maxId = 10; //чтобы не придумывать id для list-item
  // функция добавления todo-item
  createTodoItem = label => {
    return {
      label,
      important: false,
      done: false,
      id: this.maxId++,
    };
  };

  state = {
    todoData: [
      this.createTodoItem('Create Todo-list'),
      this.createTodoItem('Send todo-list to ApriCode'),
      this.createTodoItem('Remake todo-list with MobX'),
    ],
  };
  // функция удаления элемента из списка
  deleteItem = id => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);
      const newTodoData = [
        ...todoData.slice(0, idx),
        ...todoData.slice(idx + 1),
      ];

      return {
        todoData: newTodoData,
      };
    });
  };

  toggleProp = (arr, id, propName) => {
    const idx = arr.findIndex(el => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProp(todoData, id, 'important'),
      };
    });
  };

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProp(todoData, id, 'done'),
      };
    });
  };

  render() {
    const todoItems = this.state.todoData;

    return (
      <div className="app">
        <AppHeader />
        <div className="top-panel">
          <SearchPanel />
          <StatusFilter />
        </div>
        <TodoList
          todos={todoItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
      </div>
    );
  }
}
