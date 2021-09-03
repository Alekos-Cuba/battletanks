import "./../css/battleground.css";
import { useState, useEffect } from "react";
import Tile from "./Tile";
import ClickableTile from "./ClickableTile";
import BgBottomBar from "./BgBottomBar";
import gameManager from "../scripts/GameManager";

function Battleground() {
  const [playerUnitCount, setPlayerUnitCount] = useState(0);
  const [aiUnitCount, setAiUnitCount] = useState(0);
  useEffect(() => {
    setPlayerUnitCount(gameManager.playerUnits.size);
    setAiUnitCount(gameManager.aiUnits.size);
  }, []);

  const onAiUnitDestroyed = () => {
    setAiUnitCount(aiUnitCount - 1);
  };

  const createBoard = (unitType) => {
    let tilesRow = [];
    const fullTiles = [];
    let sourceUnits =
      unitType === gameManager.unitTypes.AI
        ? gameManager.aiUnits
        : gameManager.playerUnits;

    for (let i = 0; i < gameManager.boardSizeY; i++) {
      tilesRow = [];
      for (let j = 0; j < gameManager.boardSizeX; j++) {
        if (unitType === gameManager.unitTypes.AI) {
          tilesRow.push(
            <ClickableTile
              key={`${i}_${j}`}
              coords={[i, j]}
              onUnitDestroyed={onAiUnitDestroyed}
            ></ClickableTile>
          );
        } else {
          tilesRow.push(
            <Tile
              key={`${i}_${j}`}
              hasUnit={sourceUnits.has(`${i},${j}`)}
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
          {createBoard(gameManager.unitTypes.Player)}
        </div>
        <div className="bg-board">{createBoard(gameManager.unitTypes.AI)}</div>
      </div>
      <div className="bg-bottom-options">
        <BgBottomBar aiUnits={aiUnitCount}></BgBottomBar>
      </div>
    </div>
  );
}

export default Battleground;
