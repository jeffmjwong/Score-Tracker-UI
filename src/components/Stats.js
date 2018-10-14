import React from 'react';

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

export default Stats;
