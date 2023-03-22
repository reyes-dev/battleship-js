import "./style.css";
import { Gameboard } from "./gameboardFactory";
import { Ship } from "./shipFactory";
import { Computer } from "./computerFactory";
import { Player } from "./playerFactory";
import { displayController } from "./displayController";

const Game = () => {
  const player = Player();
  const computer = Computer();
  const playerBoard = Gameboard();
  const computerBoard = Gameboard();

  const _setupShips = (gameboard) => {
    const destroyer = Ship(2);
    const submarine = Ship(3);
    const cruiser = Ship(3);
    const battleship = Ship(4);
    const carrier = Ship(5);

    gameboard.shipyard.push(destroyer, submarine, cruiser, battleship, carrier);
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
    const playerShips = _setupShips(playerBoard);
    const computerShips = _setupShips(computerBoard);
    displayController.setupDirectionBtn(playerBoard);

    while (true) {
      if (playerBoard.shipyard.length === 0) {
        break;
      }
      displayController.renderPlayerBoardPlacementPhase(playerBoard);
      await waitForPlayerInput(document.getElementsByTagName("button"));
    }
    computer.placeShipsRandomly(computerBoard);
    displayController.renderComputerBoard(computerBoard, player);
    while (!playerBoard.allShipsSunk() && !computerBoard.allShipsSunk()) {
      if (player.getTurn()) {
        displayController.renderPlayerBoard(playerBoard);
        await waitForPlayerInput(
          document.querySelector(".computer").childNodes
        );
        player.setTurn();
      } else {
        computer.randomAttack(playerBoard);
        displayController.renderPlayerBoard(playerBoard);
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
