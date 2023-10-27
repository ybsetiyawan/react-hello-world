import React, { Component, useState } from 'react';
import './Hooks.css';
import { useEffect } from 'react';

// class Hooks extends Component {
//     state = {
//         count: 0
//     }

//     onUpdate = () => {
//         this.setState({
//             count: this.state.count + 1
//         })
//     }

//     onUpdate2 = () => {
//         if(this.state.count > 0){
            
//             this.setState({
//                 count: this.state.count - 1
//             })
//         }
//     }

//     componentDidMount() {
//         document.title = `Title Change : ${this.state.count}`
//     }

//     componentDidUpdate() {
//         document.title = `Title Change : ${this.state.count}`
//     }

//     componentWillUnmount() {
//         document.title = `ReactJS Hello World`
//     }

//     render() {
//         return (
//             <div className='p-hooks'>
//                 <p>Nilai Saya Saat ini adalah : {this.state.count} </p>
//                 <button onClick={this.onUpdate}>Update Nilai</button>
//                 <button onClick={this.onUpdate2} >Kurang Nilai</button>
//             </div>
//         )
//     }
// }


// contoh penggunaan Hooks
const Hooks = () => {
    const [count, setCount] = useState(0);

    useEffect(() =>{
        document.title = `Title Change : ${count}`;
        return () => {
            document.title = `ReactJS Hello World`
        }
    })

    return (
        <div className='p-hooks'>
            <p>Nilai Saya Saat ini adalah : {count} </p>
            <button onClick= {() => setCount(count +1 )} >Update Nilai</button>
        </div>
    )
}

export default Hooks;