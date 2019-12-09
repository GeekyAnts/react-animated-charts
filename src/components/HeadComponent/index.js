import Plx from "react-plx";
import React, { Component } from "react";

import * as THREE from "three";

import { DisperseWord } from "../../animation";
import logoSingle from "../../assets/Images/ant.svg";

class HeadComponent extends Component {
    // componentDidMount() {
    //     console.log(THREE, "three")
    //     var scene = new THREE.Scene();
    //     var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    //     var renderer = new THREE.WebGLRenderer();
    //     renderer.setSize(window.innerWidth, window.innerHeight);
    //     // document.body.appendChild( renderer.domElement );
    //     // use ref as a mount point of the Three.js scene instead of the document.body
    //     this.mount.appendChild(renderer.domElement);
    //     var geometry = new THREE.BoxGeometry(1, 1, 1);
    //     var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    //     var cube = new THREE.Mesh(geometry, material);
    //     scene.add(cube);
    //     camera.position.z = 5;
    //     var animate = function () {
    //         requestAnimationFrame(animate);
    //         cube.rotation.x += 0.01;
    //         cube.rotation.y += 0.01;
    //         renderer.render(scene, camera);
    //     };
    //     animate();
    // }
    render() {
        const titleData = [
            {
                start: 'self',
                startOffset: 50,
                duration: 200,
                // easing: "easeInOut",
                properties: [
                    {
                        startValue: 1,
                        endValue: 10,
                        property: 'scale',
                    },
                ],
            },
        ];

        return (
            <div className="head-container" >
                <div>
                    {/* <Plx
                        tagName='h1'
                        className='Examples'
                        parallaxData={titleData}
                    >
                        <img src={logoSingle} className="head-image" />
                    </Plx> */}
                    {/* <div ref={ref => (this.mount = ref)} /> */}
                    <DisperseWord />
                </div>
            </div>
        );
    }
}

export default HeadComponent;
