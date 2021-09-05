import AI from "./AI";
import Human from "./Human";

class GameManager {
  constructor() {
    this.boardSizeX = 8;
    this.boardSizeY = 6;
    this.maxUnitCount = 15;
    this.playerTypes = {
      None: -1,
      Human: 0,
      AI: 1,
    };
    if (GameManager.instance === null) {
      GameManager.instance = this;
    }
    return GameManager.instance;
  }

  initializeGame() {
    AI.resetShots();
    AI.setUnits(this.getRandomUnitDistribution());
    Human.resetShots();
    Human.setUnits(this.getRandomUnitDistribution());
  }

  getRandomUnitDistribution() {
    let count = this.maxUnitCount;
    let unitsMap = new Map();
    while (count > 0) {
      let matrixIndex = `${parseInt(
        Math.random().toFixed(1) * (this.boardSizeY - 1)
      )},${parseInt(Math.random().toFixed(1) * (this.boardSizeX - 1))}`;
      if (!unitsMap.has(matrixIndex)) {
        unitsMap.set(matrixIndex, false);
        count--;
      }
    }
    return unitsMap;
  }

  getWinner() {
    let winner = this.playerTypes.None;
    if (Human.units.size === 0) {
      winner = this.playerTypes.AI;
    }
    if (AI.units.size === 0) {
      winner = this.playerTypes.Human;
    }
    return winner;
  }

  makeAiPlay() {
    let hit;
    let fireCoords = AI.requestFireCoordinates(
      gameManager.boardSizeX,
      gameManager.boardSizeY
    );
    if (Human.hasUnitAtCoordinates(fireCoords)) {
      AI.shotHitTarget(fireCoords, true);
      Human.destroyUnit(fireCoords);
      hit = true;
    } else {
      AI.shotHitTarget(fireCoords, false);
      hit = false;
    }
    return [fireCoords, hit];
  }
}

const gameManager = new GameManager();
Object.freeze(gameManager);
export default gameManager;
