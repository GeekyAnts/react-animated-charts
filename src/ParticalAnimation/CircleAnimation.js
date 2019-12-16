import * as d3 from 'd3';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react'

let i = 0;
const { innerWidth: widthW, innerHeight: heightW } = window;
let val = 4;
const CircleAnimation = props => {
    const diva = useRef(null);
    const {
        height,
        width,
        backgroundColor,
        duration,
        radius,
        xIndex,
        yIndex
    } = props;

    useEffect(() => {
        const canvas = d3.select(diva.current)
            .attr("width", width)
            .attr("height", height)
            .style('background', backgroundColor);
        const svg = canvas.append('svg')
            .attr("width", width)
            .attr("height", height)

        svg.append("rect")
            .attr("width", width)
            .attr("height", height)
            .attr('fill', 'transparent')
            .call(function create() {
                d3.interval(() => {
                    svg.insert("circle", "rect")
                        .attr("cx", xIndex + Math.random() * 10)
                        .attr("cy", yIndex + Math.random() * 10)
                        .attr("r", 1e-6)
                        .attr('fill', "transparent")
                        .style("stroke", d3.hsl((i = (i + 1) % 360), 1, .5))
                        .style("stroke-opacity", 1)
                        .transition()
                        .duration(duration)
                        .ease(Math.sqrt)
                        .attr("r", radius)
                        .style("stroke-opacity", 1e-6)
                        .remove()
                    val = val * (-1)
                }, 100, d3.now());
            });
    })

    return (<div ref={diva} />);
}

CircleAnimation.propTypes = {
    height: PropTypes.number,
    width: PropTypes.number,
    backgroundColor: PropTypes.string,
    duration: PropTypes.number,
    radius: PropTypes.number,
    xIndex: PropTypes.number,
    yIndex: PropTypes.number
};

CircleAnimation.defaultProps = {
    height: heightW,
    width: widthW,
    backgroundColor: '#000',
    duration: 2000,
    radius: 100,
    xIndex: 100,
    yIndex: 100
};

export default CircleAnimation;