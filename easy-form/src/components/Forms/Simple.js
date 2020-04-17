import React, { Component } from "react";
import Input from "../Input/Input";

class Simple extends Component {
  state = {
    errors: "",
    name: "",
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password } = this.state;
    console.log("Form Submitted: ", this.state);
    this.setState({ name: "", email: "", password: "" });
  };

  render() {
    return (
      <div className="simple-from">
        <h1>Hello From Simple Form</h1>
        <form className="simple-form" onSubmit={this.handleSubmit}>
          <Input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Name"
            onChange={this.handleChange}
          ></Input>
          <Input
            type="text"
            name="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleChange}
          ></Input>
          <Input
            type="text"
            name="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handleChange}
          ></Input>
          <button type="submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Simple;
