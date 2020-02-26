import React from "react";

const Cards = props => (
  <div className="card"
  onClick={() => props.clickedImage(props.id)}>
      <img src={props.image} alt=""/>
  </div>
);

export default Cards;