import * as d3 from 'd3';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react'

import { nodeTest, linkTest } from "../utils/data";
const { innerWidth: widthW, innerHeight: heightW } = window;

let i = 0;
let linksRender = [];

const ForceDirectedGraph = props => {
    const diva = useRef(null);
    const {
        drag,
        height,
        width,
        links,
        nodes,
        alphaDecay,
        animationDelay,
        animationStart,
        strength,
        distance
    } = props

    const graph = {
        links: links,
        nodes: nodes
    }

    useEffect(() => {
        const canvas = d3.select(diva.current)
            .attr("width", width)
            .attr("height", height)
            .style("background-color", "transparent")
            .style('position', 'absolute');
        let context = diva.current.getContext('2d');

        const dragstarted = () => {
            if (!d3.event.active) simulation.alphaTarget(0.3).restart();
            d3.event.subject.fx = d3.event.subject.x;
            d3.event.subject.fy = d3.event.subject.y;
        }

        const dragged = () => {
            d3.event.subject.fx = d3.event.x;
            d3.event.subject.fy = d3.event.y;
        }

        const dragended = () => {
            if (!d3.event.active) simulation.alphaTarget(0);
            d3.event.subject.fx = null;
            d3.event.subject.fy = null;
        }

        const drawLink = (d) => {
            context.moveTo(d.source.x, d.source.y);
            context.lineTo(d.target.x, d.target.y);
        }

        const drawNode = (d) => {
            context.moveTo(d.x + 3, d.y);
            context.arc(d.x, d.y, 3, 0, 2 * Math.PI);

        }
        const simulation = d3.forceSimulation()
            .alphaDecay(alphaDecay)
            .force("charge", d3.forceManyBody())
            .force("link", d3.forceLink(graph)
                .id(d => d.index)
                .strength(strength)
                .distance(distance))
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force("collide", d3.forceCollide().strength(0));

        const ticked = () => {
            context.clearRect(0, 0, width, height);
            context.beginPath();
            graph.links.forEach(drawLink);
            context.strokeStyle = "#aaa";
            context.stroke();
            context.beginPath();
            graph.nodes.forEach(drawNode);
            context.fill();
            context.strokeStyle = "#fff";
            context.stroke();
        }

        const dragsubject = () => {
            return simulation.find(d3.event.x, d3.event.y);
        }

        simulation
            .nodes(graph.nodes)
            .on("tick", ticked);

        d3.interval(() => {
            if (i > graph.links.length - 1) return;
            linksRender.push(graph.links[i]);
            i++;
            simulation.force("link")
                .links(linksRender);
        }, animationDelay, d3.now() + animationStart);

        drag && canvas.call(d3.drag()
            .subject(dragsubject)
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    })

    return (<canvas ref={diva} width={width} height={height} />);
}

ForceDirectedGraph.propTypes = {
    drag: PropTypes.bool,
    height: PropTypes.number,
    width: PropTypes.number,
    links: PropTypes.array,
    nodes: PropTypes.array,
    alphaDecay: PropTypes.number,
    animationDelay: PropTypes.number,
    animationStart: PropTypes.number,
    strength: PropTypes.number,
    distance: PropTypes.number
};

ForceDirectedGraph.defaultProps = {
    drag: false,
    height: heightW,
    width: widthW,
    links: linkTest,
    nodes: nodeTest,
    alphaDecay: 0.01,
    animationDelay: 0,
    animationStart: 0,
    strength: 0.4,
    distance: 10
};

export default ForceDirectedGraph;