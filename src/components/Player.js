import React, { PureComponent } from 'react';

import Counter from './Counter';

class Player extends PureComponent {
  render() {
    const { id, index, name, score } = this.props;

    return (
      <div className="player">
        <span className="player-name">
          <button className="remove-player" onClick={() => this.props.removePlayer(id)}>✖</button>
          { name }
        </span>

        <Counter
          index={index}
          score={score}
          changeScore={this.props.changeScore}
        />
      </div>
    );
  }
}

export default Player;
