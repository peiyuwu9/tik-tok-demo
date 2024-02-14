import React, { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import db from "./firebase";

import Video from "./components/Video";
import "./App.css";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      const querySnapshot = await getDocs(collection(db, "videos"));
      setVideos(querySnapshot.docs.map((doc) => doc.data()));
    };
    fetchVideos();
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
