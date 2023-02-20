import React, { useState } from "react";
import Textbox from "./TextBox";
import AudioPlayer from "./AudioPlayer";
import Container from "./Container";
import ButtonReady from "./ButtonReady";

export default function Ready(props) {
  const [text, setText] = useState("");
  const [audioSource, setAudioSource] = useState("");

  const onClickHandler = (event) => {
    const newAudio = event.target.dataset.value1;
    const newText = event.target.dataset.value2;
    setAudioSource(newAudio);
    setText(newText);
    
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
            name={item.name}
          />
        ))}
      </Container>
    </div>
  );
}
