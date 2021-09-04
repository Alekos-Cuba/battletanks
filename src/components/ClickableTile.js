import "./../css/clickableTile.css";
import { useState } from "react";
import AI from "../scripts/AI";
import Player from "../scripts/Player";

function ClickableTile(props) {
  const [tileClicked, setTileClicked] = useState(false);
  const [tileHasUnit, setTileHasUnit] = useState(false);

  const handleClick = () => {
    if (tileClicked) {
      return;
    }
    setTileClicked(true);
    let unitWasHit = false;
    if (AI.hasUnitAtCoordinates(props.coords)) {
      setTileHasUnit(true);
      AI.destroyUnit(props.coords);
      Player.shotHitTarget(props.coords, true);
      unitWasHit = true;
    } else {
      setTileHasUnit(false);
      Player.shotHitTarget(props.coords, false);
    }
    props.onTileClicked(unitWasHit);
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
