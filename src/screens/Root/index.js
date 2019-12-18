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

    const dragCallBack = (value, simulation) => {
        console.log(value, simulation, "value")
        // if () {
        // d3.select('div').select("svg")
        //     .attr('transform', "translate(200,200)")
        simulation.force("center", d3.forceCenter(700, 700))
        // simulation.alphaTarget(1)
        // .attr("viewBox", [400, 400, widthW + 500, heightW + 500]);
        // .attr('x', 500)
        // .attr('y', 500)
        // .style('position', 'absolute')
    }
    useEffect(() => {
        // d3.select(graph.current).select('div').select("svg").selectAll('g')
        //     .attr('transform', "translate(200,200)")
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
    })
    const valuefun = (value) => {
        console.log(value, "Value")
    }
    return (
        <div>
            <HamiltonianGraph
                drag={true}
                nodeRadius={10}
                distance={70}
                dragEventCallBack={dragCallBack}
            />
        </div>)
}
export default Root;
