import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import striptags from 'striptags';
import Truncate from 'react-truncate';

class BlogItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { id, content, title } = this.props;

        return (
            <div className="blog-item-list">
                <Link to={`/b/${id}`}>
                    <h1>{title}</h1>
                </Link>

                <Truncate style={{ fontSize: "1.7em" }} lines={5} ellipsis={
                    <span >
                        ...<Link to={`/b/${id}`}>Read more</Link>
                    </span>
                }>
                    {striptags(content)}
                </Truncate>

            </div>
        );

    }

};

export default BlogItem;