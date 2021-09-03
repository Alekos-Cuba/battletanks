import "./../css/tile.css";

function Tile(props) {
  const getTileClass = () => {
    return props.hasUnit ? "tile-player-unit" : "";
  };

  return <div className={`tile ${getTileClass()}`}></div>;
}

export default Tile;
