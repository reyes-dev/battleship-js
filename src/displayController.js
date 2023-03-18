import { Game } from ".";
import { Ship } from "./shipFactory";

const displayController = (() => {
  let playerBoard = document.querySelector(".player");
  let computerBoard = document.querySelector(".computer");
  const boardsContainer = document.querySelector(".boards");
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
  const _placeShipOnBoard = (gameboard, square, coordinate, ships) => {
    square.addEventListener("click", () => {
      gameboard.placeShip(ships[0], coordinate);
      ships.shift();
      renderPlayerBoardPlacementPhase(gameboard, ships);
    });
  };
  const _holdShipOverBoard = (gameboard, square, coordinate, ships) => {
    square.addEventListener("mouseover", () => {
      _placeShipOnBoard(gameboard, square, coordinate, ships);
    });
  };
  const renderPlayerBoardPlacementPhase = (gameboard, ships) => {
    playerBoard.innerHTML = "";
    for (let i = 0; i < gameboard.board.length; i++) {
      for (let j = 0; j < gameboard.board[i].length; j++) {
        let square = document.createElement("button");
        _holdShipOverBoard(gameboard, square, [i, j], ships);
        if (typeof gameboard.board[i][j] === "object") {
          square.innerHTML = "#";
        } else {
          square.innerHTML = "~";
        }
        playerBoard.appendChild(square);
      }
    }
  };
  const renderPlayerBoard = (board) => {
    playerBoard.innerHTML = "";
    for (let i = 0; i < board.board.length; i++) {
      for (let j = 0; j < board.board[i].length; j++) {
        let square = document.createElement("button");
        square.disabled = false;
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
  return {
    renderPlayerBoardPlacementPhase,
    renderPlayerBoard,
    renderComputerBoard,
    renderWinner,
  };
})();

export { displayController };
