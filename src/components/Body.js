import "./../css/body.css";
import MenuButton from "./MenuButton";

function Body() {
  return (
    <div className="body-container">
      <MenuButton title="Play vs Human"></MenuButton>
      <MenuButton title="Play vs AI" icon="vsAI"></MenuButton>
      <MenuButton title="How to play"></MenuButton>
    </div>
  );
}

export default Body;
