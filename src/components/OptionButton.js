import "./../css/optionButton.css";

function OptionButton(props) {
  return (
    <div className="optionButton" onClick={props.clickFnc}>
      {props.text}
    </div>
  );
}

export default OptionButton;
