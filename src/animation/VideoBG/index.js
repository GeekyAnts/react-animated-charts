import React, { Component } from "react";

import videoURL from "../../assets/Images/home_video.mp4";

class VideoBG extends Component {
    render() {
        return (
            <video className="bg-video" loop autoPlay muted>
                <source src={videoURL} type="video/mp4" />
                <source src={videoURL} type="video/ogg" />
            </video>
        );
    }
}

export default VideoBG;
