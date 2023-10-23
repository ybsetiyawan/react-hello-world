import React from "react";

const Post = (props) => {
    return (
        <div className="post">
                    <div className="img-thumb">
                        <img src="https://cdn.media.amplience.net/i/petsathome/mb-cat_1?w=400&" alt=""/>
                    </div>
                    <div className="content">
                        <p className="title" onClick={()=> props.goDetail(props.data.id)}>{props.data.title}</p>
                        <p className="desc">{props.data.body}</p>
                        <button className="update" onClick={() => props.update(props.data)}>Update</button>
                        <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>
                    </div>
                </div>
    )
}

export default Post;