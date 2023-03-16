const Computer = () => {
  const _randZeroToNine = () => {
    return Math.floor(Math.random() * 10);
  };
  const _generateRandomCoordinate = () => {
    return [_randZeroToNine(), _randZeroToNine()];
  };
  const randomAttack = (board) => {
    return board.receiveAttack(_generateRandomCoordinate());
  };
  return { randomAttack };
};

export { Computer };
