import React from 'react';
import PropTypes from 'prop-types';

const Stats = (props) => {
  const { players } = props;

  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players:</td>
          <td>{ players.length }</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{ players.reduce((acc, player) => acc + player.score, 0) }</td>
        </tr>
      </tbody>
    </table>
  );
};

Stats.propTypes = {
  players: PropTypes.arrayOf(PropTypes.shape({
    score: PropTypes.number
  }))
};

export default Stats;
