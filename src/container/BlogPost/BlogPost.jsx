import React, {Component, Fragment} from "react";
import './BlogPost.css';
import Post from "../../component/Post/Post";
import axios from "axios";


class BlogPost extends Component {

    state = {
        post: []
    }

    componentDidMount(){

        // cara pemanggilan API dengan menggunakan fetch

        // ketika komponen berhasil di mount , kita akan memanggil api 
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // // respons dari url dirubah ke json
        // .then(response => response.json())
        // // memunculkan json ke console
        // // .then(json => console.log(json))
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     })

        // cara pemanggilan menggunakan axios
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((result) => {
            // console.log(result.data)
            this.setState({
                post: result.data
            })
        })

    }

    render() {
        return(
            <Fragment>
                <p className="section-title">Blog Post</p>
                {
                    this.state.post.map(post => {
                        return  <Post key={post.id} title={post.title} desc={post.body}/>
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;