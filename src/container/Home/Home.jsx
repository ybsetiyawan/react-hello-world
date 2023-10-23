import React, { Component, Fragment } from "react";
import Product from "../Pages/Product/Product"; 
import LifeCycleComp from "../Pages/LifeCycleComp/LifeCycleComp";
import BlogPost from "../Pages/BlogPost/BlogPost";
import { BrowserRouter, Route, Link } from "react-router-dom";
import './Home.css'
import YoutubeCompPage from "../Pages/YoutubeCompPage/YoutubeCompPage";
class Home extends Component {
    state = {
        showComponent :true
    }
    // componentDidMount(){
    //     // setTimeout(() => {
    //     //     this.setState({
    //     //         showComponent: false
    //     //     })    
    //     // }, 10000)
        
    // }

    render() {

        return (
            <BrowserRouter>
       
            <Fragment>
                <div className="navigation">
                    <Link to="/">BlogPost</Link>
                    <Link to="/produk">Produk</Link>
                    <Link to="/lifecycle">Lifecyle</Link>
                    <Link to="/youtube-component">Youtube Comp</Link>
                </div>
                <Route path="/" exact component={BlogPost} />
                <Route path="/produk" component={Product} />
                <Route path="/lifecycle" component={LifeCycleComp} />
                <Route path="/youtube-component" component={YoutubeCompPage} />
            </Fragment>
            </BrowserRouter>

            
          )
    } 
}

export default Home;