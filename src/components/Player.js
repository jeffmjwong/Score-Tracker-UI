import React from 'react';

import Counter from './Counter';

const Player = (props) => {
  const { id, name, score } = props;

  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(id)}>✖</button>
        { name }
      </span>

      <Counter
        id={id}
        score={score}
        incrementScore={props.incrementScore}
      />
    </div>
  );
}

export default Player;
