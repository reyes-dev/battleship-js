const Player = (num) => {
  const attack = (board, coordinate) => {
    board.receiveAttack(coordinate);
  };
  return { num, attack };
};

export { Player };
