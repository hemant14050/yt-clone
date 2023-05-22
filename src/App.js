import React, { useState, useEffect } from 'react';
import axios from "axios";
import VideoThumbnail from './components/VideoThumbnail';
import VideoPlayer from './components/VideoPlayer';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    fetchVideos(5); // Fetch initial videos
  }, []);

  const fetchVideos = async (page) => {
    const {data} = await axios.get(`https://internship-service.onrender.com/videos?page=${page}`);
    console.log(data);
    const videos = data.data.posts;
    setVideos(videos);
    console.log(videos);
  };

  const handleThumbnailClick = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="app">
      <div className="videos">
        {videos.map((video, index) => (
          <VideoThumbnail key={video.postId} video={video} onClick={handleThumbnailClick} />
        ))}
      </div>
      <div className="video-container">
        {selectedVideo ? <VideoPlayer video={selectedVideo} /> : <p>No video selected.</p>}
      </div>
    </div>
  );
};

export default App;
