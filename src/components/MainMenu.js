import "./../css/mainMenu.css";
import MenuButton from "./MenuButton";

function MainMenu() {
  return (
    <div className="body-container">
      <MenuButton title="Play vs AI" goto="game" icon="vsAI"></MenuButton>
      <MenuButton
        title="How to play"
        goto="howToPlay"
        icon="howto"
      ></MenuButton>
    </div>
  );
}

export default MainMenu;
