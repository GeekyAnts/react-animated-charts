import React, { useEffect, useRef, useState } from 'react';
import * as d3 from "d3";

let i = 0;
let linkArray = [];
const { innerWidth: widthW, innerHeight: heightW } = window;

const LandingPage = () => {
    const left = useRef(null);
    const right = useRef(null);
    const main = useRef(null);
    const [mid, setMid] = useState(widthW / 2);

    let nodes = [];
    let links = [];
    for (let j = 0; j < 50; j++) { nodes.push({ "num": j, "id": j }) };

    nodes.map((node, indexA) => links.push({ "target": (indexA + 1) < 50 ? indexA + 1 : 0, "source": indexA }));
    nodes.map((node, indexA) => links.push({ "target": (indexA + 10) < 50 ? indexA + 10 : indexA - (50 - 10), "source": indexA }));
    const graph = {
        links: links,
        nodes: nodes
    };

    useEffect(() => {
        const canvas = d3.select(main.current)
            .style("width", widthW + 'px')
            .style("height", heightW + 'px')
            .style('background', "transparent")
            .style('position', 'absolute');

        const canvasLeft = d3.select(left.current)
            .style('height', '100%')
            .style('width', widthW / 2 + 'px')
            .style('position', 'absolute')
            .style('background', "#ffffff");

        const canvasRight = d3.select(right.current)
            .style('height', '100%')
            .style('width', widthW / 2 + 'px')
            .style('position', 'absolute')
            .style('background', "#121212")
            .style('right', 0);

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
            return simulation.find(d3.event.x, d3.event.y);
        }

        const simulation = d3.forceSimulation()
            .alphaDecay(0)
            .alphaMin(1)
            .alphaTarget(0)
            .velocityDecay(0.1)
            .force("charge", d3.forceManyBody())
            .force("link", d3.forceLink(graph)
                .id(d => d.index)
                .strength(0.4)
                .distance(70)
            )
            .force("center", d3.forceCenter(widthW / 2, heightW / 2))
            .force("collide", d3.forceCollide().strength(0));

        const svg = canvas.append("svg")
            .attr("viewBox", [0, 0, widthW, heightW]);

        const link = svg.append("g")
            .attr("stroke", "#121212")
            .attr("stroke-opacity", 1)
            .selectAll("line")
            .data(links)
            .join("line")
            .attr("stroke-width", d => Math.sqrt(d.value));

        const node = svg.append("g")
            .selectAll("circle")
            .data(nodes)
            .join("circle")
            .attr("r", 10)
            .attr("fill", "#121212");

        const ticked = () => {
            link.attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y)
                .transition()
                .duration(50)
                .ease(d3.easeCircleInOut)
                .attr("stroke", function (d) { if ((d.source.x > mid) || (d.target.x > mid)) return "#fff"; else return "#121212" });

            node.attr("cx", d => d.x)
                .attr("cy", d => d.y)
                .transition()
                .duration(50)
                .ease(d3.easeCircleInOut)
                .attr("fill", function (d) { if (d.x > mid) return "#fff"; else return "#121212" });
        }

        simulation
            .nodes(nodes)
            .on("tick", ticked)

        d3.interval(() => {
            if (i > nodes.length - 1) return;
            linkArray.push(links[i]);
            i++;
            simulation.force("link")
                .links(linkArray);
        }, 0, d3.now() + 0);
        d3.interval(() => {
            if (i > links.length - 1) return;
            linkArray.push(links[i]);
            i++;
            simulation.force("link")
                .links(linkArray);
        }, 100, d3.now() + 100);

        canvas.call(d3.drag()
            .subject(dragSubject)
            .on("start", dragStarted)
            .on("drag", dragged)
            .on("end", dragEnded));

        // canvasLeft.call(d3.drag()
        //     .on("drag", () => {
        //         canvasLeft.style('width', d3.event.x + 'px');
        //         canvasRight.style('width', widthW - d3.event.x + 'px');
        //     }))

        // canvasRight.call(d3.drag()
        //     .on("drag", () => {
        //         canvasLeft.style('width', d3.event.x + 'px');
        //         canvasRight.style('width', widthW - d3.event.x + 'px');
        //     }))

    })
    return (
        <div>
            <div ref={right} />
            <div ref={left} />
            <div style={{ zIndex: 1 }} ref={main} />
        </div>
    );
}

export default LandingPage;