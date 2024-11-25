import React, { useRef, useState } from "react";

function CustomVideoPlayer({ src }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
    }
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h1>Hover to Play Video</h1>
      <video
        ref={videoRef}
        width="640"
        height="360"
        style={{ display: "block", margin: "0 auto", cursor: "pointer" }}
        controls
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div>
        <button onClick={handleMute}>Mute/Unmute</button>
      </div>
    </div>
  );
}

export default CustomVideoPlayer;
