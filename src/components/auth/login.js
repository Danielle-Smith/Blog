import React, { Component } from 'react';
import axios from 'axios';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: "",
            password: "",
            errorText: ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        })
    }

    handleSubmit = (event) => {
        axios.post("http://127.0.0.1:5000/login",
        console.log("hi")
        ).then(response => {
            if (response.status === 200) {
                this.props.handleSuccessfulAuth();
            } else {
                this.setState({
                    errorText: "Wrong name or password"
                });
                this.props.handleUnsuccessfulAuth();
            }
        }).catch(error => {
            this.setState({
                errorText: "An error occurred"
            });
            // this.props.handleUnsuccessfulAuth();
        });

        event.preventDefault();
    }

    render() {
        return (
            <div>
                <h1>LOGIN TO ACCESS YOUR DASHBOARD</h1>

                <div>{this.state.errorText}</div>
 
                <form onSubmit={this.handleSubmit} className="auth-form-wrapper" action="/login" method="POST">
                    <div className="form-group">
                        <FontAwesomeIcon icon="envelope" />
                        <input 
                            type="name"
                            name="name"
                            placeholder="Your name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <FontAwesomeIcon icon="lock" />
                        <input 
                            type="password"
                            name="password"
                            placeholder="Your password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>

                    
                    <button className="btn" type="submit">Login</button>
                    
                </form>
            </div>
        );
    }
}