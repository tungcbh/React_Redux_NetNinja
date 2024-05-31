import React, {Component} from "react";

class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value,
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <label> Add new todo: </label>
                <input type="text" onChange={this.handleChange}/>
            </form>
        )

    }
}

export default AddTodo;