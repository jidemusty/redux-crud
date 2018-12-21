import React from "react";
import PropTypes from "prop-types";

import GameCard from './GameCard'

const GamesList = ({ games }) => {
  const emptyGames = <p>No Games</p>;
  const gamesList = (
    <div className="ui four cards">
      { games.map(game => <GameCard game={game} key={game._id} />)}
    </div>
  )

  return (
    <div>
        {games.length === 0 ? emptyGames : gamesList}
    </div>
  )
};

GamesList.propTypes = {
    games: PropTypes.array.isRequired,
  };

export default GamesList;
