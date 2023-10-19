import React, {Component} from "react";
import './BlogPost.css';


class BlogPost extends Component {
    render() {
        return(
            <div>
                <p>Blog Post</p>
                <div className="post">
                    <div className="img-thumb">
                        <img src="" alt=""/>
                    </div>
                    <div className="content">
                        <p className="title">Dummy Title</p>
                        <p className="desc">Dummy Body Here</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogPost;