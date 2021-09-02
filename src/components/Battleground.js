import "./../css/battleground.css";
import Tile from "./Tile";
import gameManager from "../scripts/GameManager";

function Battleground() {
  const createBoard = (isTileSelectable, unitType) => {
    let tilesRow = [];
    const fullTiles = [];
    let sourceUnits = isTileSelectable
      ? gameManager.aiUnitsDistribution
      : gameManager.playerUnitsDistribution;

    for (let i = 0; i < gameManager.boardSizeY; i++) {
      tilesRow = [];
      for (let j = 0; j < gameManager.boardSizeX; j++) {
        tilesRow.push(
          <Tile
            key={`${i}_${j}`}
            selectable={isTileSelectable}
            hasUnit={sourceUnits.has(`${i},${j}`)}
            unitType={unitType}
          ></Tile>
        );
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
          {createBoard(false, gameManager.unitTypes.Player)}
        </div>
        <div className="bg-board">
          {createBoard(true, gameManager.unitTypes.AI)}
        </div>
      </div>
      <div className="bg-bottom-options">Other</div>
    </div>
  );
}

export default Battleground;
