import "./../css/menuButton.css";

function MenuButton(props) {
  const navigate = () => {
    window.location += props.goto;
  };
  return (
    <div className="buttonWrapper" onClick={navigate}>
      <div className={props.icon + "-image"}></div>
      <h3>{props.title}</h3>
    </div>
  );
}

export default MenuButton;
