import "./../css/mainMenu.css";
import MenuButton from "./MenuButton";

function MainMenu() {
  return (
    <div className="body-container">
      <MenuButton title="Play vs Human" goto="" icon="vsHuman"></MenuButton>
      <MenuButton title="Play vs AI" goto="game" icon="vsAI"></MenuButton>
      <MenuButton title="How to play" goto="howToPlay"></MenuButton>
    </div>
  );
}

export default MainMenu;
