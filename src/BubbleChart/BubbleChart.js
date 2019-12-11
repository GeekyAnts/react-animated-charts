import * as d3 from 'd3';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react'

import { bubbleChart } from "../utils/data"

let i = 0;
const { innerWidth: widthW, innerHeight: heightW } = window;

const BubbleChart = props => {
    const diva = useRef(null);
    const {
        height,
        width,
        tooltipSize,
        tooltipColor,
        tooltipFont,
        chartData,
        colourSet,
        fillOpacity
    } = props;

    const pack = data => d3.pack()
        .size([width - 2, height - 2])
        .padding(3)(d3.hierarchy({ children: data }).sum(d => d.value));

    const color = data => {
        let arr = []
        data.map(d => arr.push(d.group))
        return d3.scaleOrdinal(data.map(d => d.group), colourSet)
    };

    useEffect(() => {
        const graphData = pack(chartData)
        const colorData = color(chartData);

        const canvas = d3.select(diva.current);
        const svg = canvas.append('svg')
            .attr("viewBox", [0, 0, width, height])
            .attr("font-size", tooltipSize)
            .attr("font-family", tooltipFont)
            .attr('fill', tooltipColor)
            .attr("text-anchor", "middle")

        const leaf = svg.selectAll("g")
            .data(graphData.leaves())
            .join("g")
            .attr("transform", d => `translate(${d.x + 1},${d.y + 1})`);
        leaf.append("circle")
            .attr("id", d => { i++; d.leafUid = i; return d.leafUid })
            .attr("r", d => d.r)
            .attr("fill-opacity", fillOpacity)
            .attr("fill", d => colorData(d.data.group));

        leaf.append("text")
            .attr("clip-path", d => d.clipUid)
            .selectAll("tspan")
            .data(d => { if (d.value > 0) return d.data.name.split(/(?=[A-Z][^A-Z])/g); else return "" })
            .join("tspan")
            .attr("x", 0)
            .attr("y", (d, i, nodes) => `${i - nodes.length / 2 + 0.8}em`)
            .text(d => d);
    })
    return (<div ref={diva} width={width} height={height} />);
}

BubbleChart.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    tooltipSize: PropTypes.number,
    tooltipColor: PropTypes.string,
    tooltipFont: PropTypes.string,
    chartData: PropTypes.array,
    colourSet: PropTypes.array,
    fillOpacity: PropTypes.number
};

BubbleChart.defaultProps = {
    height: heightW,
    width: widthW,
    tooltipSize: 10,
    tooltipColor: 'black',
    tooltipFont: "sans-serif",
    chartData: bubbleChart,
    colourSet: d3.schemeCategory10,
    fillOpacity: 0.7
};

export default BubbleChart;