
import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map 
        gestureHandling="greedy" 
        containerStyle={{width: "100%", height: 325, position: "fixed", top: 0, left: 0}} google={this.props.google} 
        zoom={14} 
        initialCenter={this.props.latlng}
        center={this.props.center}>
          <Marker 
            position={this.props.center} 
            title={this.props.title} />
      </Map> 
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GMAPS
})(MapContainer)