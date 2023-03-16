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
  const randomAttack = (board) => {
    return board.receiveAttack(_checkRandomCoordinate(board.board));
  };
  return { randomAttack };
};

export { Computer };
