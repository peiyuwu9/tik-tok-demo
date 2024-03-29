import React, { useState, useRef } from "react";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";
import "./Video.css";

function Video({ channel, detail, likes, messages, shares, song, url }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoClick = () => {
    if (!playing) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <div className="video">
        <video
          className="video-player"
          loop
          onClick={onVideoClick}
          ref={videoRef}
          src={url}
        />
        <VideoFooter channel={channel} detail={detail} song={song} />
        <VideoSidebar likes={likes} messages={messages} shares={shares} />
        {!playing && (
          <div className="play-button">
            <PlayCircleOutlineIcon fontSize="large" htmlColor="white" />
          </div>
        )}
      </div>
    </>
  );
}

export default Video;
