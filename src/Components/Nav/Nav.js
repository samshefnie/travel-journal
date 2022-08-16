import React from "react";
import "./Nav.css"
import logo from "../../images/logo.png"

export default function Nav() {
    return (
        <nav>
            <img id="logo" src={logo} alt="clipart of earth"></img>
            <h2 id="header">my travel journal</h2>
        </nav>
    )
}