const displayController = (() => {
  const playerBoard = document.querySelector(".player");
  const computerBoard = document.querySelector(".computer");
  const _revealSquare = (board, coord1, coord2, square) => {
    square.disabled = true;
    if (board[coord1][coord2] === 0) {
      square.innerHTML = "v";
    } else if (typeof board[coord1][coord2] === "object") {
      square.innerHTML = "x";
    }
  };
  const renderPlayerBoard = (board) => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        let square = document.createElement("button");
        square.innerHTML = "~";
        square.disabled = true;
        playerBoard.appendChild(square);
      }
    }
  };
  const renderComputerBoard = (board) => {
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        let square = document.createElement("button");
        square.innerHTML = "~";
        square.addEventListener("click", function () {
          _revealSquare(board, i, j, square);
        });
        computerBoard.appendChild(square);
      }
    }
  };
  return { renderPlayerBoard, renderComputerBoard };
})();

export { displayController };
