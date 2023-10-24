import React, {Component} from "react";

class Counter extends Component {
    state = {
        order : 4
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue); 
    }

    handlePLus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })
    }

    handleMinus = () => {
        if(this.state.order > 0 ){
            this.setState({
                order: this.state.order - 1 
            }, () => {
                this.handleCounterChange(this.state.order);
            })
        }
        
    }
    render(){
        return(
                <div className="counter">
                    <b className="minus" onClick={this.handleMinus}>-</b>
                    <input type="text" value={this.state.order} />
                    <b className="plus" onClick={this.handlePLus}>+</b>
                </div>
        )
    }
}

export default Counter;