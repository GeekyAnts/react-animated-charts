import React from 'react';

import ForceDirectedGraph from '../../ForcedGraph/ForceDirectedGraph';
import HamiltonianGraph from "../../ForcedGraph/HamiltonianGraph"
import BubbleChart from "../../BubbleChart/BubbleChart.js";
import CircleFlow from "../../ParticalAnimation/CircleFlow.js";
import CircleAnimation from "../../ParticalAnimation/CircleAnimation"
const { innerWidth: widthW, innerHeight: heightW } = window;
const Root = () => {
    return (
        <div>
            <CircleFlow
                height={600}                // Height of Graph (Number)
                width={500}                 // Width of Graph (Number)
                backgroundColor={'black'}   // Background Color (String)
                duration={2000}             // Animation Duration (Time in ms - Number)
                radius={100}                // Circle Radius (Number)
            />
        </div>)
}
export default Root;
