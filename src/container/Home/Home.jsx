import React from "react";
import YoutubeComp from "../../component/YoutubeComp/YoutubeComp";
import Product from "../Product/Product";

class Home extends React.Component {
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
                <p>Counter</p>
                <hr />
                <Product/>
            </div>
          )
    } 
}

export default Home;