import * as d3 from "d3";
import React, { useEffect, useRef } from 'react';
import { HamiltonianGraph } from "react-animated-web";

const { innerWidth: widthW, innerHeight: heightW } = window;

const data = [{ cx: 50, cy: 50, text: 'home', icon: "https://res.cloudinary.com/dclpozjga/image/upload/v1576662707/home_ozioxn.svg", angle: -90 },
{ cx: 50, cy: heightW - 80, text: 'about', icon: "https://res.cloudinary.com/dclpozjga/image/upload/v1576663289/about-us_w4sm5o.svg", angle: 0 },
{ cx: widthW - 80, cy: 50, text: 'contact', icon: "https://res.cloudinary.com/dclpozjga/image/upload/v1576663289/project-management_wqyubi.svg", angle: 90 },
{ cx: widthW - 80, cy: heightW - 80, text: 'project', icon: "https://res.cloudinary.com/dclpozjga/image/upload/v1576663289/identification_nbxcrg.svg", angle: 0 }];
let i = 0;


const LandingPage = () => {
    const left = useRef(null);
    const right = useRef(null);
    const graph = useRef(null);
    const content = useRef(null);
    let tag = null;

    const color = d3.transition()
        .duration(3000)
        .ease(d3.easeLinear);

    let curCircle = null;

    const getComponent = (type) => {
        switch (type) {
            case 'home':
                return `<div style='color:#fff; width: 60%; height: 60%; overflow:auto'>
                            <h1 style='font-size:100px; margin: 0px;'>HOME</h1>
                            <div style='font-size: 20px; margin-left: 5px; margin-bottom: 5px;'>Its A Home Page Content</div>
                            <div style='font-size: 20px; margin-left: 5px; margin-bottom: 5px;'>
                                Lorem ipsum dolor sit amet, affert ignota alienum nec ei, usu purto tation menandri ad, nihil legere eos in. Ex minim impetus aliquam sed, vis modus congue voluptua an. Ad viris fuisset invidunt pri. His odio dicam assentior eu, ne vix summo copiosae inciderint.
                            </div>
                        </div>`;
            case 'about':
                return `<div style='color:#fff; width: 60%; height: 60%; overflow:auto'>
                            <h1 style='font-size:100px; margin: 0px;'>ABOUT</h1>
                            <div style='font-size: 20px; margin-left: 5px; margin-bottom: 5px;'>Its A About Page Content</div>
                            <div style='font-size: 20px; margin-left: 5px; margin-bottom: 5px;'>
                                Lorem ipsum dolor sit amet, affert ignota alienum nec ei, usu purto tation menandri ad, nihil legere eos in. Ex minim impetus aliquam sed, vis modus congue voluptua an. Ad viris fuisset invidunt pri. His odio dicam assentior eu, ne vix summo copiosae inciderint.
                            </div>
                        </div>`;
            case 'contact':
                return `<div style='color:#fff; width: 60%; height: 60%; overflow:auto'>
                            <h1 style='font-size:100px; margin: 0px;'>CONTACT</h1>
                            <div style='font-size: 20px; margin-left: 5px; margin-bottom: 5px;'>Its A Contact Page Content</div>
                            <div style='font-size: 20px; margin-left: 5px; margin-bottom: 5px;'>
                                Lorem ipsum dolor sit amet, affert ignota alienum nec ei, usu purto tation menandri ad, nihil legere eos in. Ex minim impetus aliquam sed, vis modus congue voluptua an. Ad viris fuisset invidunt pri. His odio dicam assentior eu, ne vix summo copiosae inciderint.
                            </div>
                        </div>`;
            case 'project':
                return `<div style='color:#fff; width: 60%; height: 60%; overflow:auto'>
                            <h1 style='font-size:100px; margin: 0px;'>PROJECT</h1>
                            <div style='font-size: 20px; margin-left: 5px; margin-bottom: 5px;'>Its A Project Page Content</div>
                            <div style='font-size: 20px; margin-left: 5px; margin-bottom: 5px;'>
                                Lorem ipsum dolor sit amet, affert ignota alienum nec ei, usu purto tation menandri ad, nihil legere eos in. Ex minim impetus aliquam sed, vis modus congue voluptua an. Ad viris fuisset invidunt pri. His odio dicam assentior eu, ne vix summo copiosae inciderint.
                            </div>
                        </div>`;
            default:
                return `<div></div>`

        }
    }

    const renderContent = (type) => {
        d3.select(content.current)
            .style('position', 'absolute')
            .style('z-index', 1)
            .style('display', 'flex')
            .style('justify-content', 'center')
            .style('align-items', 'center')
            .style('width', '100%')
            .style('height', '100%')
            .html(getComponent(type))
    }


    const dragCallBack = (value, simulation) => {
        d3.select(right.current).selectAll('svg').selectAll('g').selectAll('image').filter(function () {
            if (parseInt(d3.select(this).attr('x')) < value.x && value.x < (parseInt(d3.select(this).attr('x')) + 50) &&
                value.y > parseInt(d3.select(this).attr('y')) && (parseInt(d3.select(this).attr('y')) + 50) > value.y) {
                curCircle = d3.select(this);
            }
        })
        if (curCircle !== null) {
            d3.select(left.current)
                .transition(color)
                .style('background', d3.hsl((i = (Math.random() * 1000 * value.subject.num) % 360), 1, .5));
            renderContent(curCircle.attr('alt'));
            simulation.force("center", d3.forceCenter(value.x, value.y))
            curCircle = null;
        }
    }

    useEffect(() => {
        d3.select(left.current)
            .style('height', heightW + 'px')
            .style('width', widthW + 'px')
            .style('position', 'absolute')
            .style('background', "#121212");

        tag = d3.select(right.current)
            .append('svg')
            .attr('height', heightW)
            .attr('width', widthW)
            .style('position', 'absolute')
            .style('z-index', 1);
        const container = tag.append("g");


        d3.select(graph.current).selectAll('div').selectAll("svg").on("click", () => {
            data.map(d => {
                container.append("svg:image")
                    .attr("xlink:href", d.icon)
                    .attr('alt', d.text)
                    .attr("width", 40)
                    .attr("height", 40)
                    .attr("x", d.cx)
                    .attr("y", d.cy);
            });
        })
    })
    return (
        <div>
            <div ref={content} />
            <div ref={right} />
            <div ref={left} />
            <div ref={graph}>
                <HamiltonianGraph
                    drag={true}
                    noOfNode={50}
                    linkFactor={10}
                    alphaDecay={0}
                    velocityDecay={0.1}
                    animationDelay={100}
                    animationStart={100}
                    height={heightW}
                    width={widthW}
                    strength={0.4}
                    distance={70}
                    zIndex={1}
                    nodeRadius={10}
                    nodeColour={'#fff'}
                    linkStroke={'#fff'}
                    linkOpacity={1}
                    dragEventCallBack={dragCallBack}
                />
            </div>
        </div>
    );
}

export default LandingPage;