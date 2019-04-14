import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {

  constructor(props){
    super();
    console.dir(props)
    this.state ={
      coordinatesObject: props.currentLocation,
      markers: props.markers
    }

  }

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
           lat: this.state.coordinatesObject.lat,
           lng: this.state.coordinatesObject.long
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDeYKixkdIQmSfClYn_Djv3dUep9GIFUHE'
})(MapContainer);