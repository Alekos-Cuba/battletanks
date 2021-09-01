import "./../css/menuButton.css";

function MenuButton(props) {
  return (
    <div className="buttonWrapper">
      <div className={props.icon + "-image"}></div>
      <h3>{props.title}</h3>
    </div>
  );
}

export default MenuButton;
