import React, { useState } from "react";
import Textbox from "./TextBox";
import AudioPlayer from "./AudioPlayer";
import Container from "./Container";
import ButtonReady from "./ButtonReady";
import ModalWrapper from "./ModalWrapper";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";


export default function Ready(props) {
  const [text, setText] = useState("");
  const [audioSource, setAudioSource] = useState("");

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
      <ModalWrapper/>
      <Container>
        <Section1>
          {props.data.aboutMe.map((item) => (
            <ButtonReady
              onClick={onClickHandler}
              value={item.text}
              url={item.url}
              img={item.img_url}
              name={item.name}
            />
          ))}
        </Section1>

        <Section2>
          {props.data.neccessities.map((item) => (
            <ButtonReady
              onClick={onClickHandler}
              value={item.text}
              url={item.url}
              img={item.img_url}
              name={item.name}
            />
          ))}
        </Section2>

        <Section3>
          {props.data.activities.map((item) => (
            <ButtonReady
              onClick={onClickHandler}
              value={item.text}
              url={item.url}
              img={item.img_url}
              name={item.name}
            />
          ))}
        </Section3>
      </Container>
    </div>
  );
}
