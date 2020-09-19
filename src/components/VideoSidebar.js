import React, { useState } from "react";
import "./VideoSidebar.css";

import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MessageIcon from "@material-ui/icons/Message";
import ShareIcon from "@material-ui/icons/Share";

function VideoSidebar({ likes, messages, shares }) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikedCount] = useState(likes);
  const favoriteIcon = liked ? <FavoriteIcon /> : <FavoriteBorderIcon />;
  const likeTheVideo = () => {
    if (liked) {
      setLiked(false);
      setLikedCount(likeCount - 1);
    } else {
      setLiked(true);
      setLikedCount(likeCount + 1);
    }
  };
  return (
    <div className="video-sidebar">
      <div className="video-sidebar-button" onClick={likeTheVideo}>
        {favoriteIcon}
        <p>{likeCount}</p>
      </div>
      <div className="video-sidebar-button">
        <MessageIcon />
        <p>{messages}</p>
      </div>
      <div className="video-sidebar-button">
        <ShareIcon />
        <p>{shares}</p>
      </div>
    </div>
  );
}

export default VideoSidebar;
