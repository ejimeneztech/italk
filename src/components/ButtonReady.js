import React, { useState } from "react";
import Textbox from "./TextBox";
import AudioPlayer from "./AudioPlayer";
import Container from "./Container";

export default function ButtonReady(props) {
  const [text, setText] = useState("");
  const [audioSource, setAudioSource] = useState("");

  const onClickHandler = (event) => {
    const newText = event.target.value;
    const newAudio = event.target.dataset.value1;
    setText(newText);
    setAudioSource(newAudio);
  };

  return (
    <div>
      <br></br>
      <Textbox text={text} />
      <AudioPlayer source={audioSource} />
      <br></br>
      <Container>
        {props.data.map((item) => (
          <button
            onClick={onClickHandler}
            value={item.text}
            data-value1={item.url}
          >
            {item.text}
          </button>
        ))}
      </Container>
    </div>
  );
}
