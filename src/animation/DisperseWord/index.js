import Plx from "react-plx";
import React, { Component } from "react";

class DisperseWord extends Component {
    render() {
        const tag = ["G", "e", "ɘ", "k", "y", "A", "n", "t", "s"];
        let transitionState = [];
        const rotateG = Math.random() > 0.5 ? Math.random() * 120 : Math.random() * -120;
        transitionState.push([{
            start: 'self',
            duration: 600,
            easing: "easeInOut",
            properties: [{
                startValue: 0,
                endValue: rotateG,
                property: 'rotate',
            },
            {
                startValue: 1,
                endValue: 7,
                property: 'scale',
            },
            {
                startValue: 0,
                endValue: -650,
                property: 'translateX',
                unit: '%',
            },
            {
                startValue: 0,
                endValue: 530,
                property: 'translateY',
                unit: '%',
            }],
        },
        {
            start: 600,
            duration: 400,
            easing: "easeInOut",
            properties: [{
                startValue: rotateG,
                endValue: rotateG + (Math.random() > 0.5 ? Math.random() * 120 : Math.random() * -120),
                property: 'rotate',
            },
            {
                startValue: 7,
                endValue: 4,
                property: 'scale',
            },
            {
                startValue: -650,
                endValue: -1250,
                property: 'translateX',
                unit: '%',
            },
            {
                startValue: 530,
                endValue: 930,
                property: 'translateY',
                unit: '%',
            }
            ],
        }])
        tag.map(() => {
            const rotationFactor = Math.random() > 0.5 ? 180 : -180;
            console.log(Math.random())
            const plusOrMinus = Math.random() < 0.5 ? -1 : 1;
            const xFactor = (Math.random() * 8000 * plusOrMinus) / 2;
            const yFactor = (Math.random() * 1500 * plusOrMinus) / 2;
            transitionState.push([{
                start: 'self',
                duration: 600,
                name: 'first',
                easing: "easeInOut",
                properties: [{
                    startValue: 0,
                    endValue: Math.random() * rotationFactor,
                    property: 'rotate',
                },
                {
                    startValue: 1,
                    endValue: 7,
                    property: 'scale',
                },
                {
                    startValue: 0,
                    endValue: xFactor,
                    property: 'translateX',
                    unit: '%',
                },
                {
                    startValue: 0,
                    endValue: yFactor,
                    property: 'translateY',
                    unit: '%',
                }],
            }])
            return true;
        })

        return (
            <div className="disperse-word">
                {tag.map((item, index) => <Plx
                    tagName='h1'
                    className={item === "G" ? "disperse-tagG" : 'disperse-tag'}
                    parallaxData={transitionState[index]}
                >{item}
                </Plx>
                )}
            </div>
        );
    }
}

export default DisperseWord;
