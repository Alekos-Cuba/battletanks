import "./../css/menuButton.css";
import { useHistory } from "react-router-dom";

function MenuButton(props) {
  const history = useHistory();

  const handleClick = () => {
    if (props.clickFnc && props.clickFnc instanceof Function) {
      props.clickFnc();
    }
    history.push(props.goto);
  };

  return (
    <div className="buttonWrapper" onClick={handleClick}>
      <div className={props.icon + "-image"}></div>
      <h3>{props.title}</h3>
    </div>
  );
}

export default MenuButton;
