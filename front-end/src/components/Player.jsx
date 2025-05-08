import React from "react";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faCirclePause,
  faBackwardStep,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { useRef } from "react";

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds - minutes * 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
};

const timeInSeconds = (timeString) => {
  const seconds = Number(timeString.split(":")[1]);
  const minutes = Number(timeString.split(":")[0]) * 60;
  return minutes + seconds;
};

const Player = ({ duration, previousSongId, nextSongId, audio }) => {
  const audioPlayer = useRef();
  const barProgress = useRef();
  // console.log(state);
  const [isPaused, setIsPaused] = useState(true);
  // console.log(isPaused);
  const [currentTime, setCurrentTime] = useState(formatTime(0));
  const durationInSeconds = timeInSeconds(duration);

  useEffect(() => {
    audioPlayer.current.currentTime = 0;
    setCurrentTime(formatTime(0));
    barProgress.current.style.setProperty("--_progress", 0 + "%");
    audioPlayer.current.pause();
    return () => {
      setIsPaused(true); // Reseta para pausado sempre que a música mudar
    };
  }, [useParams().id]);
  //useEffect vai realizar uma função sempre que algum dos parâmetros recebidos sofrerem alguma mudança

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Verifica se a tecla pressionada foi a barra de espaço
      if (event.code === "Space") {
        event.preventDefault(); // Evita rolagem da página
        setIsPaused((prev) => {
          const nextState = !prev;
          if (nextState) {
            audioPlayer.current.pause();
          } else {
            audioPlayer.current.play();
          }
          return nextState;
        });
      }
    };

    // Adiciona o event listener
    document.addEventListener("keydown", handleKeyDown);

    // Remove o listener quando o componente desmontar
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isPaused && audioPlayer.current.currentTime <= durationInSeconds)
        setCurrentTime(formatTime(audioPlayer.current.currentTime));
      barProgress.current.style.setProperty(
        "--_progress",
        (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%"
      );
    }, 250);
    return () => {
      clearInterval(intervalId);
    };
  }, [isPaused]);

  // console.log(audio);
  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${previousSongId}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>
        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPaused ? faCirclePlay : faCirclePause}
          onClick={() => {
            setIsPaused(!isPaused);
            isPaused ? audioPlayer.current.play() : audioPlayer.current.pause();
          }}
        />
        <Link to={`/song/${nextSongId}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>
      <div className="player__progress">
        <p className="player__numbers">{currentTime}</p>
        <div className="player__bar">
          <div ref={barProgress} className="player__bar-progress"></div>
        </div>
        <p className="player__numbers">{duration}</p>
      </div>
      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;
