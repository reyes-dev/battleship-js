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
  const _checkRandomCoordinateIfOccupied = (board, ship) => {
    let randCoordinate = _generateRandomCoordinate();
    while (
      typeof board[randCoordinate[0]][randCoordinate[1]] === "object" ||
      randCoordinate[0] + ship.shipLength >= 10
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
      let randCoordinate = _checkRandomCoordinateIfOccupied(board.board, ship);
      console.log(randCoordinate[0] + ship.shipLength);
      board.placeShip(ship, randCoordinate);
      board.afterPlacementShipyard.push(ship);
    });
  };
  return { randomAttack, placeShipsRandomly };
};

export { Computer };
