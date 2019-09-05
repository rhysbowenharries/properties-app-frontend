import React, { Component, Fragment } from "react";
import "./ClientList.css"

const ClientList = (props) => {

  


    const clientsComponents = props.data.map( (clientInfo, index) => {
      
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
       
          <button value={index} className="ClientDetail" key={clientInfo.id} onClick={handleChange}>
            {clientInfo.name}
          </button>
          // <div className="content">
          //   {enquieries}
          // </div>
      
      ) 
    })

      function handleChange(event) {
       props.onClientSelect(event.target.value);
        
      }
    console.log(props.data);

    return(
      <div className="ClientList">
        <div>
          <h1>Client List</h1>
        </div>
        <div>
          {clientsComponents}
        </div>
      </div>
    )
  
}

export default ClientList

