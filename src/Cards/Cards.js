import Card from './Card/Card';
import styles from './Cards.module.css';
const cards = (props) => 
    <div style={{marginTop: "375px"}} className={styles.Cards}>
    {props.sites.map(site => (
         <Card 
            title={site.sitename} 
            desc={site.sitedesc} 
            lat={site.latitude} 
            long={site.longitude}
            showMap={props.clicked}
            info={site.deviceinfo} >
                {props.children}
        </Card>
    ))}
    </div>
;

export default cards;


