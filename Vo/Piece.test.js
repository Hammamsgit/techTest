const { Piece } = require("./Piece");
let piece;

beforeEach(() => {
  piece = new Piece();
});

describe("Creation of the boardgame using TDD", () => {
  test("the piece should start with neutral direction facing north", () => {
    expect(piece.direction).toEqual(0);
    expect(piece.getDirection()).toEqual("N");
  });

  test("changes direction based on command", () => {
    piece.interpretCommands(["L"]);
    expect(piece.direction).toEqual(-1);
    piece.interpretCommands(["R"]);
    expect(piece.direction).toEqual(0);
    piece.interpretCommands(["R"]);
    expect(piece.direction).toEqual(1);
    piece.interpretCommands(["L"]);
    expect(piece.direction).toEqual(0);
  });

  test("should Initially start at 0,0 of the board", () => {
    expect(piece.currentPosition).toEqual([0, 0]);
  });

  test("should be able to move one spot", () => {
    piece.move("M");
    expect(piece.currentPosition).toEqual([0, 1, "N"]);
    piece.move("R,M");
    expect(piece.currentPosition).toEqual([1, 1, "E"]);
  });

  test("Can move multiple postions correctly", () => {
    piece.move("MRMLMRM");
    expect(piece.currentPosition).toEqual([2, 2, "E"]);
  });

  test("Can move multiple postions correctly", () => {
    piece.move("RMMMLMM");
    expect(piece.currentPosition).toEqual([3, 2, "N"]);
  });

  test("Can not move past board dimension", () => {
    piece.move("MMMMMM");
    expect(piece.currentPosition).toEqual([0, 4, "N"]);
  });
});
