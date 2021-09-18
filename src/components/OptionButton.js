import "./../css/optionButton.css";
import { useHistory } from "react-router-dom";

function OptionButton(props) {
  const history = useHistory();

  const handleClick = () => {
    props.clickFnc?.();
    history.push(props.goto);
  };

  return (
    <div className="optionButton" onClick={handleClick}>
      {props.text}
    </div>
  );
}

export default OptionButton;
