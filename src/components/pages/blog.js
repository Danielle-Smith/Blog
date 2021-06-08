import React, { Component } from "react";
import axios from "axios";
import BlogItem from "../blog/blog-item";
import ListLoader from "../list-loader";


class Blog extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: true,
      blogItems: []
    };
  }

  getBlogItems() {
    axios
      .get('https://dds-blogdb.herokuapp.com/posts')
      .then(response => {
        console.log("Response", response.data)
        this.setState({
          isLoading: false,
          blogItems: response.data
        });

      }).catch(error => {
        console.log("error", error);
      })

  }

  componentWillMount() {
    this.getBlogItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div className="loading">
        <ListLoader />
      </div>;
    }
    return (
      <div className="the-blog">
        {
          this.state.blogItems !== null ?
            <div className="blog-wrapper" >
              {
                this.state.blogItems.map(item => (
                  <BlogItem key={item.id} id={item.id} title={item.title} content={item.content} slug={item.id} />
                ))
              }
            </div>

            : null
        }

      </div>
    );
  }
}

export default Blog;
