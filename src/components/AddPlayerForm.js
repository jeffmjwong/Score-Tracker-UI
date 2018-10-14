import React, { Component } from 'react';

class AddPlayerForm extends Component {
  state = {
    value: ''
  };

  handleSubmit = (evt) => {
    evt.preventDefault();

    const { value } = this.state;
    this.props.addPlayer(value);

    this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          type="text"
          placeholder="Enter a player's name"
          value={value}
          onChange={(evt) => this.setState({ value: evt.target.value })}
        />

        <input
          type="submit"
          value="Add Player"
        />
      </form>
    );
  }
}

export default AddPlayerForm;
