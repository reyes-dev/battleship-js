import { Game } from ".";

const displayController = (() => {
  let playerBoard = document.querySelector(".player");
  let computerBoard = document.querySelector(".computer");
  let directionBtn = document.querySelector(".direction");
  const boardsContainer = document.querySelector(".boards");
  let direction = false;
  let called = true;
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
  const _shipMouseoverVertical = (buttons, gameboard) => {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("mouseover", () => {
        const indices = [];

        for (let k = 0; k < gameboard.shipyard[0].shipLength; k++) {
          indices.push(i + k * 10);
        }

        for (const index of indices) {
          buttons[index].style.backgroundColor = "green";
        }
      });
    }
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("mouseout", () => {
        const indices = [];

        for (let k = 0; k < gameboard.shipyard[0].shipLength; k++) {
          indices.push(i + k * 10);
        }

        for (const index of indices) {
          buttons[index].style.backgroundColor = "#003049";
        }
      });
    }
  };
  const _shipMouseoverHorizontal = (buttons, gameboard) => {
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("mouseover", () => {
        const indices = [];

        for (let k = 0; k < gameboard.shipyard[0].shipLength; k++) {
          indices.push(i + k);
        }

        for (const index of indices) {
          buttons[index].style.backgroundColor = "green";
        }
      });
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("mouseout", () => {
          const indices = [];

          for (let k = 0; k < gameboard.shipyard[0].shipLength; k++) {
            indices.push(i + k);
          }

          for (const index of indices) {
            buttons[index].style.backgroundColor = "#003049";
          }
        });
      }
    }
  };
  const _getCoordinate = (gameboard, square, coordinate) => {
    square.addEventListener("click", () => {
      gameboard.placeShip(gameboard.shipyard[0], coordinate, direction);
      gameboard.afterPlacementShipyard.push(gameboard.shipyard.shift());
      renderPlayerBoardPlacementPhase(gameboard);
    });
  };

  function waitForPlayerInput(board) {
    const promises = [];

    for (let i = 0; i < board.length; i++) {
      const promise = new Promise((resolve) => {
        board[i].addEventListener("click", () => {
          resolve();
        });
      });
      promises.push(promise);
    }
    return Promise.any(promises);
  }

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
    const buttons = document.querySelectorAll(".player button");
    if (direction) {
      _shipMouseoverVertical(buttons, gameboard);
    } else {
      _shipMouseoverHorizontal(buttons, gameboard);
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
  async function _setDirection(gameboard) {
    if (direction) {
      direction = false;
      renderPlayerBoardPlacementPhase(gameboard);
    } else {
      direction = true;
      renderPlayerBoardPlacementPhase(gameboard);
    }
  }
  const setupDirectionBtn = (gameboard) => {
    directionBtn.addEventListener("click", () => {
      _setDirection(gameboard);
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
