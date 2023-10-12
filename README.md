# battleship-js
Try it live here: [Battleship-JS](https://reyes-dev.github.io/battleship-js/)

A Battleship game written in vanilla JavaScript. I applied TDD while building out the gameplay functions to gain more experience with testing in Javascript. I began with simple factory functions to represent the ship and gameboard and wrote tests for methods that interacted with the board, then built out the methods one by one. I also had to work with event listeners like `mouseover` in order to change the board tile colors in realtime for a more dynamic gameplay experience.

## Technologies
- HTML/CSS
- Javascript
- Jest
- Webpack

## How to Play Locally
To play locally on your computer:
1. Clone the repo
2. Run `cd battleship-js` to enter the repo directory
3. Run `npm install`
4. Run `npm start`

## Rules
First place your 5 ships in this order:
- Destroyer - Size: 2
- Submarine - Size: 3
- Cruiser - Size: 3
- Battleship - Size: 4
- Carrier - Size: 5

You can place them horizontally or vertically by clicking the rotate button above your board. Once they are placed, the game will begin, with the CPU placing its ships randomly. Simply click on the other board and try to sink all enemy ships!
