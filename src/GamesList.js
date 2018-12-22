import React from "react";
import PropTypes from "prop-types";

import GameCard from "./GameCard";

const GamesList = ({ games, deleteGame }) => {
  const emptyGames = <p>No Games</p>;
  
  const gamesList = (
    <div className="ui four cards">
      {games.map(game => (
        <GameCard game={game} key={game._id} deleteGame={deleteGame} />
      ))}
    </div>
  );

  return <div>{games.length === 0 ? emptyGames : gamesList}</div>;
};

GamesList.propTypes = {
  games: PropTypes.array.isRequired,
  deleteGame: PropTypes.func.isRequired
};

export default GamesList;
