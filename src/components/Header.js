import React from 'react';

import Stats from './Stats';

const Header = (props) => {
  const { players } = props;

  return (
    <header>
      <Stats players={players} />
      <h1>{ props.title }</h1>
    </header>
  );
}

export default Header;
