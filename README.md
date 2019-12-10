## React Animated Charts

## Install

Install the package using npm:

### `npm i react-animated-web`


## Force-Directed Graph

![](./src/assets/Images/FDGraph.gif)

```javascript
import { ForceDirectedGraph } from "react-animated-web"; // ES6 Syntax

<ForceDirectedGraph
    drag={true}         // Enables Mouse Drag (true/false)
    nodes={node}        // Graph Nodes (Array of Object)
    links={link}        // Graph Links (Array of Object)
    alphaDecay={0.01}   // Alpha Decay (Number Range - [0,1])
    animationDelay={10} // Animation Delay Time (Time in `ms`)
    animationStart={0}  // Animation Start time (Time in `ms`)
    height={500}        // Height of Graph (Number)
    width={500}         // Width of Graph (Number)
    strength={0.4}      // Strength of Graph (Number Range - [0,1])
    distance={10}       // Distance between each node (Number)
/>
```


## Hamiltonian Graph

![](./src/assets/Images/HGraph.gif)

```javascript
import { HamiltonianGraph } from "react-animated-web"; // ES6 Syntax

<HamiltonianGraph
    drag={true}         // Enable Mouse Drag (true/false)
    noOfNode={50}       // Graph Nodes (Number)
    linkFactor={10}     // Graph Links (Number)
    alphaDecay={0.01}   // Alpha Decay (Number Range - [0,1])
    animationDelay={10} // Animation Delay Time (Time in `ms`)
    animationStart={0}  // Animation Start time (Time in `ms`)
    height={500}        // Height of Graph (Number)
    width={500}         // Width of Graph (Number)
    strength={0.4}      // Strength of Graph (Number Range - [0,1])
    distance={10}       // Distance between each node (Number)
/>
```

### Note

```javascript
const node = [{tag: "_name",id: "_id"}...]
const link = [{target: "_targetIndex", source: "_sourceIndex"}...]
```
