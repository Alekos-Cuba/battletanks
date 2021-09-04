import Player from "./Player";

class HumanPlayer extends Player {
  constructor() {
    super();
    if (HumanPlayer.instance === null) {
      HumanPlayer.instance = this;
    }
    return HumanPlayer.instance;
  }
}

const Human = new HumanPlayer();
export default Human;
