import React from "react";
import "./card.styles.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card-container">
      <Link to={`/gif/${props.item.id}`}>
        {" "}
        <img
          src={`${props.item.images.fixed_height_small_still.url}`}
          className="img-fluid"
        />
        
      </Link>

      {/* 
      <p>Username:{props.item.username}</p>
      <p>Rating:{props.item.images.downsized_large.url}</p> */}
    </div>
  );
};

export default Card;
