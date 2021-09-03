import "./../css/scoreScreen.css";
import gameManager from "../scripts/GameManager";
import Player from "../scripts/Player";
import AI from "../scripts/AI";

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
          <div className="score-resume">
            <h1>{getScoreScreenTitle()}</h1>
            <div>{AI.shotsFired.size}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScoreScreen;
