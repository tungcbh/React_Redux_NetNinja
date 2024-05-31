import React, { Component } from 'react';

class AddData extends Component {
    state = {
        name: null,
        age: null,
        uni: null
    }

    handleOnChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.addData(this.state);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={this.handleOnChange} />
                    <label htmlFor="name">Age</label>
                    <input type="text" id="age" onChange={this.handleOnChange} />
                    <label htmlFor="name">University</label>
                    <input type="text" id="uni" onChange={this.handleOnChange} />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddData;