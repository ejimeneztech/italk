import React, { useState } from "react";
import Textbox from "./TextBox";
import AudioPlayer from "./AudioPlayer";
import Container from "./Container";
import ButtonReady from "./ButtonReady";

export default function Ready(props) {
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
          <ButtonReady
            onClick={onClickHandler}
            value={item.text}
            url={item.url}
            img={item.img_url}
          />
        ))}
      </Container>
    </div>
  );
}
