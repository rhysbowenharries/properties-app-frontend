import React, {Fragment} from 'react';
import { Link,} from "react-router-dom";
import './ClientDetail.css'

const ClientDetail = (props) => {
  console.log("client", props);
if (!props.client) return null;
  const enquieries = props.client._embedded.enquieries.map( (enquieries, index) => {
    
    return(
      <button>
        <Link className="link" key={enquieries.id} to="/properties">
          <h3>Enquiery number {index + 1}: {enquieries.datePosted}</h3>
          <h3>{enquieries.property.titleDescription}</h3>
          <h3>{enquieries.property.address}</h3>
        </Link>
      </button>
    )
  })

  
  return (
    <div className= "enquieries">    
      {enquieries}      
    </div>
  )
}

export default ClientDetail