import React, { Component } from 'react'
import { NavigationBar } from './NavigationBar';
import Home from "./Home";
import Users from "./Users";
import Prods from './Prods';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

export class Landing extends Component {
    render() {
        return (
            <div>
                <Router>
                    <NavigationBar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/prods" element={<Prods/>} />
                    </Routes>
                </Router>
            </div>
        )
    }
}

export default Landing;
