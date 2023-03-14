import { Ship } from "../src/shipFactory";
/**
 * This test implicitly proves that the hit method is functioning properly,
 * incrementing the hits property, and that the isSunk method is functioning
 * properly, returning false when hits does not equal to the ship length (I.E. 0
 * hits on a 3 length ship), but returning true when hits is incremented 3 times
 */
test("hit method should increment hit counter", () => {
  const ship = Ship(3);
  ship.hit();
  expect(ship.isSunk()).toBe(false);
  ship.hit();
  expect(ship.isSunk()).toBe(false);
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});
