import React from "react";
import Ticker from "react-ticker";
import "./VideoFooter.css";

import MusicNoteIcon from "@material-ui/icons/MusicNote";

function VideoFooter({ channel, detail, song }) {
  return (
    <div className="video-footer">
      <div className="video-footer-text">
        <h3>@{channel}</h3>
        <p>{detail}</p>
        <div className="video-footer-ticker">
          <MusicNoteIcon className="video-footer-icon" />
          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>{song}</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="video-footer-record"
        src="https://static.thenounproject.com/png/934821-200.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
