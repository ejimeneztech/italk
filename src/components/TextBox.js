import React from "react";
import "./TextBox.css";
import ClearButton from "./Buttons/ClearButton";

export default function Textbox(props) {
  const hasText = props.text;

  return (
    <div>
      <div className="text-box">{hasText}</div>
      {hasText && <ClearButton onClick={props.clear} />}
    </div>
  );
}
