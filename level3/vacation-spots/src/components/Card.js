import React from "react";

export default function Card(props){
    return (
        <div className="card">
            <div className="card-image">
                <img src={props.img} alt="" />
            </div>

            <h3 className="place">{props.place}</h3>
            <p className="price">Price: {props.price}</p>
            <p className="timeToGo">Time to Go: {props.timeToGo}</p>
        </div>
    )
}


// place: "Meridian, Idaho",
//       price: 40,
//       timeToGo: