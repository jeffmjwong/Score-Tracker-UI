import React from 'react';

import Counter from './Counter';

const Player = (props) => {
  const { score } = props;

  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(props.id)}>✖</button>
        { props.name }
      </span>

      <Counter score={score} />
    </div>
  );
}

export default Player;
