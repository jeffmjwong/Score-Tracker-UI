import React from 'react';

import Counter from './Counter';

const Player = (props) => {
  const { id, index, name, score } = props;

  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player" onClick={() => props.removePlayer(id)}>✖</button>
        { name }
      </span>

      <Counter
        index={index}
        score={score}
        changeScore={props.changeScore}
      />
    </div>
  );
}

export default Player;
