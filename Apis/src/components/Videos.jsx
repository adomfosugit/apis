import React from 'react'

import MyComponent from './VideoCard';

const Videos = ({ videos }) => {
  if (videos.length > 0) {
    const [{ video: { videoId } }] = videos;
    console.log(videoId);
    return (
      <div>
        
        <MyComponent videoId= {videoId}/>

      </div>
    );
  } else {
    return <div>No videos available</div>;
  }
};


export default Videos