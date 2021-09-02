import "./../css/tile.css";
import gameManager from "../scripts/GameManager";

function Tile(props) {
  const getTileClass = () => {
    return props.selectable ? "tile-selectable" : "tile";
  };

  const getTileImageClass = () => {
    return props.hasUnit ? "" : "tile-hidden";
  };

  const getTileUnitType = () => {
    return props.unitType === gameManager.unitTypes.Player
      ? "tile-player-unit"
      : "tile-ai-unit";
  };

  const revealTile = () => {
    if (props.selectable) {
      console.log(
        gameManager.hasUnitAtCoordinates(
          props.coords,
          gameManager.aiUnitsDistribution
        )
      );
    }
  };

  return (
    <div className={getTileClass()} onClick={revealTile}>
      <div className={getTileImageClass()}>
        <div className={`tile-image ${getTileUnitType()}`}></div>
      </div>
    </div>
  );
}

export default Tile;
