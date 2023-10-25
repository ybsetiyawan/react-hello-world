import React, {Component} from "react";
import { RootContext } from '../../../Home/Home'
import ActionType from "../../../../redux/reducer/GlobalActionType";

class Counter extends Component {
    
    render(){
        // console.log(this.props);
        return(
            <RootContext.Consumer>
                {
                    value => {
                        // console.log('value :' ,value)
                        return (
                            <div className="counter">
                                <button className="minus" onClick={()=> value.dispatch({type: ActionType.MINUS_ORDER})}> - </button>
                                <input type="text" value={value.state.totalOrder} />
                                <button className="plus" onClick={()=> value.dispatch({type: ActionType.PLUS_ORDER})}> + </button>
                            </div>
                        )
                    }
                }
            </RootContext.Consumer>
        )
    }
}


export default Counter;