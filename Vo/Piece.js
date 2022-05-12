//initialise the Piece class

class Piece {
  constructor(boardDimension = 5) {
    this.currentPosition = [0, 0]; //starting position
    this.direction = 0; //abstract direction
    this.directionsOfPiece = ["N", "E", "S", "W"];
    this.boardDimension = boardDimension; //board size
  }

  //handle commands for moving the piece
  move(commands) {
    const individualCommands = commands.split("");
    this.interpretCommands(individualCommands);
  }

  // manipulate direction of piece based on commands
  interpretCommands(commands) {
    commands.forEach((instruction) => {
      if (instruction === "L") this.direction--;
      else if (instruction === "R") this.direction++;
      else if (instruction === "M") this.movePiece();
    });
  }

  //get current direction of piece
  getDirection() {
    return this.directionsOfPiece[
      this.direction % this.directionsOfPiece.length
    ];
  }

  //move piece based on direction
  movePiece() {
    const moveDirection = this.getDirection();
    if (moveDirection === "N") this.moveUp();
    else if (moveDirection === "S") this.moveDown();
    else if (moveDirection === "E") this.moveRight();
    else if (moveDirection === "W") this.moveLeft();
  }

  moveUp() {
    let [x, y] = this.currentPosition;
    //doesnt allow piece to fall off board
    if (y === this.boardDimension - 1) y = this.boardDimension - 1;
    else y = ++y;
    this.currentPosition = [x, y, this.getDirection()];
  }

  moveDown() {
    let [x, y] = this.currentPosition;
    //doesnt allow piece to fall off board
    if (y === 0) y = this.boardDimension - 1;
    else y = --y;
    this.currentPosition = [x, y, this.getDirection()];
  }

  moveLeft() {
    let [x, y] = this.currentPosition;
    //doesnt allow piece to fall off board
    if (x === 0) x = this.boardDimension - 1;
    else x = --x;
    this.currentPosition = [x, y, this.getDirection()];
  }

  moveRight() {
    let [x, y] = this.currentPosition;
    //doesnt allow piece to fall off board
    if (x === this.boardDimension - 1) x = this.boardDimension - 1;
    else x = ++x;
    this.currentPosition = [x, y, this.getDirection()];
    console.log(this.currentPosition);
  }
}

module.exports = {
  Piece
};
