class AIPlayer {
  constructor() {
    this.units = new Map();
    this.shots = new Map();
    this.shotsFired = new Set();
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
    if (!this.shotsFired.has(fireCoords)) {
      this.shotsFired.add(fireCoords);
      return fireCoords.split(",");
    } else {
      return this.requestFireCoordinates(boardSizeX, boardSizeY);
    }
  }

  shotHitTarget(coords, targetHit) {
    console.log(`AI fired at: ${coords} hit: ${targetHit}`);
    this.shots.set(coords, targetHit);
  }

  getShotStatistics(isHit) {
    let count = 0;
    for (const value of this.shots.values()) {
      if (value === isHit) {
        count++;
      }
    }
    return count;
  }
}

const AI = new AIPlayer();
export default AI;
