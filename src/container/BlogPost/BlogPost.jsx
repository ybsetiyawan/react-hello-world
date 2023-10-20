import React, {Component, Fragment} from "react";
import './BlogPost.css';
import Post from "../../component/Post/Post";
import axios from "axios";


class BlogPost extends Component {

    state = {
        post: []
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts')
        .then((result) => {
            // console.log(result.data)
            this.setState({
                post: result.data
            })
        })
    }

    // fungsi untuk mendapatkan id yang akan dihapus 
    handleRemove = (data) => {
        // console.log(data)
        axios.delete(`http://localhost:3004/posts/${data}`).then((res)=>{
            this.getPostAPI();
        })
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
        // axios.get('http://localhost:3004/posts')
        // .then((result) => {
        //     // console.log(result.data)
        //     this.setState({
        //         post: result.data
        //     })
        // })

        // axios sudah dirubah menjadi fungsi this.getPostAPI
        this.getPostAPI();
    }

    render() {
        return(
            <Fragment>
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="add title" />
                    <label htmlFor="body-content">Blog Content</label>
                    <textarea name="body-content" id="body-content" cols="30" rows="10" placeholder="add blog content"></textarea>
                    <button className="btn-submit">Simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                        // return  <Post key={post.id} title={post.title} desc={post.body} remove={this.handleRemove}/>
                        // menyederhanakan fungsi post title dan desc menjadi 1 props
                        return  <Post key={post.id} data={post} remove={this.handleRemove}/>
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;