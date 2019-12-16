import React from 'react';

import ForceDirectedGraph from '../../ForcedGraph/ForceDirectedGraph';
import HamiltonianGraph from "../../ForcedGraph/HamiltonianGraph"
import BubbleChart from "../../BubbleChart/BubbleChart.js";
import CircleFlow from "../../ParticalAnimation/CircleFlow.js";
const Root = () => {
    return (
        <div>
            <HamiltonianGraph
            />
        </div>)
}
export default Root;
