import AI from "./AI";
import Player from "./Player";

class GameManager {
  constructor() {
    this.boardSizeX = 8;
    this.boardSizeY = 7;
    this.maxUnitCount = 25;
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
    AI.setUnits(this.getRandomUnitDistribution());
    Player.setUnits(this.getRandomUnitDistribution());
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
    if (Player.units.size === 0) {
      winner = this.playerTypes.AI;
    }
    if (AI.units.size === 0) {
      winner = this.playerTypes.Human;
    }
    return winner;
  }

  makeAiPlay() {
    let fireCoords = AI.requestFireCoordinates(
      gameManager.boardSizeX,
      gameManager.boardSizeY
    );
    if (Player.hasUnitAtCoordinates(fireCoords)) {
      AI.shotHitTarget(fireCoords, true);
      Player.destroyUnit(fireCoords);
    } else {
      AI.shotHitTarget(fireCoords, false);
    }
  }
}

const gameManager = new GameManager();
gameManager.initializeGame();
Object.freeze(gameManager);
export default gameManager;
