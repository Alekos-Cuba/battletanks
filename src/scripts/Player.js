class HumanPlayer {
  constructor() {
    this.units = new Map();
    this.shots = new Map();
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

  shotHitTarget(coords, targetHit) {
    console.log(`Player fired at: ${coords} hit: ${targetHit}`);
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

const Player = new HumanPlayer();
export default Player;
