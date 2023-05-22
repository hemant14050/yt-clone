import React from "react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ video }) => {
  return (
    <div className="video-player">
      <ReactPlayer url={video.submission.mediaUrl} controls={true} />
      <div className="details">
        <div className="author">
          <img src={video.creator.pic} alt={video.creator.handle} />
        </div>
        <div className="title">
          <h3>{video.submission.title}</h3>
          <a href={video.submission.hyperlink}>{video.creator.handle}</a>
          <span> 2M Views • 3 Months Ago </span>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
