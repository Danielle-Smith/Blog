import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavigationComponent = (props) => {
    const dynamicLink = (route, linkText) => {
        return (
        <div className="nav-link-wrapper" activeclassname="nav-link-active">
            <NavLink to={route}>{linkText}</NavLink>
        </div>
        );
    }

    const handleSignOut = () => {
        axios
            .delete("https://api.devcamp.space/logout", { withCredentials: true })
            .then(response => {
                if (response.status === 200) {
                    props.history.push("/");
                    props.handleSuccessfulLogout();
                }
                return response.data;
            })
            .catch(error => {
                console.log("Error signing out", error);
            });
    };

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
                    <p>DANIELLE SMITH</p>

                    <a href="http://127.0.0.1:5000/admin" target="_blank" ClassName="admin-link">Admin</a>
                </div>
            </div>
        </div>
    );
}

export default withRouter(NavigationComponent);
