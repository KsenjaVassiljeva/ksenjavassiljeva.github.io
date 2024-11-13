import React, { Component } from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
  }

  onValueChange = (e) => {
    this.setState({ value: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.value.trim()) {
      this.props.onAdd(this.state.value);
      this.setState({ value: '' });
    }
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="What are you thinking?"
          value={this.state.value}
          onChange={this.onValueChange}
        />
        <button type="submit">Add Post</button>
      </form>
    );
  }
}