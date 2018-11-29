import React, {Component} from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Everything.css";

class CustomNavbar extends Component {
    render() {
        return (
            <div id="smartnav">
                <div className="navContainer">
                        <Navbar default collapseOnSelect>
                            <Navbar.Header>
                                <Navbar.Brand>
                                    <Link to='/'>New One</Link>
                                </Navbar.Brand>
                            </Navbar.Header>
                            <Navbar.Collapse>
                                <Nav pullRight>
                                    <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                                        Home
                                    </NavItem>
                                    <NavItem eventKey={2} componentClass={Link} href="./components/pages/Calendar" to="/calendar">
                                        Calendar
                                    </NavItem>
                                    <NavItem eventKey={3} componentClass={Link} href="./components/pages/Users" to="/users">
                                        Users
                                    </NavItem>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
            </div>
        );
    }
}

export default CustomNavbar;