import "./../css/clickableTile.css";
import { useState } from "react";
import gameManager from "../scripts/GameManager";
import AI from "../scripts/AI";

function ClickableTile(props) {
  const [tileClicked, setTileClicked] = useState(false);
  const [tileHasUnit, setTileHasUnit] = useState(false);

  const handleClick = () => {
    setTileClicked(true);
    let winner = gameManager.playerTypes.None;
    if (AI.hasUnitAtCoordinates(props.coords)) {
      setTileHasUnit(true);
      AI.destroyUnit(props.coords);
      winner = gameManager.validateWinCondition();
      props.onUnitDestroyed(winner);
    } else {
      setTileHasUnit(false);
    }

    if (winner === gameManager.playerTypes.None) {
      AI.play();
    }
  };

  return (
    <div
      className={
        tileClicked
          ? tileHasUnit
            ? "tile-unit-destroyed"
            : "tile-unit-miss"
          : "tile-clickable"
      }
      onClick={handleClick}
    ></div>
  );
}

export default ClickableTile;
