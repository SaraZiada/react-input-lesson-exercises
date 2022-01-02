import React, { Component } from 'react';

class Exercise1 extends Component {

    constructor() {
        super()
        this.state = {
            name: "",
            age: ""
        }

    }
    alertMessage = () => {
        alert(`Come in ${this.state.name}, youre ${this.state.age}`)
    }
    handleName = (event) => {
        let value = event.target.value

        this.setState({
          name: value
        });
    }
    handleAge = (event) =>{
        let value = event.target.value
        this.setState({
            age: value
          });
    }
    render() {
        return (
            <div>
                <input type="text" id="name-input" value={this.state.name} onChange={this.handleName}/>
                <input type="number" id="age-input" value={this.state.age} onChange={this.handleAge}/>
                <button onClick={this.alertMessage}>Go to Bar</button>
            </div>
        );
    }
}

export default Exercise1;