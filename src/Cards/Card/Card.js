import React from 'react';
import Mapper from '../../Mapper/Mapper';
import styles from './Card.module.css'
const Card = (props) => (
    <div className={styles.Card}>
        <h3>{props.title}</h3>
        <p dangerouslySetInnerHTML={{__html : props.desc }}></p>
        <p dangerouslySetInnerHTML={{__html : props.info }}></p>
        <Mapper lat={props.lat} long={props.long} title={props.title} showMap={props.showMap} />
    </div>
);

export default Card;