import Player from "./Player";

class AIPlayer extends Player {
  constructor() {
    super();
    this.shotsFired = new Set();
    if (AIPlayer.instance === null) {
      AIPlayer.instance = this;
    }
    return AIPlayer.instance;
  }

  resetShots() {
    this.shotsFired = new Set();
    this.shots = new Map();
  }

  //must improve this method (maybe using memoization)
  requestFireCoordinates(boardSizeX, boardSizeY) {
    let fireCoords = `${parseInt(
      Math.random().toFixed(1) * (boardSizeY - 1)
    )},${parseInt(Math.random().toFixed(1) * (boardSizeX - 1))}`;
    if (!this.shotsFired.has(fireCoords)) {
      this.shotsFired.add(fireCoords);
      return fireCoords.split(",");
    } else {
      return this.requestFireCoordinates(boardSizeX, boardSizeY);
    }
  }
}

const AI = new AIPlayer();
export default AI;
