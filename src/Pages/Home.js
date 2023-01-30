import React, { useState, useEffect } from "react";
import TextBox from "../components/TextBox.js";
import Container from "../components/Container.js";

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

  const onClickHandler = (event) => {
    const newText = event.target.value;
    setText(newText);
  };
  /* */

  return !data ? (
    "Loading"
  ) : (
    <div>
      <br></br>
      <TextBox text={text} />
      <br></br>
      <Container>
        {data.map((item) => (
          <button onClick={onClickHandler} value={item.text}>
            {item.text}
          </button>
        ))}
      </Container>
    </div>
  );
}
