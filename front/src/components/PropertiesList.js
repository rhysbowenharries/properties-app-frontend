import React, { Component, Fragment } from "react";
import "./PropertiesList.css"

class PropertiesList extends Component {

  render(){

    const propretiesComonents = this.props.data.map( (houseDetail) => {
      return(
        <div className="propertyDetail" key={houseDetail.id}>
          <h2 className="image">{houseDetail.image}</h2> 
          <h3>{houseDetail.price}</h3> 
          <h3>{houseDetail.titleDescription}</h3>
          <h4>{houseDetail.address}</h4>
          <h3>{houseDetail.mainDescription}</h3>
        </div>
      )
    })
    console.log(this.props.data);
    
    return(
      <Fragment>
        <div className="PropertiesList">
        <h3>Properties List</h3>
        {propretiesComonents}
        </div>
      </Fragment>
    )
  }
}

export default PropertiesList

// address: "Llanddeusant, Holyhead, Sir Ynys Mon, LL65"
// dateAdded: "12-03-2019"
// id: 1
// image: "front of houseImage"
// mainDescription: "If you have ever dreamt of converting an historic Welsh Chapel into your dream home ..."
// price: "Guide Price £125,000"
// titleDescription: "2 bedroom detached house for sale"
// const commentComponents = this.props.comments.map((commentData) => {
//   return (
//     <Comment
//       author={commentData.author}
//       key={commentData.id}
//     >
//         {commentData.catchphrase}
//     </Comment>
//   )
// })

// return (
//   <Fragment>
//     {commentComponents}
//   </Fragment>
// )