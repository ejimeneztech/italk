import React, { useState } from "react";
import "./UploadModal.css";

export default function UploadModal(props) {
  const [enteredVoice, setEnteredVoice] = useState("Matthew");
  const [enteredText, setEnteredText] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredTag, setEnteredTag] = useState("");

  const selectVoiceHandler = (event) => {
    setEnteredVoice(event.target.value);
  };

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const tagChangeHandler = (event) => {
    setEnteredTag(event.target.value);
  };


  const handleSubmit = () => {
    console.log("Button was clicked");
  }

  return (
    <div className="modal">
      <div className="modal-header">
        <button className="close-button" onClick={props.onClose}>
          X
        </button>
      </div>
      <h2>{props.title}</h2>
      <p>{props.message}</p>
      <div className="input__dropdown">
        <label>Select Voice: </label>
        <select value={enteredVoice} onChange={selectVoiceHandler}>
          <option value="Matthew">Matthew</option>
          <option value="Joanna">Joanna</option>
          <option value="Kevin">Kevin</option>
        </select>
      </div>
      <div className="input__field">
        <label>Enter text to speak: </label>
        <input
          type="string"
          min="0.01"
          step="0.01"
          value={enteredText}
          onChange={textChangeHandler}
        />
      </div>
      <div className="input__field">
        <label>Name: </label>
        <input
          type="string"
          min="0.01"
          step="0.01"
          value={enteredName}
          onChange={nameChangeHandler}
        />
      </div>
      <div className="input__field">
        <label>Tag: </label>
        <input
          type="string"
          min="0.01"
          step="0.01"
          value={enteredTag}
          onChange={tagChangeHandler}
        />
      </div>
      <button type="submit" onClick={handleSubmit}>Submit</button>
    </div>
  );
}
