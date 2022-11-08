import React, { Component, Fragment } from "react";
import { changeInputValue,addListItem } from './store/actionCreator';
import store from "./store";
import axios from "axios";

class TodoList extends Component {

    constructor(props){
        super(props);
        this.state = store.getState();
        store.subscribe(() =>this.setState(store.getState()));
        this.changeInputValue = this.changeInputValue.bind(this);
        this.addListValue = this.addListValue.bind(this);

        
    }
    componentDidMount(){
        console.log("commponentDidMount");
       axios.get('http://localhost:3000/initdata')
       .then(res => console.log(res))
       .catch(error => console.log(error)); 
    }

    render() {
        return (
            <Fragment>
                <div>
                    <label> 输入内容：</label>
                    <input placeholder="代办事项" value={this.state.inputValue} onChange = {this.changeInputValue}/>
                    <button onClick = {this.addListValue}>提交</button>
                </div>
                <div>
                    <ul>
                        {this.state.list.map((item, index) => {
                            return (<li key={ index }>{item}</li>);
                        })}
                    </ul>
                    
                </div>
            </Fragment>
        )      
    } 
    changeInputValue(e){
        console.info(e.target.value);
        const inputValue = e.target.value;
        store.dispatch(changeInputValue(inputValue))
    }

    addListValue() {
        const inputValue = this.state.inputValue;
        store.dispatch(addListItem(inputValue))

    }

}
export default TodoList;