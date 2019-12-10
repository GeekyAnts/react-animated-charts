import * as d3 from 'd3';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react'

import { bubbleChart } from "../utils/data"

let i = 0;
let linkArray = [];
const { innerWidth: widthW, innerHeight: heightW } = window;

const BubbleChart = props => {
    const diva = useRef(null);
    const {
        drag,
        height,
        width,
        linkFactor,
        noOfNode,
        alphaDecay,
        animationDelay,
        animationStart,
        strength,
        distance
    } = props;

    let nodes = [];
    let links = [];
    for (let j = 0; j < noOfNode; j++) { nodes.push({ "num": j, "id": j }) };

    nodes.map((node, indexA) => links.push({ "target": (indexA + 1) < noOfNode ? indexA + 1 : 0, "source": indexA }));
    nodes.map((node, indexA) => links.push({ "target": (indexA + linkFactor) < noOfNode ? indexA + linkFactor : indexA - (noOfNode - linkFactor), "source": indexA }));

    const graph = {
        links: links,
        nodes: nodes
    };

    useEffect(() => {
        const canvas = d3.select(diva.current);

        const svg = canvas.create('svg')
            .attr("viewBox", [0, 0, width, height])
            .attr("font-size", 10)
            .attr("font-family", "sans-serif")
            .attr("text-anchor", "middle");

        const leaf = svg.selectAll("g")
            .data(bubbleChart)
            .join("g")
            .attr("transform", d => `translate(${d.x + 1},${d.y + 1})`);

        leaf.append("circle")
            .attr("id", d => console.log(d))
            .attr("r", d => d.r)
            .attr("fill-opacity", 0.7)
        // .attr("fill", d => color(d.data.group));

        // let context = diva.current.getContext('2d');

        // const dragstarted = () => {
        //     if (!d3.event.active) simulation.alphaTarget(0.3).restart();
        //     d3.event.subject.fx = d3.event.subject.x;
        //     d3.event.subject.fy = d3.event.subject.y;
        // }

        // const dragged = () => {
        //     d3.event.subject.fx = d3.event.x;
        //     d3.event.subject.fy = d3.event.y;
        // }

        // const dragended = () => {
        //     if (!d3.event.active) simulation.alphaTarget(0);
        //     d3.event.subject.fx = null;
        //     d3.event.subject.fy = null;
        // }

        // const drawLink = (d) => {
        //     context.moveTo(d.source.x, d.source.y);
        //     context.lineTo(d.target.x, d.target.y);
        // }

        // const drawNode = (d) => {
        //     context.moveTo(d.x + 3, d.y);
        //     context.arc(d.x, d.y, 3, 0, 2 * Math.PI);

        // }
        // const simulation = d3.forceSimulation()
        //     .alphaDecay(alphaDecay)
        //     .alphaMin(1)
        //     .alphaTarget(0)
        //     .force("charge", d3.forceManyBody())
        //     .force("link", d3.forceLink(graph)
        //         .id(d => d.index)
        //         .strength(strength)
        //         .distance(distance)
        //     )
        //     .force("center", d3.forceCenter(width / 2, height / 2))
        //     .force("collide", d3.forceCollide().strength(0));

        // const ticked = () => {
        //     context.clearRect(0, 0, width, height);
        //     context.beginPath();
        //     graph.links.forEach(drawLink);
        //     context.strokeStyle = "#aaa";
        //     context.stroke();
        //     context.beginPath();
        //     graph.nodes.forEach(drawNode);
        //     context.fill();
        //     context.strokeStyle = "#fff";
        //     context.stroke();
        // }

        // const dragsubject = () => {
        //     return simulation.find(d3.event.x, d3.event.y);
        // }

        // simulation
        //     .nodes(graph.nodes)
        //     .on("tick", ticked);

        // d3.interval(() => {
        //     if (i > noOfNode - 1) return;
        //     linkArray.push(graph.links[i]);
        //     i++;
        //     simulation.force("link")
        //         .links(linkArray);
        // }, 0, d3.now() + 0);

        // d3.interval(() => {
        //     if (i > graph.links.length - 1) return;
        //     linkArray.push(graph.links[i]);
        //     i++;
        //     simulation.force("link")
        //         .links(linkArray);
        // }, animationDelay, d3.now() + animationStart);

        // drag && canvas.call(d3.drag()
        //     .subject(dragsubject)
        //     .on("start", dragstarted)
        //     .on("drag", dragged)
        //     .on("end", dragended));

    })

    return (<canvas ref={diva} width={width} height={height} />);
}

BubbleChart.propTypes = {
    drag: PropTypes.bool,
    height: PropTypes.number,
    width: PropTypes.number,
    linkFactor: PropTypes.number,
    noOfNode: PropTypes.number,
    alphaDecay: PropTypes.number,
    animationDelay: PropTypes.number,
    animationStart: PropTypes.number,
    strength: PropTypes.number,
    distance: PropTypes.number
};

BubbleChart.defaultProps = {
    drag: false,
    height: heightW,
    width: widthW,
    linkFactor: 10,
    noOfNode: 50,
    alphaDecay: 0,
    animationDelay: 100,
    animationStart: 0,
    strength: 0.4,
    distance: 10
};

export default BubbleChart;