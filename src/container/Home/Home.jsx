import React from "react";
// import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
// import Product from "../Product/Product"; 
// import LifeCycleComp from "../LifeCycleComp/LifeCycleComp";
import BlogPost from "../BlogPost/BlogPost";

class Home extends React.Component {
    state = {
        showComponent :true
    }
    componentDidMount(){
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })    
        // }, 10000)
        
    }

    render() {

        return (
            <div>
                {/* <p>Youtube Component</p>
                <hr />
                <YoutubeComp 
                    time="7.12"
                    tittle="Tugas yang ke 1"
                    desc="2x Ditonton 2 Hari yang lalu"/>
                <YoutubeComp
                    time="8.12"
                    tittle="Tugas yang ke 2"
                    desc="4x Ditonton 4 Hari yang lalu"/>
                <YoutubeComp
                    time="9.12"
                    tittle="Tugas yang ke 3"
                    desc="6x Ditonton 6 Hari yang lalu"/>
                <YoutubeComp
                    time="10.12"
                    tittle="Tugas yang ke 4"
                    desc="5x Ditonton 5 Hari yang lalu"/>
                <YoutubeComp/> */}
                {/* <Product/> */}
{/* 
                <p>LifeCycle Component</p>
                <hr />
                {
                    this.state.showComponent
                    ?
                    <LifeCycleComp />
                    :null
                } */}

                <p>Blog Post</p>
                <hr/>
                <BlogPost />
            </div>
          )
    } 
}

export default Home;