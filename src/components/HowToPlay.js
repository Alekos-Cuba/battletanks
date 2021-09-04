import "./../css/howToPlay.css";
import OptionButton from "./../components/OptionButton";

function HowToPlay() {
  return (
    <div className="howTo">
      <div className="howTo-corner">
        <OptionButton text="< Back" goto="/"></OptionButton>
      </div>
      <div className="howTo-content">
        <h1>How to play</h1>
        <div>
          This game is similar to Battleship, but instead of destroying navy
          ships, you destroy tanks. <br />
          Both the player (you) and the AI start with 25 units each, and your
          goal is to destroy your adversary's tanks before running out of units.
          <br /> <br />
          <div className="img-board"></div>
          <br />
          The board is divided in two sides. The left side belongs to the
          player's units, and the right side to the AI's units. You can destroy
          your enemy's tanks by clicking on the unrevealed tiles. If you click a
          tile with an enemy tank, it will be destroyed, otherwise, better luck
          next time! ;D
          <br />
          <br />
          <div className="img-board-destroy"></div>
        </div>
      </div>
      <div className="howTo-corner"></div>
    </div>
  );
}

export default HowToPlay;
