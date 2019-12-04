import Plx from "react-plx";
import React, { Component } from "react";

import { DisperseWord } from "../../animation";
import logoSingle from "../../assets/Images/ant.svg";

class HeadComponent extends Component {
    render() {
        const titleData = [
            {
                start: 'self',
                startOffset: 50,
                duration: 200,
                // easing: "easeInOut",
                properties: [
                    {
                        startValue: 1,
                        endValue: 10,
                        property: 'scale',
                    },
                ],
            },
        ];

        return (
            <div className="head-container" >
                <div>
                    {/* <Plx
                        tagName='h1'
                        className='Examples'
                        parallaxData={titleData}
                    >
                        <img src={logoSingle} className="head-image" />
                    </Plx> */}
                    <DisperseWord />
                </div>
            </div>
        );
    }
}

export default HeadComponent;
