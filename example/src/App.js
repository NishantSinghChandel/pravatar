import React, { Component } from "react";
import Pravatar from "pravatar";

export default class App extends Component {
  render() {
    return (
      <div>
        <Pravatar
          text="Hello world some "
          image="https://avatars1.githubusercontent.com/u/17858766?s=88&v=4"
          width="100px"
          height="100px"
          radius="100px"
          fontSize="50px"
          bg="#e7e7e7"
          textColor="#000"
          initial="true"
        />
      </div>
    );
  }
}
