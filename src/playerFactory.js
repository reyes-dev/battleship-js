const Player = (turn = true) => {
  const getTurn = () => turn;
  const setTurn = () => (turn ? (turn = false) : (turn = true));
  const attack = (board, coordinate) => {
    board.receiveAttack(coordinate);
  };
  return { attack, getTurn, setTurn };
};

export { Player };
