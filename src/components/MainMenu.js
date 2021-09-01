import "./../css/mainMenu.css";
import MenuButton from "./MenuButton";

function MainMenu() {
  return (
    <div className="body-container">
      <MenuButton title="Play vs Human" goto=""></MenuButton>
      <MenuButton
        title="Play vs AI"
        goto="singlePlayerGame"
        icon="vsAI"
      ></MenuButton>
      <MenuButton title="How to play" goto="howToPlay"></MenuButton>
    </div>
  );
}

export default MainMenu;
