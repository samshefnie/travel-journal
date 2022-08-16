import React from "react";
import "./Card.css"
import locationIcon from "../../images/locationIcon.png"

export default function Card(props) {
    
    let dates;

    if (props.startDate === props.endDate)
        dates = props.startDate
    else
        dates = `${props.startDate} - ${props.endDate}`
    

    return (
        <section>

                <img className="locationPic" src={require(`../../images/${props.img}`)}/>
                
                <div className="content">
                    <div className="locationInfo">
                        <img className="locationIcon" src={locationIcon} />
                        <h3>{props.country}</h3>
                        <a className="map" href={`https://${props.location}`}>View on Google Maps</a>
                    </div>
                    
                    <h1 className="name">{props.name}</h1>
                    <h3 className="dates">{dates}</h3>
                    <p className="info">{props.info}</p>
                </div>
                <hr />
        </section>
    )
}