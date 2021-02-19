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

  render() {
    const todoItems = this.state.todoData;

    return (
      <div className="app">
        <AppHeader />
        <div className="top-panel">
          <SearchPanel />
          <StatusFilter />
        </div>
        <TodoList todos={todoItems} />
      </div>
    );
  }
}
