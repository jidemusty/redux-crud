import React from "react";
import PropTypes from "prop-types";

const GamesList = ({ games }) => {
  const emptyGames = <p>No Games</p>;
  const gamesList = <p>Games List</p>;

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
