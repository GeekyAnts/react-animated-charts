import React, { Component } from "react";

import { VideoBG } from "../../animation";
import { TopBar, HeadComponent } from "../../components";

class Root extends Component {
    render() {
        return (
            <div className="container">
                <VideoBG />
                <TopBar />
                <HeadComponent />
                <div style={{ height: 1250, backgroundColor: "rgb(18, 18, 18)", zIndex: 0 }} />
            </div>
        );
    }
}

export default Root;
