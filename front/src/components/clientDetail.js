import React, {Fragment} from 'react';
import './ClientDetail.css'

const ClientDetail = (props) => {
  console.log("client", props);
if (!props.client) return null;
  const enquieries = props.client._embedded.enquieries.map( (enquieries) => {
    
    return(
      <button key={enquieries.id}>
       
        <h3>{enquieries.datePosted}: {enquieries.property.titleDescription}</h3>
        <h3>{enquieries.property.address}</h3>
      </button>
    )
  })

  
  return (
    <div className= "enquieries">
      {/* <h5>Name: {props.client.name}</h5>
      <h5>E-mail: {props.client.email}</h5> */}
      {enquieries}
    </div>
  )
}

export default ClientDetail