import React from "react";

export default function Card(props){
    let changeBg;
    let changeColor;
    let dollarSign;
    if(props.timeToGo === 'Spring'){
        // document.querySelector('.card').classList.add('spring')
        changeBg = 'spring'
    }else if(props.timeToGo === 'Winter' ){
        // document.querySelector('.card').classList.add('winter')
        changeBg = 'winter'
        changeColor = 'black-text'
    }else if(props.timeToGo === 'Summer' ){
        // document.querySelector('.card').classList.add('summer')
        changeBg = 'summer'
    }else if(props.timeToGo === 'Fall' ){
        // document.querySelector('.card').classList.add('fall')
        changeBg = 'fall'
    }else{
        document.querySelector('.card').classList.add('black')
    }

    if(props.price > 1000){
        dollarSign = '$$$'
    }else if(props.price < 1000 && props.price > 499 ){
        dollarSign = '$$'
    }else if(props.price < 500 ){
        dollarSign = '$'
    }else{
        dollarSign = ''
    }

    return (
        <div className={`card ${changeBg} ${changeColor}`}>
            
            <div className="card-image">
                <img src={props.img} alt="" />
            </div>
            <h3 className="place">{props.place}</h3>
            <p className="price">Price: {props.price}</p>
            <p className="timeToGo">Time to Go: {props.timeToGo}</p>
            <div className="card--badge">{dollarSign}</div>
        </div>
    )
}


// place: "Meridian, Idaho",
//       price: 40,
//       timeToGo: