import React, { Component } from "react";
import axios from "axios";
import BlogItem from "../blog/blog-item";


class Blog extends Component {
    constructor() {
        super();

        this.state = {
            blogItems: []
        };
    }


    getBlogItems() {
        axios
            .get('http://127.0.0.1:5000/posts')
            .then(response => {
                console.log("Response", response.data)
                this.setState ({
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
        return(
          <div className="the-blog">
    
            {
              this.state.blogItems !== null ?
              <div className="blog-wrapper">
                {
                    this.state.blogItems.map(item => (
                      <BlogItem key={item.id} id={item.id} title={item.title} content={item.content} slug={item.id}/>
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
