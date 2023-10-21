import React, {Component, Fragment} from "react";
import './BlogPost.css';
import Post from "../../component/Post/Post";
import axios from "axios";


class BlogPost extends Component {

    state = {
        post: [],
        // membuat objek untuk menyimpan hasil dari inputan pada placeholder
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        }
        
    }

    getPostAPI = () => {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
        .then((result) => {
            // console.log(result.data)
            this.setState({
                post: result.data
            })
        })
    }
   
    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts',this.state.formBlogPost).then((res) =>{
            console.log(res);
            this.getPostAPI();
        },(err) =>{
            console.log('error :',err);
        })
    }
    // fungsi untuk mendapatkan id yang akan dihapus 
    handleRemove = (data) => {
        // console.log(data)
        axios.delete(`http://localhost:3004/posts/${data}`).then((res)=>{
            this.getPostAPI();
        })
    }

    handleFormChange = (event) => {
        // event.target adalah fungsi dari javascript untuk mendapatkan nilai pada placeholder secara spesifik
        // menampung isi dari formBlogPost dan dipindah ke formBlogPostNew untuk dijadikan variabel baru dan di panggil secara spesifik
        let formBlogPostNew = {...this.state.formBlogPost};
        // membuat id secara dinamis
        let timeStamp = new Date().getTime();
        // dimana menyasar pada formBlogPostNew id nya diganti dengan timeStamp
        formBlogPostNew['id'] = timeStamp;
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
            // console.log('value obj formBlogPost: ', this.state.formBlogPost);
        })
    }

    handleSubmit = () => {
        // console.log(this.state.formBlogPost);
        this.postDataToAPI();
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
                    <input type="text" name="title" placeholder="add title" onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea
                        name="body" id="body" cols="30" rows="10"
                        placeholder="add blog content" onChange={this.handleFormChange}>
                    </textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
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