import * as d3 from 'd3';
import React, { useEffect, useRef } from 'react'

let graph = {}
let nodeA = [];
for (let j = 0; j < 50; j++) { nodeA.push({ "country": j, "code": j }) }
graph.nodes = nodeA;
const linkTest = [];
nodeA.map((node, indexA) => linkTest.push({ "target": (indexA + 1) < graph.nodes.length ? indexA + 1 : 0, "source": indexA }))
nodeA.map((node, indexA) => linkTest.push({ "target": (indexA + 10) < graph.nodes.length ? indexA + 10 : indexA - (graph.nodes.length - 10), "source": indexA }))
let i = 0
const HamiltonianGraph = props => {
    const diva = useRef(null);
    let linksA = [];
    const { innerWidth: width, innerHeight: height } = window;
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
            .alphaDecay(0)
            .alphaMin(1)
            // .velocityDecay(0.4)
            .alphaTarget(0)
            .force("charge", d3.forceManyBody())
            .force("link", d3.forceLink(graph)
                .id(d => d.index)
                .strength(0.4)
                .distance(20)
            )
            .force("center", d3.forceCenter(width / 2, height / 2))
            .force("collide", d3.forceCollide().strength(0));
        const ticked = () => {
            context.clearRect(0, 0, width, height);

            context.beginPath();
            linksA.forEach(drawLink);
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
            if (i > graph.nodes.length - 1) return;
            linksA.push(linkTest[i]);
            i++;
            simulation.force("link")
                .links(linksA).distance(20);
        }, 0, d3.now() + 0);
        d3.interval(() => {
            if (i > linkTest.length - 1) return;
            linksA.push(linkTest[i]);
            i++;
            simulation.force("link")
                .links(linksA).distance(20);
        }, 100, d3.now() + 100);

        canvas.call(d3.drag()
            .subject(dragsubject)
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    })

    return (<canvas ref={diva} width={width} height={height} />);
}
export default HamiltonianGraph;