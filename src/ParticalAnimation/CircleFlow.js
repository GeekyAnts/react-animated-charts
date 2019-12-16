import * as d3 from 'd3';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react'

let i = 0;
const { innerWidth: widthW, innerHeight: heightW } = window;

const CircleFlow = props => {
    const diva = useRef(null);
    const {
        height,
        width,
        backgroundColor,
        duration,
        radius
    } = props;

    useEffect(() => {
        const canvas = d3.select(diva.current);
        const svg = canvas.append('svg')
            .attr("width", width)
            .attr("height", height)
            .style('background', backgroundColor);

        svg.append("rect")
            .attr("width", width)
            .attr("height", height)
            .attr('fill', 'transparent')
            .on("ontouchstart" in document ? "touchmove" : "mousemove", function () {
                let m = d3.mouse(this);
                svg.insert("circle", "rect")
                    .attr("cx", m[0])
                    .attr("cy", m[1])
                    .attr("r", 1e-6)
                    .attr('fill', "transparent")
                    .style("stroke", d3.hsl((i = (i + 1) % 360), 1, .5))
                    .style("stroke-opacity", 1)
                    .transition()
                    .duration(duration)
                    .ease(Math.sqrt)
                    .attr("r", radius)
                    .style("stroke-opacity", 1e-6)
                    .remove();
                d3.event.preventDefault();
            });
    })

    return (<div ref={diva} />);
}

CircleFlow.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    backgroundColor: PropTypes.string,
    duration: PropTypes.number,
    radius: PropTypes.number
};

CircleFlow.defaultProps = {
    height: heightW,
    width: widthW,
    backgroundColor: '#000',
    duration: 2000,
    radius: 100
};

export default CircleFlow;