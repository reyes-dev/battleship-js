import { Game } from ".";

const displayController = (() => {
  let playerBoard = document.querySelector(".player");
  let computerBoard = document.querySelector(".computer");
  let directionBtn = document.querySelector(".direction");
  const boardsContainer = document.querySelector(".boards");
  let direction = false;
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
  // const _placeShipMouseoverEffect = (boardOfBtns, shipLength) => {
  //   square.addEventListener("mouseover", () => {
  //     square.style.backgroundColor = "green";
  //   });
  //   square.addEventListener("mouseout", () => {
  //     square.style.backgroundColor = "#003049";
  //   });
  // };
  const _getCoordinate = (gameboard, square, coordinate) => {
    square.addEventListener("click", () => {
      gameboard.placeShip(gameboard.shipyard[0], coordinate, direction);
      gameboard.afterPlacementShipyard.push(gameboard.shipyard.shift());
      renderPlayerBoardPlacementPhase(gameboard);
    });
  };
  const renderPlayerBoardPlacementPhase = (gameboard) => {
    playerBoard.innerHTML = "";
    for (let i = 0; i < gameboard.board.length; i++) {
      for (let j = 0; j < gameboard.board[i].length; j++) {
        let square = document.createElement("button");
        if (typeof gameboard.board[i][j] === "object") {
          square.innerHTML = "#";
        } else {
          square.innerHTML = "~";
        }
        playerBoard.appendChild(square);
        _getCoordinate(gameboard, square, [i, j]);
      }
    }
  };
  const renderPlayerBoard = (board) => {
    playerBoard.innerHTML = "";
    for (let i = 0; i < board.board.length; i++) {
      for (let j = 0; j < board.board[i].length; j++) {
        let square = document.createElement("button");
        square.disabled = true;
        if (board.board[i][j] === 1) {
          square.innerHTML = "#";
          square.style.color = "red";
        } else if (board.board[i][j] === 2) {
          square.innerHTML = "v";
          square.style.color = "#DBF4A7";
        } else if (typeof board.board[i][j] === "object") {
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
        } else if (typeof board.board[i][j] === "object") {
          square.innerHTML = "#";
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
  const renderWinner = (winner) => {
    const congratsMsg = document.createElement("h2");
    const replayBtn = document.createElement("button");
    congratsMsg.innerHTML = `${winner} won! Congratulations!`;
    replayBtn.innerHTML = "Play Again";
    boardsContainer.innerHTML = "";
    replayBtn.classList.add("replay-btn");
    replayBtn.addEventListener("click", () => {
      const boardsContainer = document.querySelector(".boards");
      const playerDiv = document.createElement("div");
      playerDiv.classList.add("player");
      const computerDiv = document.createElement("div");
      computerDiv.classList.add("computer");
      boardsContainer.appendChild(playerDiv);
      boardsContainer.appendChild(computerDiv);
      playerBoard = document.querySelector(".player");
      computerBoard = document.querySelector(".computer");
      boardsContainer.removeChild(congratsMsg);
      boardsContainer.removeChild(replayBtn);
      Game().play();
    });
    boardsContainer.appendChild(congratsMsg);
    boardsContainer.appendChild(replayBtn);
  };
  const setupDirectionBtn = () => {
    directionBtn.addEventListener("click", () => {
      if (direction === false) {
        direction = true;
      } else if (direction) {
        direction = false;
      }
    });
  };
  return {
    renderPlayerBoardPlacementPhase,
    renderPlayerBoard,
    renderComputerBoard,
    renderWinner,
    setupDirectionBtn,
  };
})();

export { displayController };
