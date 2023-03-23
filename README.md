# battleship-js

This is my attempt at build Battleship, the classic board game. This was a JavaScript project intended mainly to practice TDD and modularization.

Try it live here: (https://reyes-dev.github.io/battleship-js/)[Battleship-JS]

# How to Play

To play locally on your computer, run:

```
npm install
npm start
```

# Rules

You will be able to place 5 ships in this order:

- Destroyer - Size: 2
- Submarine - Size: 3
- Cruiser - Size: 3
- Battleship - Size: 4
- Carrier - Size: 5

You can place them horizontally or vertically by clicking the rotate button above your board. Once they are placed, the game will begin, with the CPU placing its ships randomly. Simply click on the other board and try to sink all enemy ships!

# Reflections/Venting

This was a tough one. I got to stretch my TDD muscles a bit although I already had practice doing TDD with Ruby/RSpec this was a good refresher for JavaScript. It's more or less the same. I had to break out the whiteboard more than once when I ran into trouble with ship placement logic, an surprisingly tough problem to solve, but it felt good to do some problem solving. My only regret is that I don't have time to sink into making the CPU more intelligent, and fixing a bug that lets players place their ships over one another. I can say with confidence I could solve these issues in a few hours or less, but time is a precious resource and I've learned all I can here. Overall, this is my most complex JavaScript project yet and I feel familiar enough with JS fundamentals to move onto learning React!
