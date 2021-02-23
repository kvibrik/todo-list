import { action, computed, makeObservable, observable } from 'mobx';
import { v4 as uuid4 } from 'uuid';

class TodoStore {
  todos = [
    {
      label: '',
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

  constructor() {
    makeObservable(this, {
      todos: observable,
      todoCount: computed,
      doneCount: computed,
      createTodoItem: action,
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

  get todoCount() {
    return this.todos.filter(todo => !todo.done).length;
  }

  get doneCount() {
    return this.todos.filter(todo => todo.done).length;
  }
}

const todoStore = new TodoStore();

export default todoStore;
