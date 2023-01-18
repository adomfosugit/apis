import React, { useEffect, useRef } from "react";

const VideoCard = ({ videoId }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  
    if (window.YT) {
      const player = new window.YT.Player(playerRef.current, {
        videoId,
        width: 'auto',
        height: 'auto',
        events: {
          onReady: (event) => event.target.playVideo(),
        },
      });
  
      return () => {
        player.destroy();
      };
    }
  }, [videoId]);

  return (
    <div>
      <div ref={playerRef} />
    </div>
  );
};


export default VideoCard;
