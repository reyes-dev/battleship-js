const displayController = (() => {
  const playerBoard = document.querySelector(".player");
  const computerBoard = document.querySelector(".computer");

  const renderPlayerBoard = (board) => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        let square = document.createElement("button");
        square.innerHTML = "~";
        playerBoard.appendChild(square);
      }
    }
  };
  const renderComputerBoard = (board) => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        let square = document.createElement("button");
        square.innerHTML = "~";
        computerBoard.appendChild(square);
      }
    }
  };
  return { renderPlayerBoard, renderComputerBoard };
})();

export { displayController };
