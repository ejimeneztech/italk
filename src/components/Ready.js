import React, { useState } from "react";
import Textbox from "./TextBox";
import AudioPlayer from "./AudioPlayer";
import Container from "./Container";
import ButtonReady from "./ButtonReady";
import ModalWrapper from "./ModalWrapper";

export default function Ready(props) {
  const [text, setText] = useState("");
  const [audioSource, setAudioSource] = useState("");
  const [activeCategory, setActiveCategory] = useState("activities");

  const onClickHandler = (event) => {
    const newAudio = event.target.dataset.value1;
    const newText = event.target.dataset.value2;
    setAudioSource(newAudio);
    setText(newText);
  };

  const clearButtonHandler = () => {
    setAudioSource("");
    setText("");
  };

  return (
    <div>
      <br></br>
      <Textbox text={text} clear={clearButtonHandler} />
      <AudioPlayer source={audioSource} />
      <br></br>
      

      <button onClick={() => setActiveCategory("aboutMe")}>About Me</button>
      <button onClick={() => setActiveCategory("neccessities")}>
        Neccessities
      </button>
      <button onClick={() => setActiveCategory("activities")}>
        Activities
      </button>
      <br></br>
      <br></br>
      <ModalWrapper refreshData={props.refreshData} />
      <Container>
        {props.data[activeCategory].map((item) => (
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
