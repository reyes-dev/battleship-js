import { Gameboard } from "../src/gameboardFactory";
import { Ship } from "../src/shipFactory";

test("should place object at correct coordinate", () => {
  const gameboard = Gameboard();
  const ship = Ship(1);
  gameboard.placeShip(ship, [0, 0]);
  expect(gameboard.board[0][0]).toBe(ship);
});

test("should place object with length of 2 at correct coordinates", () => {
  const gameboard = Gameboard();
  const ship = Ship(2);
  gameboard.placeShip(ship, [0, 0]);
  expect(gameboard.board[0][0]).toBe(ship);
  expect(gameboard.board[1][0]).toBe(ship);
});

test("should remove ship from correct coordinate", () => {
  const gameboard = Gameboard();
  const ship = Ship(1);
  gameboard.placeShip(ship, [0, 0]);
  gameboard.receiveAttack([0, 0]);
  expect(gameboard.board[0][0]).toEqual(1);
});

test("should return message of failure to sink ship", () => {
  const gameboard = Gameboard();
  const ship = Ship(1);
  gameboard.placeShip(ship, [0, 0]);
  expect(gameboard.receiveAttack([1, 0])).toEqual([1, 0]);
});

test("should call hit on correct ship", () => {
  const gameboard = Gameboard();
  const ship = Ship(1);
  gameboard.placeShip(ship, [0, 0]);
  expect(ship.isSunk()).toBe(false);
  gameboard.receiveAttack([0, 0]);
  expect(ship.isSunk()).toBe(true);
});

test("should report whether all ships on the board are sunk", () => {
  const gameboard = Gameboard();
  const ship = Ship(1);
  const destroyer = Ship(2);
  gameboard.placeShip(ship, [0, 0]);
  gameboard.placeShip(destroyer, [0, 3]);
  expect(gameboard.allShipsSunk()).toBe(false);
  gameboard.receiveAttack([0, 0]);
  gameboard.receiveAttack([0, 3]);
  gameboard.receiveAttack([1, 3]);
  expect(gameboard.allShipsSunk()).toBe(true);
});

test("should return false if not all ships are sunk", () => {
  const gameboard = Gameboard();
  const ship = Ship(1);
  const destroyer = Ship(2);
  gameboard.placeShip(ship, [0, 0]);
  gameboard.placeShip(destroyer, [0, 3]);
  expect(gameboard.allShipsSunk()).toBe(false);
  gameboard.receiveAttack([0, 0]);
  gameboard.receiveAttack([0, 3]);
  expect(gameboard.allShipsSunk()).toBe(false);
});
