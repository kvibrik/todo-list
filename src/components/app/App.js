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
    term: '',
    filter: 'all',
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
  // функция-обертка для маркировки состояний задачи
  toggleProp = (arr, id, propName) => {
    const idx = arr.findIndex(el => el.id === id);
    const oldItem = arr[idx];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };

    return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
  };
  // отметка заддачи как важной
  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProp(todoData, id, 'important'),
      };
    });
  };
  // отметка о выполнении задачи
  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProp(todoData, id, 'done'),
      };
    });
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

  filterItems = (items, filterProp) => {
    switch (filterProp) {
      case 'all':
        return items;
      case 'active':
        return items.filter(item => !item.done);
      case 'done':
        return TextMetrics.filter(item => item.done);
      default:
        return items;
    }
  };

  render() {
    const { todoData, term, filter } = this.state;

    const visibleItems = this.filterItems(
      this.searchItems(todoData, term),
      filter,
    );
    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;

    return (
      <div className="app">
        <AppHeader done={doneCount} todo={todoCount} />
        <div className="top-panel">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <StatusFilter />
        </div>
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
      </div>
    );
  }
}
