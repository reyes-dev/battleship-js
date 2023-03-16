import { Gameboard } from "../src/gameboardFactory";
import { Ship } from "../src/shipFactory";
import { Player } from "../src/playerFactory";

test("should be able to attack enemy gameboard", () => {
  const enemyGameboard = Gameboard();
  const playerOne = Player(1);
  const ship = Ship(1);
  enemyGameboard.placeShip(ship, [0, 0]);
  expect(enemyGameboard.allShipsSunk()).toBe(false);
  playerOne.attack(enemyGameboard, [0, 0]);
  expect(enemyGameboard.allShipsSunk()).toBe(true);
});
