class HumanPlayer {
  constructor() {
    this.units = new Map();
    if (HumanPlayer.instance === null) {
      HumanPlayer.instance = this;
    }
    return HumanPlayer.instance;
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
}

const Player = new HumanPlayer();
export default Player;
