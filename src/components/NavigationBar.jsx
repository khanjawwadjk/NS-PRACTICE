import React, { Component } from 'react';
import {Nav, Navbar, Container} from "react-bootstrap";
import {Link} from "react-router-dom";


const myStyle1 = {
    height:"80px"
}
const myStyle2 = {
    color:"wheat",
    fontSize:"30px",
    fontWeight:"bold",
    margin:"20px"
}
export class NavigationBar extends Component {
    render() {
        return (
            <div >
            <Navbar bg="dark" variant="dark" style={myStyle1}>
                <Container>
                {/* <Navbar.Brand to="/">Navbar</Navbar.Brand> */}
                <Nav className="me-auto">
                <Link to="/" style={myStyle2}>Home</Link>
                <Link to="/users" style={myStyle2}>Users</Link>
                <Link to="/prods" style={myStyle2}>Products</Link>
                </Nav>
                </Container>
            </Navbar>
            </div>
        )
    }
}

export default NavigationBar;
