import React from 'react';

import ForceDirectedGraph from '../../ForcedGraph/ForceDirectedGraph';
import BubbleChart from "../../BubbleChart/BubbleChart.js";
import CircleFlow from "../../ParticalAnimation/CircleFlow.js";
const Root = () => {
    return (
        <div>
            <ForceDirectedGraph
                drag={true}
            />
        </div>)
}
export default Root;
