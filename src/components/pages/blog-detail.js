import React, { Component } from "react";
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

    // handleUpdateFormSubmission = (blog) => {
    //     this.setState({
    //         blogItem: blog,
    //         editMode: false
    //     });
    // }

    // handleFeaturedImageDelete = () => {
    //     this.setState({
    //         blogItem: {
    //             featured_image_url: ""
    //         }
    //     });
    // }

    getBlogItem() {
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

    // handleEditClick = () => {
    //     if (this.props.loggedInStatus === "LOGGED_IN") {
    //         this.setState({ editMode: true });
    //     }
    // }

    render() {
        const {
            title,
            author,
            content,
        } = this.state.blogItem;

        return (
            <div className="content-container" id="blog-detail-page">
                <h1 className="blog-title-detail" onClick={this.handleEditClick}>{title}</h1>
                <div className="author">By:{author}</div>
                <div className="content">{ReactHtmlParser(content)}</div>
            </div>
        );

    }
}