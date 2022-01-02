import React, { Component } from 'react';

class Exercise2 extends Component {

constructor() {
    super()
    this.state = {
        name: "",
        fruit: ""
    }
}
handleChange = (event) => {
    this.setState({fruit: event.target.value}, () =>  console.log(`Hey ${this.state.name} favorite flavor is: ${this.state.fruit}`));

  }
  handleName = (event) => {
    this.setState({name : event.target.value})
  }

render() {
    return (
        <div>
            <input id="name-input" onChange={this.handleName} value={this.state.name}/>
            <select value={this.state.fruit} onChange={this.handleChange} id="select-input" name="options">
                <option value="A" >a</option>
                <option value="B">b</option>
                <option value="C">c</option>
            </select>
        </div>
    );
}
}

export default Exercise2;