import React from "react";
import Plyr from "plyr-react";
import "plyr/dist/plyr.css";
import "./player.css";
const videoSrc = {
  type: "video",
  sources: [
    {
      src: "2UP8MYaj-Q4",
      provider: "youtube",
      size: 720
    }
  ]
 
};
const options= {
  
  quality:{ default: 1080, options: [1080, 720] ,
    forced: true,        
     },
  controls: ['play','forward', 'progress','mute', 'volume', 'fullscreen','settings'],
  settings:['quality','speed','loop'],
  
}

// learn more https://github.com/sampotts/plyr#the-source-setter

export default function Player(props) {
  return (
    <div className="player"
    >
      <MyComponent a= {props.a} />
    </div>
  );
}

export const MyComponent = (props) => {
  return (
    <>
      <Plyr source={{
  type: "video",
  sources: [
    {
      src: props.a,
      provider: "youtube"
    }
  ]
 
}} options={options}/>
    </>
  );
};
