// import React, { useEffect, useRef } from 'react'
// import * as d3 from 'd3';
// import data from "./data.json"
// // const temperatureData = [8, 9, 101, 11, 11]

// const Root = () => {
//     const diva = useRef(null);
//     const { innerWidth: width, innerHeight: height } = window;
//     useEffect(() => {
//         // d3.select('body').style("background-color", "aqua")
//         // d3.select(this.refs.diva)
//         //     .style("background-color", "red")
//         //     .transition()
//         //     .duration(5000)
//         //     .style("background-color", "black");
//         // d3.select(this.refs.diva).append("p").text("Third paragraph.")
//         // d3.select(this.refs.diva).selectAll("input").property("checked", true);
//         // d3.select(this.refs.diva).insert("p").text("Second paragraph.");
//         // d3.select(this.refs.diva)
//         //     .selectAll("h2")
//         //     .data(temperatureData)
//         //     .enter(temperatureData)
//         //     .append("h2")
//         //     .text("dchbvkj")
//         //     .style("color", "white")


//         // const jsonCircles = [
//         //     // { "x_axis": Math.random() * 400, "y_axis": Math.random() * 500, "radius": 20, "color": "green" },
//         //     // { "x_axis": Math.random() * 400, "y_axis": Math.random() * 500, "radius": 20, "color": "purple" },
//         //     // { "x_axis": Math.random() * 400, "y_axis": Math.random() * 500, "radius": 20, "color": "red" },
//         //     { "x_axis": Math.random() * 400, "y_axis": Math.random() * 500, "radius": 20, "color": "yellow" }];
//         // // console.log(jsonCircles[0])
//         // // const link = [
//         // //     {
//         // //         "source": jsonCircles[0],
//         // //         "target": jsonCircles[1],
//         // //         "id": 0
//         // //     }
//         // // ]
//         // const svgContainer = d3.select(diva.current)
//         //     .append("svg")
//         //     .attr("width", width)
//         //     .attr("height", height);

//         // const circles = svgContainer.selectAll("circle")
//         //     .data(jsonCircles)
//         //     .enter()
//         //     .append("circle");
//         // const update = () => {
//         //     circles.attr("cx", d => d.x_axis).attr("cy", d => d.y_axis);
//         // }
//         // const drawable = circles
//         //     .attr("cx", d => d.x_axis)
//         //     .attr("cy", d => d.y_axis)
//         //     .attr("r", d => d.radius)
//         //     .style("fill", d => d.color)
//         //     .call(d3.drag().on("drag", d => (d.x_axis = d3.event.x, d.y_axis = d3.event.y))
//         //         .on("start.update drag.update end.update", update))

//         // d3.link({
//         //     source: [100, 100],
//         //     target: [300, 300]
//         // })

//         //     .classed('link', true)
//         // .attr("stroke-width", 2)
//         // .data(link)
//         // .attr("x1", (d) => d.source.x_axis)
//         // .attr("y1", (d) => d.source.y_axis)
//         // .attr("x2", (d) => d.target.x_axis)
//         // .attr("y2", (d) => d.target.y_axis)

//         // drawable.on('click', this.handleClick);
//         // const objextaaa = {
//         //     "nodes": [{ "id": "Myriel", "group": 1 },
//         //     { "id": "Napoleon", "group": 1 },
//         //     { "id": "Mlle.Baptistine", "group": 1 },
//         //     { "id": "Mme.Magloire", "group": 1 },
//         //     { "id": "CountessdeLo", "group": 1 },
//         //     { "id": "Geborand", "group": 1 },
//         //     { "id": "Champtercier", "group": 1 }],
//         //     "links": [{ "source": "Napoleon", "target": "Myriel", "value": 1 },
//         //     { "source": "Mlle.Baptistine", "target": "Myriel", "value": 8 },
//         //     { "source": "Mme.Magloire", "target": "Myriel", "value": 10 },
//         //     { "source": "Mme.Magloire", "target": "Mlle.Baptistine", "value": 6 },
//         //     { "source": "CountessdeLo", "target": "Myriel", "value": 1 },
//         //     { "source": "Geborand", "target": "Myriel", "value": 1 },
//         //     { "source": "Champtercier", "target": "Myriel", "value": 1 }]
//         // }
//         // console.log(diva)
//         // const width = 1250;
//         // const height = 700;
//         // // var canv = document.querySelector(diva.current)
//         // const context = d3.select(diva.current)
//         // const simulation = d3.forceSimulation()
//         //     .force("link", d3.forceLink().id(function (d) { return d.id; }))
//         //     .force("charge", d3.forceManyBody())
//         //     .force("center", d3.forceCenter(width / 2, height / 2));

//         // d3.json(objextaaa, (error, graph) => {
//         //     if (error) throw error;

//         //     simulation
//         //         .nodes(graph.nodes)
//         //         .on("tick", ticked);

//         //     simulation.force("link")
//         //         .links(graph.links);

//         //     d3.select(diva.current)
//         //         .call(d3.drag()
//         //             .container(diva.current)
//         //             .subject(dragsubject)
//         //             .on("start", dragstarted)
//         //             .on("drag", dragged)
//         //             .on("end", dragended));

//         //     const ticked = () => {
//         //         context.clearRect(0, 0, width, height);

//         //         context.beginPath();
//         //         graph.links.forEach(drawLink);
//         //         context.strokeStyle = "#aaa";
//         //         context.stroke();

//         //         context.beginPath();
//         //         graph.nodes.forEach(drawNode);
//         //         context.fill();
//         //         context.strokeStyle = "#fff";
//         //         context.stroke();
//         //     }

//         //     const dragsubject = () => {
//         //         return simulation.find(d3.event.x, d3.event.y);
//         //     }
//         // });
//         // const dragstarted = () => {
//         //     if (!d3.event.active) simulation.alphaTarget(0.3).restart();
//         //     d3.event.subject.fx = d3.event.subject.x;
//         //     d3.event.subject.fy = d3.event.subject.y;
//         // }

//         // const dragged = () => {
//         //     d3.event.subject.fx = d3.event.x;
//         //     d3.event.subject.fy = d3.event.y;
//         // }

//         // const dragended = () => {
//         //     if (!d3.event.active) simulation.alphaTarget(0);
//         //     d3.event.subject.fx = null;
//         //     d3.event.subject.fy = null;
//         // }

//         // const drawLink = (d) => {
//         //     context.moveTo(d.source.x, d.source.y);
//         //     context.lineTo(d.target.x, d.target.y);
//         // }

//         // const drawNode = (d) => {
//         //     context.moveTo(d.x + 3, d.y);
//         //     context.arc(d.x, d.y, 3, 0, 2 * Math.PI);
//         // }


//         const canvas = d3.select(diva.current)
//             .attr("width", width)
//             .attr("height", height);
//         let context = diva.current.getContext('2d');
//         console.log(canvas, context)
//         const graph = {
//             nodes: [{ "country": "East Timor", "code": "tl" },
//             { "country": "Canada", "code": "ca" },
//             { "country": "Turkmenistan", "code": "tm" },
//             { "country": "United States of America", "code": "us" },
//             { "country": "Lithuania", "code": "lt" },
//             { "country": "Cambodia", "code": "kh" },
//             { "country": "Ethiopia", "code": "et" },
//             { "country": "Swaziland", "code": "sz" },
//             { "country": "Argentina", "code": "ar" },
//             { "country": "Bolivia", "code": "bo" },
//             { "country": "Cameroon", "code": "cm" },
//             { "country": "Burkina Faso", "code": "bf" },
//             { "country": "Ghana", "code": "gh" },
//             { "country": "Saudi Arabia", "code": "sa" }],
//             links: [{ "target": 1, "source": 0 },
//             { "target": 2, "source": 1 },
//             { "target": 3, "source": 2 },
//             { "target": 4, "source": 3 },
//             { "target": 5, "source": 4 },
//             { "target": 6, "source": 5 },
//             { "target": 7, "source": 6 },
//             { "target": 8, "source": 7 },
//             { "target": 9, "source": 8 },
//             { "target": 10, "source": 9 },
//             { "target": 11, "source": 10 },
//             { "target": 12, "source": 11 },
//             { "target": 13, "source": 12 },
//             { "target": 0, "source": 13 }]
//         }

//         const dragstarted = () => {
//             if (!d3.event.active) simulation.alphaTarget(0.3).restart();
//             d3.event.subject.fx = d3.event.subject.x;
//             d3.event.subject.fy = d3.event.subject.y;
//         }

//         const dragged = () => {
//             d3.event.subject.fx = d3.event.x;
//             d3.event.subject.fy = d3.event.y;
//         }

//         const dragended = () => {
//             if (!d3.event.active) simulation.alphaTarget(0);
//             d3.event.subject.fx = null;
//             d3.event.subject.fy = null;
//         }

//         const drawLink = (d) => {
//             context.moveTo(d.source.x, d.source.y);
//             context.lineTo(d.target.x, d.target.y);
//         }

//         const drawNode = (d) => {
//             context.moveTo(d.x + 3, d.y);
//             context.arc(d.x, d.y, 3, 0, 2 * Math.PI);

//         }
//         const simulation = d3.forceSimulation()
//             .force("charge", d3.forceManyBody())
//             .force("link", d3.forceLink(graph)
//                 .id(d => d.index)
//                 .distance(20)
//                 .strength(1)
//             )
//             .force("center", d3.forceCenter(width / 2, height / 2));
//         const ticked = () => {
//             context.clearRect(0, 0, width, height);

//             context.beginPath();
//             graph.links.forEach(drawLink);
//             context.strokeStyle = "#aaa";
//             context.stroke();

//             context.beginPath();
//             graph.nodes.forEach(drawNode);
//             context.fill();
//             context.strokeStyle = "#fff";
//             context.stroke();
//         }

//         const dragsubject = () => {
//             return simulation.find(d3.event.x, d3.event.y);
//         }

//         simulation
//             .nodes(graph.nodes)
//             .on("tick", ticked);

//         simulation.force("link")
//             .links(graph.links);


//         canvas.call(d3.drag()
//             .subject(dragsubject)
//             .on("start", dragstarted)
//             .on("drag", dragged)
//             .on("end", dragended));

//         // });


//         // .attr("width", width)
//         // .attr("height", height);

//         // let force = d3.forceSimulation()
//         //     .force("link", d3.forceLink().id(d => d.id))
//         //     .force("charge", d3.forceManyBody())
//         //     .force("center", d3.forceCenter(width / 2, height / 2));
//         // d3.json("https://raw.githubusercontent.com/DealPete/forceDirected/master/countries.json", data => {
//         //     const nodes = data["nodes"];
//         //     const links = data["links"];
//         //     force.nodes(nodes)
//         //         .on("tick", tick);
//         //     force.force("link")
//         //         .links(links);

//         //     d3.select(diva.current)
//         //         .call(d3.drag()
//         //             .container(diva.current)
//         //             .subject(dragsubject));
//         //     // .on("start", dragstarted)
//         //     // .on("drag", dragged)
//         //     // .on("end", dragended));

//         //     const dragsubject = () => force.find(d3.event.x, d3.event.y);
//         //     // d3.forceSimulation()
//         //     //     .size([width, height])
//         //     //     .nodes(d3.values(nodes))
//         //     //     .links(links)
//         //     //     .on('tick', tick)
//         //     //     .linkDistance(300)
//         //     //     .start();

//         //     let link = svgContainer.selectAll('.link')
//         //         .data(links)
//         //         .enter.append('line')
//         //         .attr('stroke', 'grey');
//         //     let node = d3.select('#flags').selectAll('img')
//         //         .data(force.node())
//         //         .enter().append('img')
//         //         .attr('class', d => 'flag flag-' + d.code)
//         //     // .on('mousemove', mouseMoving)
//         //     // .on('mouseover', mouseoverHandler)
//         //     // .on('mouseout', mouseoutHandler)
//         //     const tick = e => {
//         //         node.style('left', d => d.x + 'px')
//         //             .style('top', d => d.y + 'px')
//         //             .call(force.drag);
//         //     }
//         //     link.attr('x1', d => d.source.x)
//         //         .attr('y1', d => d.source.x)
//         //         .attr('x2', d => d.target.x)
//         //         .attr('y2', d => d.target.x)
//         //     // const mouseMoving = d => {

//         // }
//         // })


//     })
//     return (<canvas ref={diva} width={width} height={height} />);
// }
// export default Root;