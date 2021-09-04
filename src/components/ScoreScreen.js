import "./../css/scoreScreen.css";
import gameManager from "../scripts/GameManager";
import Player from "../scripts/Player";
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
        return "You have been defeated";
      }
    }
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
              <span>{Player.shots.size}</span>
              <span>{Player.getShotStatistics(true)}</span>
              <span>{Player.getShotStatistics(false)}</span>
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
          <OptionButton text="Back to Menu"></OptionButton>
          <OptionButton text="Play again"></OptionButton>
        </div>
      </div>
    </div>
  );
}

export default ScoreScreen;
