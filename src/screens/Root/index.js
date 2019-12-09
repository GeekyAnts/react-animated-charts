import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react'
import AnimatedGraph from "../AnimatedGraph";
let graph = {}
let nodeA = [];
for (let j = 0; j < 50; j++) { nodeA.push({ "country": j, "code": j }) }
graph.nodes = nodeA
const linkTest = [];
nodeA.map((node, indexA) => linkTest.push({ "target": (indexA + 1) < graph.nodes.length ? indexA + 1 : 0, "source": indexA }))
nodeA.map((node, indexA) => linkTest.push({ "target": (indexA + 10) < graph.nodes.length ? indexA + 10 : indexA - (graph.nodes.length - 10), "source": indexA }))
let i = 0
const Root = () => {
    const diva = useRef(null);
    const leftCont = useRef(null);
    let linksA = [];
    const { innerWidth: width, innerHeight: height } = window;
    useEffect(() => {
        const leftCell = d3.select(leftCont.current)
            .style("width", width / 2 + 'px')
            .style("height", height + 'px')
            .style("background-color", "aqua");

        const update = () => {
            leftCell.style("width", d => d.x_axis);
        }
        leftCell.call(d3.drag().on("drag", d => {
            console.log(d, "ddd")
            d.x_axis = d3.event.x
            d.y_axis = d3.event.y
        })
            .on("start.update drag.update end.update", update))

    })

    return (
        <div>
            <AnimatedGraph />
            <div ref={leftCont} />
        </div>)
}
export default Root;