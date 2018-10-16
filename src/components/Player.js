import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';

class Player extends PureComponent {
  static propTypes = {
    changeScore: PropTypes.func,
    removePlayer: PropTypes.func,
    name: PropTypes.string.isRequired,
    score: PropTypes.number.isRequired,
    id: PropTypes.number,
    index: PropTypes.number
  }

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
