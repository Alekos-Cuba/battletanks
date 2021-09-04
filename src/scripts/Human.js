import Player from "./Player";

class HumanPlayer extends Player {
  constructor() {
    super();
    if (HumanPlayer.instance === null) {
      HumanPlayer.instance = this;
    }
    return HumanPlayer.instance;
  }

  resetShots() {
    this.shots = new Map();
  }
}

const Human = new HumanPlayer();
export default Human;
