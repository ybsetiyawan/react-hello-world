import React, {Component, Fragment} from "react";
import './BlogPost.css';


class BlogPost extends Component {
    render() {
        return(
            <Fragment>
                <p>Blog Post</p>
                <div className="post">
                    <div className="img-thumb">
                        <img src="https://placekitten.com/640/360" alt=""/>
                    </div>
                    <div className="content">
                        <p className="title">Dummy Title</p>
                        <p className="desc">Dummy Body Here</p>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default BlogPost;