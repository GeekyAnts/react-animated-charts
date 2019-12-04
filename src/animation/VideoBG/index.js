import Plx from "react-plx";
import React, { Component } from "react";

import videoURL from "../../assets/Images/home_video.mp4";

class VideoBG extends Component {
    render() {
        const transitionState = [{
            start: 0,
            duration: 1000,
            easing: "easeInOut",
            properties: [{
                startValue: 0,
                endValue: 5,
                property: 'rotate',
            },
            {
                startValue: 1.1,
                endValue: 2,
                property: 'scale',
            },
            {
                startValue: 2,
                endValue: 5,
                property: 'blur',
            },
            {
                startValue: 0.4,
                endValue: 0.4,
                property: 'brightness',
            },
            ],
        }]
        return (
            <Plx
                tagName="video"
                className="bg-video"
                parallaxData={transitionState}
                loop autoPlay muted
            >
                <source src={videoURL} type="video/mp4" />
                <source src={videoURL} type="video/ogg" />
            </Plx>
        );
    }
}

export default VideoBG;
