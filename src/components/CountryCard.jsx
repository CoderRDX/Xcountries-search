import React from "react";
import styles from './CountryCard.module.css';


export default function FlagCard({name, flagImg, alt}) {
    return(
        <div className={styles.countryCard}>
            <img className={styles.image} src={flagImg} alt={alt} />
            <p>{name}</p>
        </div>
    );
}