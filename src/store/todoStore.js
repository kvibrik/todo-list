import { action, computed, makeObservable, observable } from 'mobx';
import { v4 as uuid4 } from 'uuid';

class TodoStore {
  todos = [
    {
      label: 'Make Todo App',
      important: false,
      done: false,
      id: uuid4(),
    },
    {
      label: 'Send todo-list to ApriCode',
      important: false,
      done: false,
      id: uuid4(),
    },
    {
      label: 'Remake todo-list with MobX',
      important: false,
      done: false,
      id: uuid4(),
    },
  ];
  term = '';
  filter = 'all';
  // вспомогательная функция для сериализации задач по поисковой строке
  searchItems = todos => {
    if (!this.term.length) return todos;

    return this.todos.filter(todo => {
      return todo.label.toLowerCase().indexOf(this.term.toLowerCase()) > -1;
    });
  };
  // вспомогательная функция для фильтрации задач
  filterItems = todos => {
    switch (this.filter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter(item => !item.done);
      case 'done':
        return todos.filter(item => item.done);
      default:
        return todos;
    }
  };

  constructor() {
    makeObservable(this, {
      todos: observable,
      term: observable,
      filter: observable,
      todoCount: computed,
      doneCount: computed,
      todosList: computed,
      createTodoItem: action,
      deleteTodoItem: action,
      toggleImportant: action,
      toggleDone: action,
      searchChange: action,
      filterChange: action,
    });
  }
  // функция добавления новой задачи
  createTodoItem(label) {
    this.todos.push({
      label,
      important: false,
      done: false,
      id: uuid4(),
    });
  }
  // функция удаления элементов
  deleteTodoItem(id) {
    const idx = this.todos.findIndex(el => el.id === id);
    this.todos = [...this.todos.slice(0, idx), ...this.todos.slice(idx + 1)];
  }
  // льметка задачи как важной
  toggleImportant(id) {
    const idx = this.todos.findIndex(el => el.id === id);
    this.todos[idx].important = !this.todos[idx].important;
  }
  // отметка задачи как выполненной
  toggleDone(id) {
    const idx = this.todos.findIndex(el => el.id === id);
    this.todos[idx].done = !this.todos[idx].done;
  }
  // изменение поисковой строки в сторе
  searchChange(text) {
    this.term = text;
  }
  // изменение фильтра
  filterChange(filter) {
    this.filter = filter;
  }
  // расчет невыполненных задач
  get todoCount() {
    return this.todos.filter(todo => !todo.done).length;
  }
  // расчет выполненных задач
  get doneCount() {
    return this.todos.filter(todo => todo.done).length;
  }
  // получение списка всех задач
  get todosList() {
    return this.filterItems(this.searchItems(this.todos));
  }
}

const todoStore = new TodoStore();

export default todoStore;
