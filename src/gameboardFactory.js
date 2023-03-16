const Gameboard = () => {
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

  const placeShip = (ship, coordinate) => {
    for (let i = 0; i < ship.shipLength; i++) {
      board[coordinate[0] + i][coordinate[1]] = ship;
    }
  };

  const receiveAttack = (coordinate) => {
    if (board[coordinate[0]][coordinate[1]] != 0) {
      board[coordinate[0]][coordinate[1]].hit();
      board[coordinate[0]][coordinate[1]] = 1;
    } else {
      return coordinate;
    }
  };

  return { board, placeShip, receiveAttack };
};

export { Gameboard };
