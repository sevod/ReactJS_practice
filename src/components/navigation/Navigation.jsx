import React from "react";
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <h1>Navigation</h1>
            <li>
                <ul><NavLink to="">Main</NavLink></ul>
                <ul><NavLink to="/page1">Page 1</NavLink></ul>
                <ul><NavLink to="/page2">Page 2</NavLink></ul>
                <ul><NavLink to="/page3">Page 3</NavLink></ul>
            </li>
        </nav>
    );
}

export default Navigation;