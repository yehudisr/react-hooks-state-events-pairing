import video from "../data/video.js";

import VideoCard from "./VideoCard.js";



function App() {
  console.log("Here's your data:", video);

  return (
    <>
    <VideoCard video={video}/>
   
    </>
  );
}

export default App;
