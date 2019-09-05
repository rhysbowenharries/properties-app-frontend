import React, { Component, Fragment } from "react";
import "./PropertiesList.css"

class PropertiesList extends Component {

  render(){

    const propretiesComonents = this.props.data.map( (houseDetail) => {
      return(
        <div className="PropertyDetail" key={houseDetail.id}>
          <div>
            <h2>{houseDetail.image}</h2> 
          </div>
          <div>
            <h3>{houseDetail.price}</h3> 
            <h3>{houseDetail.titleDescription}</h3>
            <h4>{houseDetail.address}</h4>
            <h3>{houseDetail.mainDescription}</h3>
          </div>
        </div>
      )
    })
    console.log(this.props.data);
    
    return(
      <Fragment>
        <div className="PropertiesList">
        <h2>Properties</h2>
        {propretiesComonents}
        </div>
      </Fragment>
    )
  }
}

export default PropertiesList

