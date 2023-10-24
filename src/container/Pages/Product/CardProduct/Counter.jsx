import React, {Component} from "react";
import { connect } from "react-redux";
import ActionType from "../../../../redux/reducer/GlobalActionType";

class Counter extends Component {
    
    render(){
        // console.log(this.props);
        return(
                <div className="counter">
                    <button className="minus" onClick={this.props.handleMinus}> - </button>
                    <input type="text" value={this.props.order} />
                    <button className="plus" onClick={this.props.handlePLus}> + </button>
                </div>
        )
    }
}

//dispatching redux
const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handlePLus: () => dispatch({type: ActionType.PLUS_ORDER}) ,
        handleMinus: () => dispatch({type: ActionType.MINUS_ORDER})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);