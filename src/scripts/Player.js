class Player {
  constructor() {
    this.units = new Map();
    this.shots = new Map();
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

  getShotStatistics(isHit) {
    let count = 0;
    for (const value of this.shots.values()) {
      if (value === isHit) {
        count++;
      }
    }
    return count;
  }

  shotHitTarget(coords, targetHit) {
    this.shots.set(coords, targetHit);
  }
}

export default Player;
