import { Gameboard } from "../src/gameboardFactory";
import { Ship } from "../src/shipFactory";
import { Player } from "../src/playerFactory";

test("should be able to attack enemy gameboard", () => {
  const enemyGameboard = Gameboard();
  const player = Player();
  const ship = Ship(1);
  enemyGameboard.placeShip(ship, [0, 0]);
  expect(enemyGameboard.allShipsSunk()).toBe(false);
  player.attack(enemyGameboard, [0, 0]);
  expect(enemyGameboard.allShipsSunk()).toBe(true);
});

test("should not be able to attack twice in a row due to turn switching", () => {
  const enemyGameboard = Gameboard();
  const player = Player();
  const destroyer = Ship(2);
  enemyGameboard.placeShip(destroyer, [0, 0]);
  player.attack(enemyGameboard, [0, 0]);
  expect(enemyGameboard.board[0][0]).toEqual(1);
  player.attack(enemyGameboard, [1, 0]);
  expect(enemyGameboard.board[1][0]).toBe(destroyer);
});
