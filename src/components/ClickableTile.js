import "./../css/clickableTile.css";
import { useState } from "react";
import gameManager from "../scripts/GameManager";

function ClickableTile(props) {
  const [tileClicked, setTileClicked] = useState(false);
  const [tileHasUnit, setTileHasUnit] = useState(false);

  const handleClick = () => {
    setTileClicked(true);
    if (gameManager.hasUnitAtCoordinates(props.coords, gameManager.aiUnits)) {
      setTileHasUnit(true);
      let winner = gameManager.destroyUnit(props.coords, gameManager.aiUnits);
      props.onUnitDestroyed(winner);
    } else {
      setTileHasUnit(false);
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
