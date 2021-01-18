import React, {Component } from "react";
import axios from "axios";
import ReactHtmlParser from "react-html-parser";

export default class BlogDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentId: this.props.match.params.slug,
            blogItem: {},
            editMode: false
        };
    }

    handleUpdateFormSubmission = (blog) => {
        this.setState({
            blogItem: blog,
            editMode: false
        });
    }

    handleFeaturedImageDelete = () => {
        this.setState({
            blogItem: {
                featured_image_url: ""
            }
        });
    }

    getBlogItem() {
        console.log(this.props.match.params.slug);
        axios.get(
            `https://dds-blogdb.herokuapp.com/post/${this.state.currentId}`
        ).then(response => {
            this.setState({
                blogItem: response.data
            });
        }).catch(error => {
            console.log("getBlogItem", error);
        })
    }

    componentDidMount() {
        this.getBlogItem();
    }

    handleEditClick = () => {
        if (this.props.loggedInStatus === "LOGGED_IN") {
            this.setState({ editMode: true });
        }
    }

    render() {
        const {
            title,
            author,
            content,
        } = this.state.blogItem;

        

        const contentManager = () => {
            if (this.state.editMode) {
                return (
                    <BlogForm 
                    editMode={this.state.editMode} 
                    blog={this.state.blogItem} 
                    handleFeaturedImageDelete={this.handleFeaturedImageDelete}
                    handleUpdateFormSubmission={this.handleUpdateFormSubmission}/>
                );
            } else {
                return (
                    <div className="content-container">
                        <h1 onClick={this.handleEditClick}>{title}</h1>   
                        <div className="author">By:{author}</div>
                        <div className="content">{ReactHtmlParser(content)}</div>
                    </div>
                );
            }
        };

        return <div className="blog-container">{contentManager()}</div>;
    }
}