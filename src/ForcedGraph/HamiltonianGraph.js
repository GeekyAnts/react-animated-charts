import * as d3 from 'd3';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react'

let i = 0;
let linkArray = [];
const { innerWidth: widthW, innerHeight: heightW } = window;

const HamiltonianGraph = props => {
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
        distance,
        zIndex,
        nodeRadius,
        nodeColour,
        linkStroke,
        clrAnimationCenter,
        colorAnimation,
        linkAniClr,
        nodeAniClr,
        linkOpacity,
        velocityDecay,
        dragEventCallBack,
        alphaMin
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
        const canvas = d3.select(diva.current)
            .style("width", width + 'px')
            .style("height", height + 'px')
            .style('background-color', "transparent")
            .style('position', 'absolute');

        const svg = canvas.append("svg")
            .attr("viewBox", [0, 0, width, height]);

        const simulation = d3.forceSimulation()
            .alphaDecay(alphaDecay)
            .alphaMin(alphaMin)
            .alphaTarget(0)
            .velocityDecay(velocityDecay)
            .force("charge", d3.forceManyBody())
            .force("link", d3.forceLink(graph)
                .id(d => d.index)
                .strength(strength)
                .distance(distance)
            )
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
            colorAnimation && link.transition()
                .duration(50)
                .ease(d3.easeCircleInOut)
                .attr("stroke", function (d) { if ((d.source.x > clrAnimationCenter) || (d.target.x > clrAnimationCenter)) return linkAniClr; else return linkStroke });

            node.attr("cx", d => d.x)
                .attr("cy", d => d.y);
            colorAnimation && node.transition()
                .duration(50)
                .ease(d3.easeCircleInOut)
                .attr("fill", function (d) { if (d.x > clrAnimationCenter) return nodeAniClr; else return nodeColour });
        }

        simulation
            .nodes(graph.nodes)
            .on("tick", ticked);

        d3.interval(() => {
            if (i > noOfNode - 1) return;
            linkArray.push(graph.links[i]);
            i++;
            simulation.force("link")
                .links(linkArray);
        }, 0, d3.now() + 0);

        d3.interval(() => {
            if (i > graph.links.length - 1) return;
            linkArray.push(graph.links[i]);
            i++;
            simulation.force("link")
                .links(linkArray);
        }, animationDelay, d3.now() + animationStart);

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
            dragEventCallBack(d3.event)
            d3.event.subject.fx = null;
            d3.event.subject.fy = null;
        }

        const dragSubject = () => {
            return simulation.find(d3.event.x, d3.event.y);
        }

        drag && canvas.call(d3.drag()
            .subject(dragSubject)
            .on("start", dragStarted)
            .on("drag", dragged)
            .on("end", dragEnded));

    })

    return (<div style={{ zIndex: zIndex }} ref={diva} />);
}

HamiltonianGraph.propTypes = {
    drag: PropTypes.bool,
    height: PropTypes.any,
    width: PropTypes.any,
    linkFactor: PropTypes.number,
    noOfNode: PropTypes.number,
    alphaDecay: PropTypes.number,
    animationDelay: PropTypes.number,
    animationStart: PropTypes.number,
    strength: PropTypes.number,
    distance: PropTypes.number,
    zIndex: PropTypes.number,
    nodeRadius: PropTypes.number,
    nodeColour: PropTypes.string,
    linkStroke: PropTypes.number,
    clrAnimationCenter: PropTypes.number,
    colorAnimation: PropTypes.bool,
    linkAniClr: PropTypes.string,
    nodeAniClr: PropTypes.string,
    linkOpacity: PropTypes.number,
    velocityDecay: PropTypes.number,
    dragEventCallBack: PropTypes.func,
    alphaMin: PropTypes.number,
};

HamiltonianGraph.defaultProps = {
    drag: true,
    height: heightW,
    width: widthW,
    linkFactor: 10,
    noOfNode: 50,
    alphaDecay: 0,
    animationDelay: 100,
    animationStart: 0,
    strength: 0.4,
    distance: 10,
    zIndex: 0,
    nodeRadius: 3,
    nodeColour: '#121212',
    linkStroke: '#cdcdcd',
    clrAnimationCenter: widthW / 2,
    colorAnimation: false,
    linkAniClr: '#fff',
    nodeAniClr: '#fff',
    linkOpacity: 1,
    velocityDecay: 0.5,
    dragEventCallBack: function () { return; },
    alphaMin: 1
};

export default HamiltonianGraph;