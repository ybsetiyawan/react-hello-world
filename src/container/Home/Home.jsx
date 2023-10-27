import React, { Component, Fragment } from "react";
import Product from "../Pages/Product/Product"; 
import LifeCycleComp from "../Pages/LifeCycleComp/LifeCycleComp";
import BlogPost from "../Pages/BlogPost/BlogPost";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Home.css'
import YoutubeCompPage from "../Pages/YoutubeCompPage/YoutubeCompPage";
import DetailPost from "../Pages/BlogPost/DetailPost/DetailPost";
import GlobalProvider from "../../context/context";
import Hooks from "../Pages/Hooks/Hooks";



class Home extends Component {
    render() {
        return (
            <Router>
                    <Fragment>
                        <div className="navigation">
                            <Link to="/">BlogPost</Link>
                            <Link to="/produk">Produk</Link>
                            <Link to="/lifecycle">Lifecyle</Link>
                            <Link to="/youtube-component">Youtube Comp</Link>
                            <Link to="/hooks">Hooks</Link>
                        </div>
                        <Route path="/" exact component={BlogPost} />
                        <Route path="/detail-post/:postId" component={DetailPost} />
                        <Route path="/produk" component={Product} />
                        <Route path="/lifecycle" component={LifeCycleComp} />
                        <Route path="/youtube-component" component={YoutubeCompPage} />
                        <Route path="/hooks" component={Hooks} />
                    </Fragment>
            </Router>

            
          )
    } 
}

export default GlobalProvider(Home);