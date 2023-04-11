import React, { useState } from "react";
import "./UploadModal.css";
import AWS from "aws-sdk";

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

    // const IMAGE_UPLOAD_ENDPOINT =
    //   "https://q6j8s8rwj1.execute-api.us-west-2.amazonaws.com/dev/aac-upload-image";

    // const POSTS_ENDPOINT =
    //   "https://q6j8s8rwj1.execute-api.us-west-2.amazonaws.com/dev/aac-get-post";

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
        console.log(data);
        const key = `${data}.jpeg`;

        const bucketName = "postreader-source";
        const region = "us-west-2";
        const accessKeyId = "AKIAROCL73IT5VDDQZEH";
        const secretAccessKey = "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";

        AWS.config.update({
          accessKeyId,
          secretAccessKey,
          region,
        });

        const s3 = new AWS.S3({
          apiVersion: "2006-03-01",
          params: { Bucket: bucketName },
        });

        const params = {
          Key: key,
          Body: selectedFile,
          ContentType: selectedFile.type,
        };

        s3.upload(params, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            console.log("File uploaded successfully:", data.Location);
          }
        });
      });
    // .then(
    //   fetch(POSTS_ENDPOINT)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setData(data);
    //     })
    // );

    setEnteredVoice("");
    setEnteredText("");
    setEnteredName("");
    setEnteredTag("");
    setSelectedFile(null);
  };

  return (
    <div className="modal-container">
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
          <label>Add Image:</label>
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
    </div>
  );
}
