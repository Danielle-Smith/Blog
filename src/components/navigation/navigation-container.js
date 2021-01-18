import React from 'react';
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavigationComponent = (props) => {
   

    return (
        <div className="nav-wrapper">
            <div className="left-side">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink> 
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/about-me" activeClassName="nav-link-active">About</NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink>
                </div>

            </div>
            
            <div className="right-side-wrapper">
                <div className="right-side">
                    <a href="dds-blogdb.herokuapp.com/signup" target="_blank" ClassName="admin-link">Register</a>
                    <a href="dds-blogdb.herokuapp.com/admin" target="_blank" ClassName="admin-link">Admin</a>
                </div>
            </div>
        </div>
    );
}

export default withRouter(NavigationComponent);
