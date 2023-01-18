import ReactPlayer from 'react-player'

const MyComponent = (props) => {
  const videoId = props.videoId;
  return (
    <ReactPlayer
      url={`https://www.youtube.com/watch?v=${videoId}`}
      controls
    />
  )
}
export default MyComponent;
