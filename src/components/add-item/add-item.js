import React, { Component } from 'react';
import './add-item.scss';

export default class AddItem extends Component {
  state = {
    label: '',
  };

  onLabelChange = e => {
    this.setState({ label: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.label) {
      this.props.onItemAdd(this.state.label);
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
}
