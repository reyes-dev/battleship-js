import "./style.css";
import { Gameboard } from "./gameboardFactory";
import { Ship } from "./shipFactory";
import { Computer } from "./computerFactory";
import { Player } from "./playerFactory";

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
  const play = () => {
    const player = Player();
    const computer = Computer();
    const playerBoard = Gameboard();
    const computerBoard = Gameboard();
    _setupShips(playerBoard);
    _setupShips(computerBoard);
  };
  return { play };
};

const newGame = Game();
newGame.play();
