import React, { Component } from "react";
import Pravatar from "pravatar";

export default class App extends Component {
  render() {
    return (
      <div>
        <Pravatar
          text=""
          bg=""
          width="100px"
          height="100px"
          radius="100px"
          fontSize="50px"
        />
      </div>
    );
  }
}
