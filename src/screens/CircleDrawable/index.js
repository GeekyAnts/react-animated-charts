import React, { useEffect, useRef } from 'react'
import * as d3 from 'd3';
import data from "./data.json"
// const temperatureData = [8, 9, 101, 11, 11]

const CircleDrawable = () => {
    const diva = useRef(null);
    const { innerWidth: width, innerHeight: height } = window;
    useEffect(() => {
        d3.select('body').style("background-color", "aqua")
        d3.select(this.refs.diva)
            .style("background-color", "red")
            .transition()
            .duration(5000)
            .style("background-color", "black");
        d3.select(this.refs.diva).append("p").text("Third paragraph.")
        d3.select(this.refs.diva).selectAll("input").property("checked", true);
        d3.select(this.refs.diva).insert("p").text("Second paragraph.");
        d3.select(this.refs.diva)
            .selectAll("h2")
            .data(temperatureData)
            .enter(temperatureData)
            .append("h2")
            .text("dchbvkj")
            .style("color", "white")


        const jsonCircles = [
            { "x_axis": Math.random() * 400, "y_axis": Math.random() * 500, "radius": 20, "color": "green" },
            { "x_axis": Math.random() * 400, "y_axis": Math.random() * 500, "radius": 20, "color": "purple" },
            { "x_axis": Math.random() * 400, "y_axis": Math.random() * 500, "radius": 20, "color": "red" },
            { "x_axis": Math.random() * 400, "y_axis": Math.random() * 500, "radius": 20, "color": "yellow" }];
        const svgContainer = d3.select(diva.current)
            .append("svg")
            .attr("width", width)
            .attr("height", height);
        const circles = svgContainer.selectAll("circle")
            .data(jsonCircles)
            .enter()
            .append("circle");
        const update = () => {
            circles.attr("cx", d => d.x_axis).attr("cy", d => d.y_axis);
        }
        const drawable = circles
            .attr("cx", d => d.x_axis)
            .attr("cy", d => d.y_axis)
            .attr("r", d => d.radius)
            .style("fill", d => d.color)
            .call(d3.drag().on("drag", d => (d.x_axis = d3.event.x, d.y_axis = d3.event.y))
                .on("start.update drag.update end.update", update))
    })

    return (
        <div ref={diva}>
            <svg width="50" height="50">
                <circle cx="25" cy="25" r="25" fill="purple" />
            </svg>
            <p />
            <h2 />
            <input type="checkbox" />
        </div>
    );
}
export default CircleDrawable;