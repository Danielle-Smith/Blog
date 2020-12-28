import React, { Component } from "react";
import axios from "axios";
import BlogItem from "../blog/blog-item";
import BlogModal from "../modals/blog-modal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Blog extends Component {
    constructor() {
        super();

        this.state = {
            blogItems: []
        };

  
    }

    // handleSuccessfulNewBlogSubmission = (blog) => {
    //     this.setState({
    //         blogModalIsOpen: false,
    //         blogItems: [blog].concat(this.state.blogItems)
    //     });
    // }

    // handleModalClose = () => {
    //     this.setState({
    //         blogModalIsOpen: false
    //     });
    // }

    // handleNewBlogClick = () => {
    //     this.setState({
    //         blogModalIsOpen: true
    //     });
    // }

    //    onScroll = () => {
    //         if (this.state.isLoading || this.state.blogItems.length === this.state.totalCount) {
    //             return;
    //         }
    //         if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight)
    //         {
    //             this.getBlogItems();
    //         }
                
    //     }

    getBlogItems() {
        axios
            .get('http://127.0.0.1:5000/posts')
            .then(response => {
                console.log("Response", response.data)
                this.setState ({
                    blogItems: response.data
                });
                // console.log(this.state.blogItems)
            }).catch(error => {
                console.log("error", error);
            })
            console.log(this.state.blogItems)
    }
            

            // this.setState ({
            //     blogItems: this.state.blogItems.concat(response.data.portfolio_blogs),
            //     totalCount: response.data.meta.total_records,
            //     isLoading: false
            // })
        // }).catch(error => {
        //     console.log("getBlogItems error", error);
        // });
    

    

    componentWillMount() {
        this.getBlogItems();
    }
    // componentWillUnmount() {
    //     window.removeEventListener("scroll", this.onScroll, false);
    // }

    // handleDeleteClick = (blog) => {
    //     axios.delete(`https://api.devcamp.space/portfolio/portfolio_blogs/${blog.id}`, { withCredentials: true }
    //     ).then(response => {
    //         this.setState({
    //             blogItems: this.state.blogItems.filter(blogItem => {
    //                 return blog.id != blogItem.id;
    //             })
    //         });

    //         return response.data 

    //     }).catch(error => {
    //         console.log("DeleteClickError", error);
    //     });
    // }

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

    // render() {
    //     const blogRecords = this.state.blogItems.map(blogItem => {
    //         if (this.props.loggedInStatus === "LOGGED_IN") {
    //             return (
    //                 <div key={blogItem.id} className="admin-blog-wrapper">
    //                     <BlogItem blogItem={blogItem} />
    //                     <a onClick={() => this.handleDeleteClick(blogItem)}>
    //                         <FontAwesomeIcon icon="trash" />
    //                     </a>
    //                 </div>
    //             );
    //         } else {
    //             return <BlogItem key={blogItem.id} blogItem={blogItem} />
    //         }    
    //     });

    //     return (
    //         <div className="blog-container">
    //             <BlogModal
    //                 handleSuccessfulNewBlogSubmission={this.handleSuccessfulNewBlogSubmission}
    //                 handleModalClose={this.handleModalClose} 
    //                 modalIsOpen={this.state.blogModalIsOpen} />

    //             {this.props.loggedInStatus === "LOGGED_IN" ? (
    //                 <div className="new-blog-link">
    //                     <a onClick={this.handleNewBlogClick}>
    //                         <FontAwesomeIcon icon="plus-circle" />
    //                     </a>
    //                 </div> 
    //             ) : null }

    //             <div className="content-container">{blogRecords}</div>

    //             {this.state.isLoading ? (
    //                 <div className="content-loader">
    //                     <FontAwesomeIcon icon="spinner" spin />
    //                 </div>
    //             ) : null}
    //         </div>
    //     );
    // }
}

export default Blog;