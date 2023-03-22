const Gameboard = () => {
  const shipyard = [];
  let afterPlacementShipyard = [];
  const _createBoard = () => {
    const board = [];
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        board[i][j] = 0;
      }
    }
    return board;
  };
  const board = _createBoard();

  const placeShip = (ship, coordinate, direction) => {
    if (direction) {
      for (let i = 0; i < ship.shipLength; i++) {
        board[coordinate[0] + i][coordinate[1]] = ship;
      }
    } else {
      for (let i = 0; i < ship.shipLength; i++) {
        board[coordinate[0]][coordinate[1] + i] = ship;
      }
    }
  };

  const receiveAttack = (coordinate) => {
    // If the passed coordinate lands on a ship
    if (typeof board[coordinate[0]][coordinate[1]] === "object") {
      board[coordinate[0]][coordinate[1]].hit();
      board[coordinate[0]][coordinate[1]] = 1;
    } else {
      board[coordinate[0]][coordinate[1]] = 2;
      return coordinate;
    }
  };

  const allShipsSunk = () => {
    // Return early from loop with false if any ship is not sunk
    for (let i = 0; i < afterPlacementShipyard.length; i++) {
      if (!afterPlacementShipyard[i].isSunk()) {
        return false;
      }
    }
    // Otherwise reach the return true statement
    return true;
  };
  return {
    board,
    shipyard,
    afterPlacementShipyard,
    placeShip,
    receiveAttack,
    allShipsSunk,
  };
};

export { Gameboard };
