import { Gameboard } from "../src/gameboardFactory";
import { Ship } from "../src/shipFactory";
import { Computer } from "../src/computerFactory";

beforeEach(() => {
  jest.spyOn(global.Math, "random").mockReturnValue(0);
});

afterEach(() => {
  jest.spyOn(global.Math, "random").mockRestore();
});

test("should attack the enemy board", () => {
  const enemyGameboard = Gameboard();
  const destroyer = Ship(1);
  enemyGameboard.placeShip(destroyer, [0, 0]);
  const computer = Computer();
  computer.randomAttack(enemyGameboard);
  expect(destroyer.isSunk()).toBe(true);
});
