import React, {Component} from "react";
import ActionType from "../../../../redux/reducer/GlobalActionType";
import { GlobalConsumer } from "../../../../context/context";

class Counter extends Component {
    
    render(){
        console.log(this.props);
        return(
            <div className="counter">
                <button className="minus" onClick={()=> this.props.dispatch({type: ActionType.MINUS_ORDER})}> - </button>
                <input type="text" value={this.props.state.totalOrder} />
                <button className="plus" onClick={()=> this.props.dispatch({type: ActionType.PLUS_ORDER})}> + </button>
            </div>
        )
    }
}

export default GlobalConsumer (Counter);