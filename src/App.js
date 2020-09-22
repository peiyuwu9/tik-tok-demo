import React, { useState, useEffect } from "react";
import Video from "./components/Video";
import "./App.css";

import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    db.collection("videos").onSnapshot((snapshot) => {
      setVideos(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="app">
      <div className="app-videos">
        {videos.map(
          ({ channel, detail, likes, messages, shares, song, url }, index) => (
            <Video
              channel={channel}
              detail={detail}
              likes={likes}
              messages={messages}
              shares={shares}
              song={song}
              url={url}
              key={index}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
