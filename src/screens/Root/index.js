import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import ForceDirectedGraph from '../../ForcedGraph/ForceDirectedGraph';
import HamiltonianGraph from "../../ForcedGraph/HamiltonianGraph"
import BubbleChart from "../../BubbleChart/BubbleChart.js";
import CircleFlow from "../../ParticalAnimation/CircleFlow.js";
import CircleAnimation from "../../ParticalAnimation/CircleAnimation"
const { innerWidth: widthW, innerHeight: heightW } = window;
const Root = () => {
    const [node, setNode] = useState(50);
    const [link, setLink] = useState(10);
    const [distance, setDistance] = useState(70);

    // useEffect(() => {

    //     d3.select('body').selectAll('svg').on('click', (d) => {
    //         d3.select('body').selectAll('svg').remove()

    //         // console.log("DDADAD", d)
    //         // d3.forceSimulation()
    //         //     .force("center", d3.forceCenter(100, 100))
    //         //     .force("collide", d3.forceCollide().strength(0));
    //         // d3.select(right.current)
    //         //     .style('background', "red")
    //         //     .transition()
    //         //     .duration(1000)
    //         //     .style('left', widthW / 2 - 200 + 'px');
    //         // setSetaa(!setaa)
    //         setNode(100)
    //         setLink(10)
    //         setDistance(100)
    //         // d3.select("svg").selectAll("g").selectAll('line')
    //         //     .attr("x1", d => d.source.x + Math.random() * 100)
    //         //     .attr("y1", d => d.source.y + Math.random() * 100)
    //         //     .attr("x2", d => d.target.x + Math.random() * 100)
    //         //     .attr("y2", d => d.target.y + Math.random() * 100)
    //         // d3.select("svg").selectAll("g").selectAll('circle')
    //         //     .attr("cx", d => { console.log(d.x + Math.random() * 1000, d.x); return d.x + Math.random() * 100 })
    //         //     .attr("cy", d => d.y + Math.random() * 100);
    //         // d3.forceSimulation()
    //         //     .force("link", d3.forceLink()
    //         //         // .strength()
    //         //         .distance(100)
    //         //     )
    //     })
    // })
    const valuefun = (value) => {
        console.log(value, "Value")
    }
    return (
        <div>
            <HamiltonianGraph
                drag={true}
                noOfNode={node}
                linkFactor={link}
                alphaDecay={0}
                velocityDecay={0.1}
                animationDelay={100}
                animationStart={100}
                height={heightW}
                width={widthW}
                strength={0.4}
                distance={distance}
                zIndex={1}
                nodeRadius={10}
                nodeColour={'#121212'}
                linkStroke={'#121212'}
                linkOpacity={1}
                dragEventCallBack={valuefun}
            />
        </div>)
}
export default Root;
