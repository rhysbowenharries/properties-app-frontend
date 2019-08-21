import React, { Component, Fragment } from "react";
import "./ClientList.css"

class ClientList extends Component {

  render(){

console.log(this.props.data);

    return(
      <h1>Client List</h1>
    )
  }
}

export default ClientList

