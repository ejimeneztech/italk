import React, { useState, useEffect } from "react";
import "./UploadModal.css";

export default function UploadModal(props) {
  const [enteredVoice, setEnteredVoice] = useState("Matthew");
  const [enteredText, setEnteredText] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredTag, setEnteredTag] = useState("activities");
  const [selectedFile, setSelectedFile] = useState(null);

  const selectVoiceHandler = (event) => {
    setEnteredVoice(event.target.value);
  };

  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const selectTagHandler = (event) => {
    setEnteredTag(event.target.value);
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const HandleSubmit = (event) => {
    const NEW_BUTTON_ENDPOINT =
      "https://q6j8s8rwj1.execute-api.us-west-2.amazonaws.com/dev/aac-new-post";

    const IMAGE_UPLOAD_ENDPOINT =
      "https://q6j8s8rwj1.execute-api.us-west-2.amazonaws.com/dev/aac-upload-image";

    event.preventDefault();
    const newButtonData = {
      voice: enteredVoice,
      text: enteredText,
      name: enteredName,
      tag: enteredTag,
    };

    fetch(NEW_BUTTON_ENDPOINT, {
      method: "POST",
      body: JSON.stringify(newButtonData),
    })
      .then((res) => res.json())
      .then((data) => {
        const key = `${data}.jpeg`;
        const sendName = {
          name: key,
        };
        fetch(IMAGE_UPLOAD_ENDPOINT, {
          method: "POST",
          body: JSON.stringify(sendName),
        })
          .then((presignedUrl) => presignedUrl.json())
          .then((data2) => {
            const modUrl = data2["url"];
            const url = modUrl.replace(/&.*?(?=&Expires)/, "");

            fetch(url, {
              method: "PUT",

              headers: {
                "Content-Type": selectedFile.type,
                "Content-Length": selectedFile.size,
              },
              body: selectedFile,
            });
          });
      });

    setEnteredVoice("");
    setEnteredText("");
    setEnteredName("");
    setEnteredTag("");
    setSelectedFile(null);
  };

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
          type="text"
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
      <div className="input__dropdown">
        <label>Select Tag: </label>
        <select value={enteredTag} onChange={selectTagHandler}>
          <option value="activities">activities</option>
          <option value="neccessities">neccessities</option>
          <option value="aboutMe">aboutMe</option>
        </select>
      </div>
      <div className="input__field">
        <label>Image:</label>
        <input
          type="file"
          min="0.01"
          step="0.01"
          // value={selectedFile}
          onChange={handleFileSelect}
        />
      </div>
      <button type="submit" onClick={HandleSubmit}>
        Submit
      </button>
    </div>
  );
}
