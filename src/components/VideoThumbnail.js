import React from "react";

const VideoThumbnail = ({ video, onClick }) => {
  return (
    <div className="video" onClick={() => onClick(video)}>
      <div className="thumbnail">
        <img src={video.submission.thumbnail} alt={video.submission.title} />
      </div>

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

export default VideoThumbnail;
