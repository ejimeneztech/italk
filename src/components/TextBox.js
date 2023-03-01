import React, { useState } from "react";
import "./TextBox.css";
import ClearButton from "./ClearButton";

export default function Textbox(props) {
  const hasText = props.text;

  return (
    <div>
      <div className="text-box">{hasText}</div>
      {hasText && <ClearButton onClick={props.clear} />}
    </div>
  );
}
