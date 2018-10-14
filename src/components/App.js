import React, { Component } from 'react';

import Header from './Header';
import Player from './Player';

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1,
        score: 0
      },
      {
        name: "Treasure",
        id: 2,
        score: 0
      },
      {
        name: "Ashley",
        id: 3,
        score: 0
      },
      {
        name: "James",
        id: 4,
        score: 0
      }
    ]
  };

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => {
      const updatedPlayers = [...prevState.players];
      const updatedPlayer = {...updatedPlayers[index]};
      updatedPlayer.score += delta;
      updatedPlayers[index] = updatedPlayer;

      return {
        players: updatedPlayers
      };
    });
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  render() {
    const { players } = this.state;

    return (
      <div className="scoreboard">
        <Header
          title="Scoreboard"
          players={players}
        />

        {/* Players list */}
        {
          players.map((player, index) =>
            <Player
              name={player.name}
              id={player.id}
              key={player.id.toString()}
              score={player.score}
              index={index}
              removePlayer={this.handleRemovePlayer}
              changeScore={this.handleScoreChange}
            />
          )
        }
      </div>
    );
  }
}

export default App;
