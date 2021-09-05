import "./../css/footer.css";
import "./../css/bgBottomBar.css";
import OptionButton from "./OptionButton";

function BattlegroundFooter(props) {
  const restartGame = () => {
    window.location.reload();
  };

  return (
    <div className="footer">
      <div className="bottom-bar-side-panel">
        <div>Player Units: {props.playerUnits}</div>
      </div>
      <div className="bottom-bar-mid-panel">
        <OptionButton text="Menu" goto="/"></OptionButton>
        <OptionButton
          text="Restart"
          clickFnc={restartGame}
          goto="game"
        ></OptionButton>
      </div>
      <div className="bottom-bar-side-panel">
        <div>AI Units: {props.aiUnits}</div>
      </div>
    </div>
  );
}

export default BattlegroundFooter;
