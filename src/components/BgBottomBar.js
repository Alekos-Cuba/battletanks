import "./../css/bgBottomBar.css";
import OptionButton from "./OptionButton";

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
        <h3>Player Units: {props.playerUnits}</h3>
      </div>
      <div className="bottom-bar-mid-panel">
        <OptionButton text="Back to Menu" clickFnc={handleQuit}></OptionButton>
        <OptionButton
          text="Restart game"
          clickFnc={handleRestart}
        ></OptionButton>
      </div>
      <div className="bottom-bar-side-panel">
        <h3>AI Units: {props.aiUnits}</h3>
      </div>
    </div>
  );
}

export default BgBottomBar;
