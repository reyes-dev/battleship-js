import "./style.css";
import { Gameboard } from "./gameboardFactory";
import { Ship } from "./shipFactory";
import { Computer } from "./computerFactory";
import { Player } from "./playerFactory";
import { displayController } from "./displayController";

const Game = () => {
  const _setupShips = () => {
    const destroyer = Ship(2);
    const submarine = Ship(3);
    const cruiser = Ship(3);
    const battleship = Ship(4);
    const carrier = Ship(5);

    return [destroyer, submarine, cruiser, battleship, carrier];
  };
  const _runCredits = (player, computer) => {
    if (player.allShipsSunk()) {
      displayController.renderWinner("Computer");
    } else if (computer.allShipsSunk()) {
      displayController.renderWinner("Human");
    }
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
  function waitForShipPlacement(gameboardButtons) {
    const promises = [];

    for (let i = 0; i < gameboardButtons.length; i++) {
      const promise = new Promise((resolve) => {
        gameboardButtons[i].addEventListener("click", () => {
          resolve();
        });
      });
      promises.push(promise);
    }

    return Promise.any(promises);
  }
  async function play() {
    const player = Player();
    const computer = Computer();
    const playerBoard = Gameboard();
    const computerBoard = Gameboard();
    const allShips = _setupShips(playerBoard);
    const allCompShips = _setupShips(computerBoard);
    // displayController.renderPlayerBoard(playerBoard);
    // displayController.renderComputerBoard(computerBoard, player);
    while (!playerBoard.allShipsPlaced(allShips)) {
      displayController.renderPlayerBoardPlacementPhase(playerBoard, allShips);
      await waitForShipPlacement(document.querySelector(".player").childNodes);
    }
    while (!playerBoard.allShipsSunk() && !computerBoard.allShipsSunk()) {
      if (player.getTurn()) {
        await waitForPlayerInput(
          document.querySelector(".computer").childNodes
        );
        player.setTurn();
      } else {
        computer.randomAttack(playerBoard);
        displayController.renderPlayerBoard(playerBoard.board);
        player.setTurn();
      }
    }

    _runCredits(playerBoard, computerBoard);
  }
  return { play };
};

const newGame = Game();
newGame.play();

export { Game };
