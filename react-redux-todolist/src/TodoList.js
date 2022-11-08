import React, { Component, Fragment } from "react";
import { changeInputactionRedux } from './store/actionCreator';
import store from "./store";

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = store.getState();
        store.subscribe(() =>this.setState(store.getState()));
        this.changeInputValue = this.changeInputValue.bind(this);

        
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label> 输入内容：</label>
                    <input placeholder="代办事项" value={this.state.inputValue} onChange = {this.changeInputValue}/>
                    <button style={{"margin-left" : "10px"}}>提交</button>
                </div>
                <div>
                    {this.state.list}
                </div>
            </Fragment>
        )      
    } 

    changeInputValue(e){
        console.info(e.target.value);
        const inputValue = e.target.value;
        store.dispatch(changeInputactionRedux(inputValue))

    }

}
export default TodoList;