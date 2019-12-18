import React, { useEffect, useRef } from 'react';
import * as d3 from "d3";
import { HamiltonianGraph } from "react-animated-web";

const { innerWidth: widthW, innerHeight: heightW } = window;

const LandingPage = () => {
    const left = useRef(null);
    const right = useRef(null);
    useEffect(() => {
        d3.select(left.current)
            .style('height', heightW + 'px')
            .style('width', widthW / 2 + 'px')
            .style('position', 'absolute')
            .style('background', "#ffffff");

        d3.select(right.current)
            .style('height', heightW + 'px')
            .style('width', widthW / 2 + 'px')
            .style('position', 'absolute')
            .style('background', "#121212")
            .style('left', widthW / 2 + 'px');
    })
    return (
        <div>
            <div ref={right} />
            <div ref={left} />
            <HamiltonianGraph
                drag={true}
                noOfNode={50}
                linkFactor={10}
                alphaDecay={0}
                velocityDecay={0.1}
                animationDelay={100}
                animationStart={100}
                height={heightW}
                width={widthW}
                strength={0.4}
                distance={70}
                zIndex={1}
                nodeRadius={10}
                nodeColour={'#121212'}
                linkStroke={'#121212'}
                linkOpacity={1}
                colorAnimation={true}
                clrAnimationCenter={widthW / 2}
                linkAniClr={'#fff'}
                nodeAniClr={'#fff'}
            />
        </div>
    );
}

export default LandingPage;