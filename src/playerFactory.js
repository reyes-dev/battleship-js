const Player = (turn = true) => {
  const attack = (board, coordinate) => {
    if (turn) {
      board.receiveAttack(coordinate);
      turn = false;
    }
  };
  return { attack };
};

export { Player };
