import React, { useState } from "react";
import Textbox from "./TextBox";
import AudioPlayer from "./AudioPlayer";
import Container from "./Container";
import ButtonReady from "./ButtonReady";
import ModalWrapper from "./ModalWrapper";
import Filter from "./Filter";

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

  const clickFilter1 = () => {
    setActiveCategory("aboutMe");
  };

  const clickFilter2 = () => {
    setActiveCategory("neccessities");
  };

  const clickFilter3 = () => {
    setActiveCategory("activities");
  };

  return (
    <div>
      <br></br>
      <Textbox text={text} clear={clearButtonHandler} />
      <AudioPlayer source={audioSource} />
      <br></br>

      <Filter
        click1={clickFilter1}
        click2={clickFilter2}
        click3={clickFilter3}
      />

      
      
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
      <br></br>
      <br></br>
      <ModalWrapper refreshData={props.refreshData} />
    </div>
  );
}
