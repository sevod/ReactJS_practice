import React from "react";
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <h1>Navigation</h1>
            <li>
                <ul><Link to="">Main</Link></ul>
                <ul><Link to="/messages">Messages</Link></ul>
                <ul><Link to="/page1">Page 1</Link></ul>
                <ul><Link to="/page2">Page 2</Link></ul>
                <ul><Link to="/page3">Page 3</Link></ul>
            </li>
        </nav>
    );
}

export default Navigation;