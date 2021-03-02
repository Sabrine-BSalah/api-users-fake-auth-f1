import React from 'react'
import { Navbar, Nav, Form, Button } from "react-bootstrap"
import { NavLink } from 'react-router-dom'

import './Navbar.css'

const NavBar = ({ login, logout, isAuth }) => {


    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Users API</Navbar.Brand>
                <Nav className="mr-auto">
                    <NavLink exact to="/" className='app-link' activeClassName="active-link" >Home</NavLink>
                    <NavLink to="/users" className='app-link' activeClassName="active-link" >Users</NavLink>
                    <NavLink to="/admin" className="app-link" activeClassName="active-link">Admin</NavLink>
                </Nav>
                <Form inline>
                    <Button variant="outline-info"
                        onClick={isAuth ? logout : login}
                    >{isAuth ? "Logout" : "Login"}</Button>
                </Form>
            </Navbar>
        </div>
    )
}

export default NavBar
