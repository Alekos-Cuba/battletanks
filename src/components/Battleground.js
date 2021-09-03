import "./../css/battleground.css";
import { useState, useEffect } from "react";
import Tile from "./Tile";
import ClickableTile from "./ClickableTile";
import BgBottomBar from "./BgBottomBar";
import gameManager from "../scripts/GameManager";
import AI from "../scripts/AI";
import Player from "../scripts/Player";

function Battleground() {
  const [playerUnitCount, setPlayerUnitCount] = useState(0);
  const [aiUnitCount, setAiUnitCount] = useState(0);
  useEffect(() => {
    setPlayerUnitCount(Player.units.size);
    setAiUnitCount(AI.units.size);
  }, []);

  const onAiUnitDestroyed = (winner) => {
    setAiUnitCount(aiUnitCount - 1);
    if (winner !== gameManager.playerTypes.None) {
      console.log("We have a winner");
    }
  };

  const createBoard = (unitType) => {
    let tilesRow = [];
    const fullTiles = [];
    let sourceUnits =
      unitType === gameManager.playerTypes.AI ? AI.units : Player.units;
    for (let i = 0; i < gameManager.boardSizeY; i++) {
      tilesRow = [];
      for (let j = 0; j < gameManager.boardSizeX; j++) {
        if (unitType === gameManager.playerTypes.AI) {
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
    </div>
  );
}

export default Battleground;
