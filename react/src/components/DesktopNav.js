import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

function DesktopNav(props) {

    return (
        <React.Fragment>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="m-auto">
                        <NavLink className="nav-link" to="/">HOME</NavLink>
                        <NavLink className="nav-link" to={props.auth.isAuthenticated ? "/profile" : "/login"}>
                        {props.auth.isAuthenticated ?
                            <img top src="https://i.pinimg.com/550x/17/d0/8d/17d08d27fa82c825ba0152d8008b6e51.jpg" style={{backgroundColor: "black", borderRadius: "50%"}} width="8%" />
                        :
                            <i className="fa fa-user-circle-o fa-2x" aria-hidden="true" ></i>
                        }
                        </NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </React.Fragment>
    );
}

export default DesktopNav;