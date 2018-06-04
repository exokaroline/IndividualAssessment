//https://www.youtube.com/watch?v=qH4pJISKeoI

import React from "react";
import './App.css';

export default class Form extends React.Component {
  state = {
    name: "",
    company: "",
    details: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.setState({
        name: "",
        company: "",
        details: ""
    });
  };

  render() {
    return (
     <div className = "inputFields"> 
      <form>
         <div className="labels">
         <label for="test">Name: </label></div>
        <input
          name="name"
          value={this.state.name}
          onChange={e => this.change(e)}
        />
        <br />
        <div className="labels">
        <label for="test">Company: </label></div>
        <input
          name="company"
          value={this.state.company}
          onChange={e => this.change(e)}
        />
        <br />
        <div className="labels">
        <label for="test">Contract Details: </label></div>
        <input
          name="details"
          value={this.state.details}
          onChange={e => this.change(e)}
        />
        <br />
        <div className = "buttonDiv">
        <button onClick={e => this.onSubmit(e)}>Submit</button></div>
      </form>
      </div>

    );
  }
}