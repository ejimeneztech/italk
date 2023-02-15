import React, { useRef, useEffect } from "react";

export default function AudioPlayer(props) {
  const audioRef = useRef(null);

  useEffect(() => {
    try {
        audioRef.current.play();
      } catch (error) {
        console.error('Failed to play audio:', error);
      }
    }, [props.source]);

 

  return (
    
      <audio ref={audioRef} src={props.source}></audio>

    
  );
}
