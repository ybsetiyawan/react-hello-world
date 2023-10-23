import React, {Component, Fragment} from "react";
import './BlogPost.css';
import Post from "../../../component/Post/Post";
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
        },
        isUpdate: false
        
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
            this.setState({
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                },
            })
        },(err) =>{
            console.log('error :',err);
        })
    }

    putDataToAPI = () => {
           axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`,this.state.formBlogPost).then((res)=>{
            console.log(res);
            this.getPostAPI();
            // mengmbalikan isUpdate menjadi false saat setelah user berhasil melakukan update data ( mengembalikan tombol simpan menjadi fungsi post)
            this.setState({
                isUpdate: false,
                // mengembalikan kondisi form data seperti awal
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                },
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

    handleUpdate = (data) => {
        console.log(data);
        this.setState({
            formBlogPost: data,
            // ketika button update di klik oleh user, maka isUpdate berubah menjadi true
            isUpdate: true
        })
    }

    handleFormChange = (event) => {
        // event.target adalah fungsi dari javascript untuk mendapatkan nilai pada placeholder secara spesifik
        // menampung isi dari formBlogPost dan dipindah ke formBlogPostNew untuk dijadikan variabel baru dan di panggil secara spesifik
        let formBlogPostNew = {...this.state.formBlogPost};
        // membuat id secara dinamis
        let timeStamp = new Date().getTime();
        // kondisi agar saat user ingin update data, data id tidak diganti dengan yang baru, agar data id yang lama masih bisa digunakan.
        if(!this.state.isUpdate){
            formBlogPostNew['id'] = timeStamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;
        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
            // console.log('value obj formBlogPost: ', this.state.formBlogPost);
        })
    }

    handleSubmit = () => {
        // console.log(this.state.formBlogPost);

        // membuat kondisi jika isUpdate bernilai true maka lakukan 
        if(this.state.isUpdate){
            this.putDataToAPI();
        }else{
            this.postDataToAPI();
        }
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
                <p className="section-title">Halaman Blog Post</p>
                <hr />
                <p className="section-title">Blog Post</p>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text" value={this.state.formBlogPost.title}
                        name="title" placeholder="add title" onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea
                        name="body" id="body" cols="30" rows="10"
                        value={this.state.formBlogPost.body}
                        placeholder="add blog content" onChange={this.handleFormChange}>
                    </textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {
                    this.state.post.map(post => {
                        // return  <Post key={post.id} title={post.title} desc={post.body} remove={this.handleRemove}/>
                        // menyederhanakan fungsi post title dan desc menjadi 1 props
                        return  <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} />
                    })
                }
            </Fragment>
        )
    }
}

export default BlogPost;