import React from 'react';

import Stats from './Stats';

const Header = (props) => {
  const { totalPlayers } = props;

  return (
    <header>
      <Stats totalPlayers={totalPlayers} />
      <h1>{ props.title }</h1>
      <span className="stats">Players: {totalPlayers}</span>
    </header>
  );
}

export default Header;
