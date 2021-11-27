import React, { Component } from "react";
import video from "../assets/Platform.mp4";
import video2 from "../assets/angular-project.mp4";

function Video (props) {
  const name = props.name;
  if(name=="Platform"){
    return <video width="100%" autoPlay muted loop src={video} />;
  }else {
    return <video  width="100%" autoPlay muted loop src={video2} />
  }
}
  /*
  class Video extends Component {
  render() {
    return (
      <div className="video">
        {name==""?(
          <video width="100%" autoPlay muted loop src={video} />
        ) : (
          <video width="100%" autoPlay muted loop src={video2} />
        )}
        
      </div> 
    );
  }
}

export default Video;

*/
export default Video;