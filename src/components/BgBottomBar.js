import "./../css/bgBottomBar.css";

function BgBottomBar(props) {
  const handleQuit = () => {
    window.location = "/";
  };

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div className="bottom-bar">
      <div className="bottom-bar-side-panel">
        <h3>Player Units: {0}</h3>
      </div>
      <div className="bottom-bar-mid-panel">
        <button onClick={handleQuit}>Go back</button>
        <button onClick={handleRestart}>Restart game</button>
      </div>
      <div className="bottom-bar-side-panel">
        <h3>AI Units: {props.aiUnits}</h3>
      </div>
    </div>
  );
}

export default BgBottomBar;
