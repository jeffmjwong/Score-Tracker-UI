import React, { Component } from 'react';

class AddPlayerForm extends Component {
  playerInput = React.createRef();

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.addPlayer(this.playerInput.current.value);
    evt.currentTarget.reset();
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit }>
        <input
          type="text"
          ref={this.playerInput}
          placeholder="Enter a player's name"
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
