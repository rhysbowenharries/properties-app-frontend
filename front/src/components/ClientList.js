import React, { Component, Fragment } from "react";
import "./ClientList.css"

class ClientList extends Component {

  render(){

    const clientsComponents = this.props.data.map( (clientInfo) => {
      
      const enquieries = clientInfo._embedded.enquieries.map((enquieries) => { 
        return(
          <div className= "enquieries" key={enquieries.id}>
            <h3>{enquieries.datePosted}</h3>
            <h3>{enquieries.property.titleDescription}</h3>
            <h4>{enquieries.property.address}</h4>
          </div>
        )

      })
      
      return(
        <div className="propertyDetail" key={clientInfo.id}>
          <h3>{clientInfo.name}</h3> 
          <h3>{clientInfo.email}</h3>
          {enquieries}
        </div>
      ) 
    })

console.log(this.props.data);

    return(
      <div>
        <h1>Client List</h1>
        {clientsComponents}
      </div>
    )
  }
}

export default ClientList

