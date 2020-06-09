import React from "react";
import "./gif-list.styles.css";
import Card from "../card/card.component";

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default GifList;
