import React, { Component } from "react";
import axios from "axios";

import RichTextEditor from "../forms/rich-text-editor";

export default class BlogForm extends Component {
    constructor(props) {
        super();

        this.state = {
            id: "",
            title: "",
            blog_status: "",
            content: "",
            apiUrl: "http://127.0.0.1:5000/posts",
            apiAction: "post"
        }

        this.featuredImageRef = React.createRef();

    }

    componentWillMount = () => {
        if (this.props.editMode) {
            this.setState({
                id: this.props.blog.id,
                title: this.props.blog.title,
                blog_status: this.props.blog.blog_status,
                content: this.props.blog.content,
                apiUrl: `http://127.0.0.1:5000/post/${this.props.blog.id}`,
                apiAction: "patch"
            });
        }
    }

    handleRichTextEditorChange = (content) => {
        this.setState({ content });
    }

    buildForm = () => {
        let formData = new FormData();

        formData.append("portfolio_blog[title]", this.state.title);
        formData.append("portfolio_blog[content]", this.state.content);
        
        return formData;
        
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        axios({
            method: this.state.apiAction,
            url: this.state.apiUrl,
            data: this.buildForm(),
            withCredentials: true
        })
        .then(response => {
            this.setState({
                title: "",
                content: ""
            });

            if (this.props.editMode) {
                this.props.handleUpdateFormSubmission(response.data.portfolio_blog);
            } else {
                this.props.handleSuccessfulFormSubmission(response.data.portfolio_blog);
            }
        }).catch(error => {
            console.log("handleSubmit for blog error", error);
        });
        
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="blog-form-wrapper">
                <div className="two-columns">
                    <input 
                        type="text"
                        onChange={this.handleChange}
                        name="title"
                        placeholder="Blog title"
                        value={this.state.title}
                    />
    
                </div>

                <div className="one-column">
                    <RichTextEditor 
                    handleRichTextEditorChange={this.handleRichTextEditorChange}
                    editMode={this.props.editMode}
                    contentToEdit={this.props.editMode && this.props.blog.content
                                ? this.props.blog.content
                                : null
                            }
                    />
                </div>

                <button className="btn">Save</button>

            </form>
        );
    }
}