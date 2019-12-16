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
            <BubbleChart
                height={700}                // Height of Graph (Number)
                width={700}                 // Width of Graph (Number)
                tooltipSize={10}            // Tooltip text Size (Number)
                tooltipColor={'black'}      // Tooltip text Color (String)
                tooltipFont={"sans-serif"}  // Tooltip text Font (String)
                // chartData={[]}              // Chart Data (Array)
                // colourSet={[]}              // Chart Colour set (Array)
                fillOpacity={0.7}           // Fill Opacity (Number Range - [0,1])
            />
        </div>)
}
export default Root;
