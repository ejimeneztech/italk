import "./TextBox.css";
import ClearButton from "./ClearButton";

export default function Textbox(props) {
  return (
    <div>
      <div className="text-box">{props.text}</div>
      <ClearButton onClick={props.clear} />
    </div>
  );
}
