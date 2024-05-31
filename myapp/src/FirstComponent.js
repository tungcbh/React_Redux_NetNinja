import React, { Component } from 'react';

class FirstComponent extends Component {
    render() {
        const {name, age, uni} = this.props;

        return (
            <div className="tung">
                <div>Name: {name}</div>
                <div>Age:{age}</div>
                <div>University: {uni}</div>
            </div>
        );
    }
}
export default FirstComponent