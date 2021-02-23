import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './add-item.scss';

const AddTodo = observer(
  class AddTodo extends Component {
    state = {
      label: '',
    };
    // делаем инпут управляемым
    onLabelChange = e => {
      this.setState({ label: e.target.value });
    };
    // отправляем данные из стейта в родителю
    onSubmit = e => {
      e.preventDefault();
      if (this.state.label) {
        this.props.store.createTodoItem(this.state.label);
        this.setState({ label: '' });
      }

      return;
    };

    render() {
      const { label } = this.state;

      return (
        <form className="add-item__form" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="add-item__label"
            placeholder="What needs to be done?"
            value={label}
            onChange={this.onLabelChange}
          />
          <button className="button button_non-active" type="submit">
            Add Item
          </button>
        </form>
      );
    }
  },
);

export default AddTodo;
