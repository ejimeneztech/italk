import React, { useState, useEffect } from "react";
import TextBox from "../components/TextBox.js";
import Container from "../components/Container.js";
import AudioPlayer from "../components/AudioPlayer.js";

export default function Home() {
  const [data, setData] = useState(null);

  const POSTS_ENDPOINT =
    "https://q6j8s8rwj1.execute-api.us-west-2.amazonaws.com/dev/aac-get-post";

  useEffect(() => {
    fetch(POSTS_ENDPOINT)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  console.log(data);

  /*    */

  const [text, setText] = useState("");
  const [audioSource, setAudioSource] = useState('');

  const onClickHandler = (event) => {
    const newText = event.target.value;
    const newAudio = event.target.dataset.value1;
    setText(newText);
    setAudioSource(newAudio);
    console.log(newAudio)
  };
  /* */

  return !data ? (
    "Loading"
  ) : (
    <div>
      <br></br>
      <TextBox text={text} />
      <AudioPlayer source={audioSource}/>
      <br></br>
      <Container>
        {data.map((item) => (
          <button onClick={onClickHandler} value={item.text} data-value1={item.url}>
            {item.text}
          </button>
        ))}
      </Container>
    </div>
  );
}
