const Ship = (shipLength) => {
  let hits = 0;
  const hit = () => {
    hits++;
  };
  const isSunk = () => {
    return hits === shipLength;
  };

  return { hit, isSunk };
};

export { Ship };
