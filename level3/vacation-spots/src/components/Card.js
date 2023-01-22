import React from "react";

export default function Card(props){
    return (
        <div className="card">
            <h3 className="place">{props.place}</h3>
            <p className="price">{props.price}</p>
            <p className="timeToGo">{props.timeToGo}</p>
        </div>
    )
}


// place: "Meridian, Idaho",
//       price: 40,
//       timeToGo: