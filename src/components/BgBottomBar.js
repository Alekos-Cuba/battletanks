import "./../css/bgBottomBar.css";
import { useState, useEffect } from "react";
import gameManager from "../scripts/GameManager";

function BgBottomBar() {
  const [playerUnitCount, setPlayerUnitCount] = useState(0);
  const [aiUnitCount, setAiUnitCount] = useState(0);

  useEffect(() => {
    setPlayerUnitCount(gameManager.playerUnits.size);
    setAiUnitCount(gameManager.aiUnits.size);
  }, []);

  const handleQuit = () => {
    window.location = "/";
  };

  const handleRestart = () => {
    window.location.reload();
  };

  return (
    <div className="bottom-bar">
      <div className="bottom-bar-side-panel">
        <h3>Player Units: {playerUnitCount}</h3>
      </div>
      <div className="bottom-bar-mid-panel">
        <button onClick={handleQuit}>Go back</button>
        <button onClick={handleRestart}>Restart game</button>
      </div>
      <div className="bottom-bar-side-panel">
        <h3>AI Units: {aiUnitCount}</h3>
      </div>
    </div>
  );
}

export default BgBottomBar;
