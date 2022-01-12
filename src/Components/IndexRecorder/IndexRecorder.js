import React, { useRef, useState } from "react";
import { UseRecorder } from "../UseRecorder/UseRecorder";
import "./IndexRecorder.css";
import cassette from "../assets/cassette.mp4";


function IndexRecorder() {
  const vidRef = useRef(null);
  const audRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const handlePlayVideo = () => {
    vidRef.current.play();
  };
  const handlePlayVideoStop = () => {
    vidRef.current.pause();
  };
  const playAudio = () => {
    audRef.current.play();
    setPlaying(true);
  };
  const pauseAudio = () => {
    audRef.current.pause();
    setPlaying(false);
  };

  let [
    audioURL,
    isRecording,
    startRecording,
    stopRecording,
    pauseRecording,
    resumeRecording,
    task,
  ] = UseRecorder();
  const chooseTitle = (task) => {
    if (task === "started") {
      return "pause recording";
    } else if (task === "paused") {
      return "resume recording";
    } else if (task === "resumed") {
      return "pause recording";
    } else {
      return "start recording";
    }
  };
  const chooseFunc = (task) => {
    if (task === "started") {
      pauseRecording();
      handlePlayVideoStop();
    } else if (task === "paused") {
      resumeRecording();
      handlePlayVideo();
    } else if (task === "resumed") {
      pauseRecording();
      handlePlayVideoStop();
    } else {
      startRecording();
    }
  };
  return (
    <div className="root">
      <video ref={vidRef} className="cassetteGif" loop>
        <source type="video/mp4" src={cassette}></source>
      </video>
      <audio ref={audRef} src={audioURL} />
      <div className="btnContainer">
        <button
          className="start btn"
          onClick={() => {
            handlePlayVideo();
            chooseFunc(task);
          }}
        >
          {chooseTitle(task)}
        </button>
        <button
          className="stop btn"
          disabled={!isRecording}
          onClick={() => {
            handlePlayVideoStop();
            stopRecording();
          }}
        >
          Stop Recording
        </button>
        <button
          className="play btn"
          onClick={() => {
            playing ? pauseAudio() : playAudio();
          }}
        >
          {playing ? "Pause record" : "Play record"}
        </button>
      </div>
    </div>
  );
}

export default IndexRecorder;
