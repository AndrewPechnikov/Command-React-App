import MainCard from "components/RA-2";
import styles from './RA3.module.scss';
import Arrow from './arrow.svg';
import React, { useState , useEffect } from 'react';
import getMovies from "API/getMovie";

function RA3(props) {

  const [items, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
        const movies = await getMovies(props.category);
        setData(movies.results.slice(0,4));
    };
    loadData();
}, [props.category]);
  
  return(
    <div>
     <div className={styles.section}>
      <div className={styles.section__header}>
        <p className={styles.section__headerTitle}>{props.title}</p>
        <a href="#" className={styles.section__headerLink}> 
          <span>see more</span> 
          <img src={Arrow} alt="arrow_pic" /> 
        </a>
      </div>
      <div className={styles.section__cards}>
      {items.length > 0 && items.map((obj) =>( <MainCard
                    key ={obj.id}
                    title = {obj.title} 
                    img = {"https://image.tmdb.org/t/p/w500///" + obj.poster_path}
                    imgAlt = {obj.title}
                    date = {obj.release_date}
                    age = "+12"
                    languageUA ="UA"
                    languageEN = "EN"
            />))}
  </div>
  </div>
  </div>
  ) 
}

export default RA3;
