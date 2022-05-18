import React from "react";
import PriceCardStyle from "./PriceCardStyle.css";

const PriceCard = ({ offer, price, storage, users, send }) => {
  return (
    <div className="cardContainer">
      <h3>{offer}</h3>
      <h1>{price}</h1>
      <br />
      <p>{storage}</p>
      <br />
      <p>{users}</p>
      <br />
      <p>{send}</p>
      <button className="card-button">Learn More</button>
      <br />
    </div>
  );
};

export default PriceCard;
