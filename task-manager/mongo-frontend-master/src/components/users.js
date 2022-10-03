import React, { Component } from "react";
import axios from "axios";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersCollection: [],
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8081/users")
      .then((res) => {
        this.setState({ usersCollection: res.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <h1>Users</h1>
        <h2>tasks</h2>
        <h2>sports</h2>
      </div>
    );
  }
}

export default Users;