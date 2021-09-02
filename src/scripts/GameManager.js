class GameManager {
  constructor() {
    this.boardSizeX = 8;
    this.boardSizeY = 7;
    this.maxUnitCount = 25;
    this.playerUnitsDistribution = this.getRandomUnitDistribution();
    this.aiUnitsDistribution = this.getRandomUnitDistribution();
    this.unitTypes = {
      Player: 0,
      AI: 1,
    };
    this.stages = {
      setupStage: 0,
      playerTurn: 1,
      aiTurn: 2,
    };
    this.currentStage = this.stages.setupStage;
    if (GameManager.instance === null) {
      GameManager.instance = this;
    }
    return GameManager.instance;
  }

  getCurrentStage() {
    return this.currentStage;
  }

  getRandomUnitDistribution() {
    let count = this.maxUnitCount;
    let unitsMap = new Map();
    while (count > 0) {
      let matrixIndex = `${parseInt(
        Math.random().toFixed(1) * (this.boardSizeX - 1)
      )},${parseInt(Math.random().toFixed(1) * (this.boardSizeY - 1))}`;
      if (!unitsMap.has(matrixIndex)) {
        unitsMap.set(matrixIndex, true);
        count--;
      }
    }
    return unitsMap;
  }

  hasUnitAtCoordinates(coords, unitSource) {
    let stringCoords = coords.join(",");
    return unitSource.has(stringCoords);
  }
}

const gameManager = new GameManager();
Object.freeze(gameManager);
export default gameManager;
