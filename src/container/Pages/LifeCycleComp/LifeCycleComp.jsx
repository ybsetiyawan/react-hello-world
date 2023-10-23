import React, {Component, Fragment} from "react";
import './LifeCycleComp.css';

class LifeCycleComp extends Component {

    constructor (props) {
        super(props);
        this.state = {
            count: 1
        }
        console.log('constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('getDerivedStateFromProps')
        return null;
    }

    componentDidMount (){

        console.log('componentDidMount')
        // setTimeout(() => {
        //     this.setState({
        //         count: 2
        //     })    
        // }, 4000)
        
    }

    shouldComponentUpdate(nextProps, nextState){
        console.group('shouldComponentUpdate')
        // console.log('nextProps: ',nextProps);
        console.log('nextState: ',nextState);
        console.log('thisState:', this.state);
        console.groupEnd();
        // memberikan batas nilai update pada component 
        if(nextState.count >= 4){
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshotBeforeUpdate')
        return null;

    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate')
        
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')

    }

    changeCount = () => {

        // fungsi menambah nilai 1 dari count awal setiap button di klik
        this.setState({
            count: this.state.count + 1
        })
    }


    render(){
        console.log('render')
        return(
            <Fragment>
                <p>Halaman Lifecycle</p>
                <hr />
                <button className="btn" onClick={this.changeCount}>Componen Button {this.state.count}</button>
            </Fragment>
        )
    }
}

export default LifeCycleComp;