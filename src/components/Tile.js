import "./../css/tile.css";
import React from "react";

const Tile = React.forwardRef((props, ref) => {
  return <div className="tile" ref={ref}></div>;
});

export default Tile;
