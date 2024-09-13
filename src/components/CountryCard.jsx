import React from "react";
import './CountryCard.css';


export default function FlagCard({name, flagImg, alt}) {
    return(
        <div className="countryCard">
            <img className="image" src={flagImg} alt={alt} />
            <p>{name}</p>
        </div>
    );
}