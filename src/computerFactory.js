const Computer = () => {
  const _randZeroToNine = () => {
    return Math.floor(Math.random() * 10);
  };
  const _generateRandomCoordinate = () => {
    return [_randZeroToNine(), _randZeroToNine()];
  };
  const _checkRandomCoordinate = (board) => {
    let randomCoordinate = _generateRandomCoordinate();
    while (
      board[randomCoordinate[0]][randomCoordinate[1]] === 1 ||
      board[randomCoordinate[0]][randomCoordinate[1]] === 2
    ) {
      randomCoordinate = _generateRandomCoordinate();
    }
    return randomCoordinate;
  };
  // Double check to make sure one ship does not override another
  const _checkRandomCoordinateForShipContact = (
    board,
    ship,
    coordinate,
    randBool
  ) => {
    for (let i = 0; i < ship.shipLength; i++) {
      if (randBool) {
        if (typeof board[coordinate[0] + i][coordinate[1]] === "object") {
          return true;
        }
      } else {
        if (typeof board[coordinate[0]][coordinate[1] + i] === "object") {
          return true;
        }
      }
    }
  };
  const _checkRandomCoordinateIfOccupied = (board, ship, randBool) => {
    let randCoordinate = _generateRandomCoordinate();
    while (
      typeof board[randCoordinate[0]][randCoordinate[1]] === "object" ||
      randCoordinate[0] + ship.shipLength > 10 ||
      randCoordinate[1] + ship.shipLength > 10 ||
      _checkRandomCoordinateForShipContact(
        board,
        ship,
        randCoordinate,
        randBool
      )
    ) {
      randCoordinate = _generateRandomCoordinate();
    }
    return randCoordinate;
  };
  const randomAttack = (board) => {
    return board.receiveAttack(_checkRandomCoordinate(board.board));
  };
  const placeShipsRandomly = (board) => {
    board.shipyard.forEach((ship) => {
      const randBool = Math.random() > 0.5 ? true : false;
      let randCoordinate = _checkRandomCoordinateIfOccupied(
        board.board,
        ship,
        randBool
      );
      board.placeShip(ship, randCoordinate, randBool);
      board.afterPlacementShipyard.push(ship);
    });
  };
  return { randomAttack, placeShipsRandomly };
};

export { Computer };
