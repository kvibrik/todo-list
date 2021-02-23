import React, { Component } from 'react';
// Components
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import StatusFilter from '../status-filter';
import TodoList from '../todo-list';
import AddItem from '../add-item';
// хранилище задач
import todoStore from '../../store/todoStore';

import './App.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <AppHeader store={todoStore} />
        <div className="top-panel">
          <SearchPanel store={todoStore} />
          <StatusFilter store={todoStore} />
        </div>
        <TodoList store={todoStore} />
        <AddItem store={todoStore} />
      </div>
    );
  }
}
