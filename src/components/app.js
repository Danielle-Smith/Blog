import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NavigationContainer from "./navigation/navigation-container";
import About from "./pages/about";
import Contact from "./pages/contact";
import Blog from "./pages/blog";
import BlogDetail from "./pages/blog-detail";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='container'>
        <Router>

          <NavigationContainer />

          <Switch>
            <Route
              exact path="/"
              render={props => (
                <Blog {...props}
                />
              )}
            />
            <Route path="/about-me" component={About} />
            <Route
              path="/auth"
              render={props => (
                <Auth
                  {...props}
                />
              )}
            />
            <Route path="/contact" component={Contact} />
            <Route
              path="/b/:slug"
              render={props => (
                <BlogDetail {...props} />
              )}
            />
          </Switch>

        </Router>
      </div>
    );
  }
}
