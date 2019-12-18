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
        distance,
        nodeRadius,
        nodeColour,
        linkStroke,
        linkOpacity,
        toolTip,
        toolTipClass
    } = props

    const graph = {
        links: links,
        nodes: nodes
    }

    useEffect(() => {
        const canvas = d3.select(diva.current)
            .style("width", width + 'px')
            .style("height", height + 'px')
            .style('background-color', "transparent")
            .style('position', 'absolute');

        const svg = canvas.append("svg")
            .attr("viewBox", [0, 0, width, height]);

        const tt = canvas.append("div")
            .style("opacity", 0)
            .style("pointer-events", 'none')
            .style('padding', '8px')
            .style('color', '#fff')
            .style('font-family', 'sans-serif')
            .style('font-size', '12px')
            .style('background-color', "#121212")
            .style('position', 'absolute')
            .style('border-radius', '3px')
            .style('class', toolTipClass);

        const dragStarted = () => {
            if (!d3.event.active) simulation.alphaTarget(0.3).restart();
            d3.event.subject.fx = d3.event.subject.x;
            d3.event.subject.fy = d3.event.subject.y;
        }

        const dragged = () => {
            d3.event.subject.fx = d3.event.x;
            d3.event.subject.fy = d3.event.y;
        }

        const dragEnded = () => {
            if (!d3.event.active) simulation.alphaTarget(0);
            d3.event.subject.fx = null;
            d3.event.subject.fy = null;
        }

        const dragSubject = () => {
            return simulation.find(d3.event.x, d3.event.y, nodeRadius + 10);
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

        const link = svg.append("g")
            .attr("stroke", linkStroke)
            .attr("stroke-opacity", linkOpacity)
            .selectAll("line")
            .data(graph.links)
            .join("line")
            .attr("stroke-width", d => Math.sqrt(d.value));

        const node = svg.append("g")
            .selectAll("circle")
            .data(graph.nodes)
            .join("circle")
            .attr("r", nodeRadius)
            .attr("fill", nodeColour);

        const ticked = () => {
            link.attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            node.attr("cx", d => d.x)
                .attr("cy", d => d.y);
            toolTip && node.on("mouseover", function (d) {
                tt.transition()
                    .duration(200)
                    .style("opacity", 0.9);
                tt.html(d.tag + " (" + d.id + ")")
                    .style("left", (d3.event.pageX + 5) + "px")
                    .style("top", (d3.event.pageY - 20) + "px");
            }).on("mouseout", function (d) {
                tt.transition()
                    .duration(500)
                    .style("opacity", 0);
            });
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
            .subject(dragSubject)
            .on("start", dragStarted)
            .on("drag", dragged)
            .on("end", dragEnded));

    })

    return (<div ref={diva} />);
}

ForceDirectedGraph.propTypes = {
    drag: PropTypes.bool,
    height: PropTypes.any,
    width: PropTypes.any,
    links: PropTypes.array,
    nodes: PropTypes.array,
    alphaDecay: PropTypes.number,
    animationDelay: PropTypes.number,
    animationStart: PropTypes.number,
    strength: PropTypes.number,
    distance: PropTypes.number,
    nodeRadius: PropTypes.number,
    nodeColour: PropTypes.string,
    linkStroke: PropTypes.string,
    linkOpacity: PropTypes.number,
    toolTip: PropTypes.bool,
    toolTipClass: PropTypes.any
};

ForceDirectedGraph.defaultProps = {
    drag: true,
    height: heightW,
    width: widthW,
    links: linkTest,
    nodes: nodeTest,
    alphaDecay: 0.01,
    animationDelay: 0,
    animationStart: 0,
    strength: 0.4,
    distance: 10,
    nodeRadius: 3,
    nodeColour: '#121212',
    linkStroke: '#cdcdcd',
    linkOpacity: 1,
    toolTip: true,
    toolTipClass: {}
};

export default ForceDirectedGraph;