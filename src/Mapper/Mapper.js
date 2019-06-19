import React from 'react';
import styles from './Mapper.module.css';
const mapper = (props) => (
    <div className={styles.Mapper}>
        {props.children}
        <button 
            onClick={(e) => props.showMap(e, props.lat, props.long, props.title)}>
            Show On Map
        </button>
    </div>
);

export default mapper;