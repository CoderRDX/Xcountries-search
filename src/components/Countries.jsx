import React from "react";
import { useEffect, useState } from "react";
import styles from './Countries.module.css';
import CountryCard from "./CountryCard";

export default function Flags(){
    const api = "https://restcountries.com/v3.1/all";

    const [flags, setFlags] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

  

    useEffect(() => {
        const fetchdata = async() => {
            try{
                const res = await fetch(api);
                const data = await res.json();
                setFlags(data);
                // console.log(data)

            }catch(error){
                console.error("Error fetching data: ", error);
            }
        }

        fetchdata();
    }, []);

  
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  
  const filteredData = flags.filter((item) =>
    item.name.common.toLowerCase().includes(searchQuery.toLowerCase())
  );

    return(
        <div>
            <div className={styles.search}>
            <input
                className={styles.bar}
                type="text"
                placeholder="Search for countries..."
                value={searchQuery}
                onChange={handleSearchChange}
                />
            </div>
            <div className={styles.FlagsGrid}>
               

                {filteredData.length > 0 ? (
                        filteredData.map(flag =>(
                        <CountryCard key={flag.flag} name={flag.name.common} flagImg={flag.flags.png} alt={flag.flag}/>
                    ))
                    ) : (
                    null
                )}
            </div>
        </div>
    );

}