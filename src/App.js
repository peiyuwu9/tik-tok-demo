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
    // BEM convention
    <div className="app">
      <div className="app-videos">
        {videos.map(
          ({ channel, detail, likes, messages, shares, song, url }) => (
            <Video
              channel={channel}
              detail={detail}
              likes={likes}
              messages={messages}
              shares={shares}
              song={song}
              url={url}
            />
          )
        )}
      </div>
    </div>
  );
}

export default App;
