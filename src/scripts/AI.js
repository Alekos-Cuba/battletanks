class AIPlayer {
  constructor() {
    this.units = new Map();
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

  play() {}
}

const AI = new AIPlayer();
export default AI;
