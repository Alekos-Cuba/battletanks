import "./../css/clickableTile.css";
import { useState } from "react";
import AI from "../scripts/AI";

function ClickableTile(props) {
  const [tileClicked, setTileClicked] = useState(false);
  const [tileHasUnit, setTileHasUnit] = useState(false);

  const handleClick = () => {
    setTileClicked(true);
    let unitWasHit = false;
    if (AI.hasUnitAtCoordinates(props.coords)) {
      setTileHasUnit(true);
      AI.destroyUnit(props.coords);
      unitWasHit = true;
    } else {
      setTileHasUnit(false);
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
