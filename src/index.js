import "./style.css";
import { Gameboard } from "./gameboardFactory";
import { Ship } from "./shipFactory";
import { Computer } from "./computerFactory";
import { Player } from "./playerFactory";
import { displayController } from "./displayController";

const Game = () => {
  const _setupShips = (board) => {
    const destroyer = Ship(2);
    const submarine = Ship(3);
    const cruiser = Ship(3);
    const battleship = Ship(4);
    const carrier = Ship(5);

    board.placeShip(destroyer, [0, 0]);
    board.placeShip(submarine, [0, 2]);
    board.placeShip(cruiser, [0, 4]);
    board.placeShip(battleship, [0, 6]);
    board.placeShip(carrier, [0, 8]);
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
  async function play() {
    const player = Player();
    const computer = Computer();
    const playerBoard = Gameboard();
    const computerBoard = Gameboard();
    _setupShips(playerBoard);
    _setupShips(computerBoard);
    displayController.renderPlayerBoard(playerBoard.board);
    displayController.renderComputerBoard(computerBoard, player);

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
