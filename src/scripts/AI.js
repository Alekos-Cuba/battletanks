class AIPlayer {
  constructor() {
    this.units = new Map();
    this.shots = new Map();
    if (AIPlayer.instance === null) {
      AIPlayer.instance = this;
    }
    return AIPlayer.instance;
  }

  setUnits(units) {
    this.units = units;
  }

  destroyUnit(coords) {
    let stringCoords = coords.join(",");
    this.units.delete(stringCoords);
  }

  hasUnitAtCoordinates(coords) {
    let stringCoords = coords.join(",");
    return this.units.has(stringCoords);
  }

  //must improve this method (maybe using memoization)
  requestFireCoordinates(boardSizeX, boardSizeY) {
    let fireCoords = `${parseInt(
      Math.random().toFixed(1) * (boardSizeY - 1)
    )},${parseInt(Math.random().toFixed(1) * (boardSizeX - 1))}`;
    if (!this.shots.has(fireCoords)) {
      this.shots.set(fireCoords, true);
      return fireCoords.split(",");
    } else {
      return this.requestFireCoordinates(boardSizeX, boardSizeY);
    }
  }
}

const AI = new AIPlayer();
export default AI;
