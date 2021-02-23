import React, { Component } from 'react';
// Components
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import StatusFilter from '../status-filter';
import TodoList from '../todo-list';
import AddItem from '../add-item';

import todoStore from '../../store/todoStore';

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
    term: '',
    filter: 'all',
  };

  // изменение стейта поисковой строки term
  onSearchChange = term => {
    this.setState({ term });
  };
  // поиск подходящих задач под поисковый запрос
  searchItems = (items, term) => {
    if (!term.length) return items;

    return items.filter(item => {
      return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };
  // функция для фильтрации элементов
  filterItems = (items, filterProp) => {
    switch (filterProp) {
      case 'all':
        return items;
      case 'active':
        return items.filter(item => !item.done);
      case 'done':
        return items.filter(item => item.done);
      default:
        return items;
    }
  };
  // изменение стейта при смене фильтра
  onFilterChange = filter => {
    this.setState({ filter });
  };

  render() {
    const { filter } = this.state;

    return (
      <div className="app">
        <AppHeader store={todoStore} />
        <div className="top-panel">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <StatusFilter filter={filter} onFilterChange={this.onFilterChange} />
        </div>
        <TodoList store={todoStore} />
        <AddItem store={todoStore} />
      </div>
    );
  }
}
