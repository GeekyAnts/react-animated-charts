import React, { Component } from "react";

import logo from "../../assets/Images/logo.png";

class TopBar extends Component {
    render() {
        return (
            <div className="topBar">
                <img src={logo} className="logo" />
                <div className="topBarItem ml-auto">Home</div>
                <div className="topBarItem" >Our Developers</div>
                <div className="topBarItem">UI/UX</div>
                <div className="topBarItem">Products</div>
                <div className="topBarItem">Jobs</div>
                <div className="topBarItem">More</div>
            </div>
        );
    }
}

export default TopBar;
