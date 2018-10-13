import React from 'react';

const Counter = (props) => {
  const { id, score } = props;

  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button>
      <span className="counter-score">{ score }</span>
      <button className="counter-action increment" onClick={() => props.incrementScore(id)}> + </button>
    </div>
  );
}

export default Counter;
