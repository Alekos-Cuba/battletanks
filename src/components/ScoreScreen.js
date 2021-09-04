import "./../css/scoreScreen.css";
import gameManager from "../scripts/GameManager";
import Human from "../scripts/Human";
import AI from "../scripts/AI";
import OptionButton from "./OptionButton";

function ScoreScreen() {
  const getScoreScreenTitle = () => {
    let winner = gameManager.getWinner();
    switch (winner) {
      case gameManager.playerTypes.Human: {
        return "You win!";
      }
      case gameManager.playerTypes.AI: {
        return "You have been defeated!";
      }
      default: {
        break;
      }
    }
  };

  const restartGame = () => {
    window.location.reload();
  };

  return (
    <div className="modal-wrapper open">
      <div className="modal">
        <div className="head">Score</div>
        <div className="content">
          <div className="score-content-title">
            <h2>{getScoreScreenTitle()}</h2>
          </div>
          <div className="score-resume">
            <div className="score-resume-content-left">
              <span>{Human.shots.size}</span>
              <span>{Human.getShotStatistics(true)}</span>
              <span>{Human.getShotStatistics(false)}</span>
            </div>
            <div className="score-resume-content-topics">
              <span>Shots fired</span>
              <span>Hits</span>
              <span>Misses</span>
            </div>
            <div className="score-resume-content-right">
              <span>{AI.shotsFired.size}</span>
              <span>{AI.getShotStatistics(true)}</span>
              <span>{AI.getShotStatistics(false)}</span>
            </div>
          </div>
        </div>
        <div className="score-buttons-container">
          <OptionButton text="Back to Menu" goto="/"></OptionButton>
          <OptionButton
            text="Play again"
            clickFnc={restartGame}
            goto="game"
          ></OptionButton>
        </div>
      </div>
    </div>
  );
}

export default ScoreScreen;
