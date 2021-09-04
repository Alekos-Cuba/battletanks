import "./../css/battleground.css";
import { useState, useEffect } from "react";
import Tile from "./Tile";
import ClickableTile from "./ClickableTile";
import BgBottomBar from "./BgBottomBar";
import gameManager from "../scripts/GameManager";
import AI from "../scripts/AI";
import Human from "../scripts/Human";
import ScoreScreen from "./ScoreScreen";

function Battleground() {
  const [playerUnitCount, setPlayerUnitCount] = useState(0);
  const [aiUnitCount, setAiUnitCount] = useState(0);
  const [showScore, setShowScore] = useState(false);
  useEffect(() => {
    setPlayerUnitCount(Human.units.size);
    setAiUnitCount(AI.units.size);
  }, []);

  const tileClicked = (unitWasHit) => {
    if (unitWasHit) {
      setAiUnitCount(AI.units.size);
    }
    //check win condition after human has played
    checkWinCondition();
    gameManager.makeAiPlay();
    setPlayerUnitCount(Human.units.size);
    //check win condition again after AI has played
    checkWinCondition();
  };

  const checkWinCondition = () => {
    let winner = gameManager.getWinner();
    if (winner !== gameManager.playerTypes.None) {
      setTimeout(function () {
        setShowScore(true);
      }, 500);
    }
  };

  const createBoard = (unitType) => {
    let tilesRow = [];
    const fullTiles = [];
    for (let i = 0; i < gameManager.boardSizeY; i++) {
      tilesRow = [];
      for (let j = 0; j < gameManager.boardSizeX; j++) {
        if (unitType === gameManager.playerTypes.AI) {
          tilesRow.push(
            <ClickableTile
              key={`${i}_${j}`}
              coords={[i, j]}
              onTileClicked={tileClicked}
            ></ClickableTile>
          );
        } else {
          tilesRow.push(
            <Tile
              key={`${i}_${j}`}
              hasUnit={Human.units.has(`${i},${j}`)}
              coords={[i, j]}
            ></Tile>
          );
        }
      }
      fullTiles.push(
        <div key={`row${i}`} className="bg-board-tiles-container">
          {tilesRow}
        </div>
      );
    }
    return fullTiles;
  };

  return (
    <div className="battleground">
      <div className="bg-board-container">
        <div className="bg-board">
          {createBoard(gameManager.playerTypes.Human)}
        </div>
        <div className="bg-board">
          {createBoard(gameManager.playerTypes.AI)}
        </div>
      </div>
      <div className="bg-bottom-options">
        <BgBottomBar
          aiUnits={aiUnitCount}
          playerUnits={playerUnitCount}
        ></BgBottomBar>
      </div>
      {showScore ? <ScoreScreen></ScoreScreen> : ""}
    </div>
  );
}

export default Battleground;
