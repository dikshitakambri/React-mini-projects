import "../styles.css";
import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <div className="card-img">
          <Avatar img= {props.img}/>
        </div>
      </div>
      <div className="bottom">
        <Detail detailinfo={props.tel}  />
        <Detail detailinfo={props.email} />
      </div>
    </div>
  );
}

export default Card;
