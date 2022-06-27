import {Component} from 'react';
import './App.css';
import styles from './App.module.css';
import data from './data.json';
import Cards from './Cards/Cards';
import MapContainer from './MapContainer/MapContainer'
class App extends Component {
  state = {
    sites: data.sites, //.filter(e => e.municipality.toUpperCase() === "EDMONTON"),
    initLatlng : {lat: 53.5444, lng: -113.4909},
    latlng : {lat: 53.5444, lng: -113.4909},
    currentTitle : '',
    buttonText : "Sort by nearest"
  };
  mapClickHandler = (event, lat, lng, title) => {
    const newLatlng = {lat,lng};
    this.setState({latlng: newLatlng, currentTitle: title})
  }
  closestHandler = (event) => {
  this.setState({buttonText: 'sorting...'});  
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      const data = this.state.sites;
      const newData = data.sort((a,b) => {
        // triangulate from pos
        const myLat = pos.coords.latitude ;
        const myLng = pos.coords.longitude;
        const aLat = a.latitude;
        const bLat = b.latitude;
        const aLng = a.longitude;
        const bLng = b.longitude;

        const bDist = (myLat - bLat)**2 + (myLng - bLng)**2;
        const aDist = (myLat - aLat)**2 + (myLng - aLng)**2
        return aDist - bDist;
      })
      const latlng = {lat: newData[0].latitude, lng: newData[0].longitude}
      this.setState({latlng: latlng, sites: newData, buttonText: "Sort by nearest"})      
    });
  } 
}

  componentDidMount = () => {
   
  }
  render () {
    return [
      <div className={styles.Map} style={{stop: true}}><MapContainer className={styles.Map} style={{width: "100%", height: "400px"}} latlng={this.state.initLatlng} center={this.state.latlng} title={this.state.currentTitle} /></div>,
      <button 
        style={{position: "fixed", top: 325, left: 0, width: "100%", backgroundColor: "red", color: "white", fontWeight: "bold", textTransform: "uppercase", fontSize: "2em",  height: 50} } onClick={this.closestHandler}>{this.state.buttonText}</button>,
      <Cards sites={this.state.sites.slice(0,10)} clicked={this.mapClickHandler}/>
    ];
  }
}

export default App;
 