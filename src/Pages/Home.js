import React, { useState, useEffect } from "react";
import Ready from "../components/Ready";

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

  console.log(data)
  return !data ? "Loading" : <Ready data={data} />;
}
