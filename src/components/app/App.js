import React, { Component } from 'react';
// Components
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import StatusFilter from '../status-filter';
import TodoList from '../todo-list';
// import AddItem from '../add-item';
import AddTodo from '../add-item';

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
  // функция добавления новой задачи
  addItem = label => {
    const newItem = this.createTodoItem(label);

    this.setState(({ todoData }) => {
      const newData = [...todoData, newItem];

      return {
        todoData: newData,
      };
    });
  };

  render() {
    const { todoData, term, filter } = this.state;

    const visibleItems = this.filterItems(
      this.searchItems(todoData, term),
      filter,
    );

    return (
      <div className="app">
        <AppHeader store={todoStore} />
        <div className="top-panel">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <StatusFilter filter={filter} onFilterChange={this.onFilterChange} />
        </div>
        <TodoList
          todos={visibleItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />
        <AddTodo store={todoStore} onItemAdd={this.addItem} />
      </div>
    );
  }
}
