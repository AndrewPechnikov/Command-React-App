import React from "react";

import styles from './RA4.module.scss';
import background from 'img/ra4-background.jpeg';

const RA4 = props => {
    return (
        <div 
            className={styles['news-main-block']}
            style={{ backgroundImage: `url(${background})` }}>
            <div className={styles['news-main-block_title']}>
                <h4>{props.title}</h4>
                <p>{props.date}</p>
            </div>
            <p className={styles['news-main-block_text']}>{props.news}</p>
        </div>
    )
};

export default RA4;