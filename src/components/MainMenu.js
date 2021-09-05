import "./../css/mainMenu.css";
import MenuButton from "./MenuButton";
import Footer from "./Footer";

function MainMenu() {
  return (
    <div className="body-container">
      <MenuButton title="Play vs AI" goto="game" icon="vsAI"></MenuButton>
      <MenuButton title="Help" goto="howToPlay" icon="howto"></MenuButton>
      <Footer></Footer>
    </div>
  );
}

export default MainMenu;
