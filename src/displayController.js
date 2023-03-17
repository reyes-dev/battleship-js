const displayController = (() => {
  const playerBoard = document.querySelector(".player");
  const computerBoard = document.querySelector(".computer");
  const _revealSquare = (board, coord1, coord2, square) => {
    square.disabled = true;
    if (board[coord1][coord2] === 0) {
      square.innerHTML = "v";
      square.style.color = "#DBF4A7";
    } else if (typeof board[coord1][coord2] === "object") {
      square.innerHTML = "#";
      square.style.color = "red";
    }
  };
  const renderPlayerBoard = (board) => {
    playerBoard.innerHTML = "";
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        let square = document.createElement("button");
        square.disabled = true;
        if (board[i][j] === 1) {
          square.innerHTML = "#";
          square.style.color = "red";
        } else if (board[i][j] === 2) {
          square.innerHTML = "v";
          square.style.color = "#DBF4A7";
        } else if (typeof board[i][j] === "object") {
          square.innerHTML = "#";
        } else {
          square.innerHTML = "~";
        }
        playerBoard.appendChild(square);
      }
    }
  };
  const renderComputerBoard = (board, player) => {
    for (let i = 0; i < board.board.length; i++) {
      for (let j = 0; j < board.board[i].length; j++) {
        let square = document.createElement("button");
        if (board.board[i][j] === 1) {
          square.innerHTML = "x";
          square.disabled = true;
        } else if (board.board[i][j] === 2) {
          square.innerHTML = "v";
          square.disabled = true;
        } else {
          square.innerHTML = "~";
        }
        square.addEventListener("click", function () {
          _revealSquare(board.board, i, j, square);
          player.attack(board, [i, j]);
        });
        computerBoard.appendChild(square);
      }
    }
  };
  return { renderPlayerBoard, renderComputerBoard };
})();

export { displayController };
