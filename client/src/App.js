import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component.js';
import Edit from './components/edit.component.js';
import Index from './components/index.component';

import logo from './logo.svg';

function App() {
  /* States */
  const [collapsed, setCollapsed] = useState(true);

  /* Functions */
  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Router>
      <div>

        <Navbar color="dark" dark className="navbar navbar-expand-md">
          <NavbarBrand href="https://appdividend.com/2018/11/11/react-crud-example-mern-stack-tutorial/" className="mt-auto" target="_blank" rel="noopener noreferrer">
            <img src={logo} width="30" height="30" alt="Tutorial link" />
            MERN CRUD
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <Link to={'/'} className="nav-link">Home</Link>
              </NavItem>
              <NavItem>
                <Link to={'/create'} className="nav-link">Create</Link>
              </NavItem>
              <NavItem>
                <Link to={'/index'} className="nav-link">Index</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

        <br />
        <div className="container">
          <h5>Welcome to MERN CRUD tutorial</h5>
          <Switch>
            <Route exact path='/create' component={Create} />
            <Route path='/edit/:id' component={Edit} />
            <Route path='/index' component={Index} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
