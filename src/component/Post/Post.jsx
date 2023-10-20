import React from "react";

const Post = (props) => {
    return (
        <div className="post">
                    <div className="img-thumb">
                        <img src="https://cdn.media.amplience.net/i/petsathome/mb-cat_1?w=400&" alt=""/>
                    </div>
                    <div className="content">
                        <p className="title">{props.title}</p>
                        <p className="desc">{props.desc}</p>
                    </div>
                </div>
    )
}

export default Post;