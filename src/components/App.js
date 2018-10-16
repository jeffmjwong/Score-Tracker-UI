import React, { Component } from 'react';

import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: "Guil",
        id: 1,
        score: 0,
        isHighestScore: false
      },
      {
        name: "Treasure",
        id: 2,
        score: 0,
        isHighestScore: false
      },
      {
        name: "Ashley",
        id: 3,
        score: 0,
        isHighestScore: false
      },
      {
        name: "James",
        id: 4,
        score: 0,
        isHighestScore: false
      }
    ]
  };

  checkHighScore = () => {
    const { players } = this.state;

    const highestScore = players.reduce((total, player) => {
      return player.score > total ? player.score : total;
    }, 0);

    const updatedPlayers = players.map((player) => {
      const updatedPlayer = {...player};
      if (player.score >= highestScore) {
        updatedPlayer.isHighestScore = true;
      } else {
        updatedPlayer.isHighestScore = false;
      }
      return updatedPlayer;
    });

    this.setState({ players: updatedPlayers });
  }

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => {
      const updatedPlayers = [...prevState.players];
      const updatedPlayer = {...updatedPlayers[index]};
      updatedPlayer.score += delta;
      updatedPlayers[index] = updatedPlayer;

      return {
        players: updatedPlayers
      };
    }, () => this.checkHighScore());
  }

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    }, () => this.checkHighScore());
  }

  handleAddPlayer = (name) => {
    const newPlayer = { name, id: new Date().getTime(), score: 0 };

    this.setState((prevState) => ({
      players: [...prevState.players, newPlayer]
    }));
  }

  render() {
    const { players } = this.state;

    return (
      <div className="scoreboard">
        <Header players={players} />

        {/* Players list */}
        {
          players.map((player, index) =>
            <Player
              name={player.name}
              id={player.id}
              key={player.id.toString()}
              score={player.score}
              index={index}
              isHighestScore={player.isHighestScore}
              removePlayer={this.handleRemovePlayer}
              changeScore={this.handleScoreChange}
            />
          )
        }

        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
