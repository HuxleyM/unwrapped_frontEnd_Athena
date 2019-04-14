import React, { Component } from 'react';
import MapContainer from './map'
import SearchBar from './searchbar'

class Find extends Component{
        constructor(props) {
          super(props)
          this.state = {
            venues: []
            }
          }
      
        geolocateMe = () => {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(this.getLatandLong);
            } else {
              console.log("Geolocation is not supported by this browser.");
            }
          }
      
        getLatandLong = (position) => {
            let location =  {location : {lat : position.coords.latitude.toFixed(2),  long : position.coords.longitude.toFixed(2)}};
            const body  = JSON.stringify(location)
            fetch('https://enigmatic-badlands-83570.herokuapp.com/api/v1/venues', {
              method: 'POST',
              headers:{
                'Content-Type': 'application/json'
              },
              body: body
            })
            .then((response) => {
              return response.json()
            })
            .then((response) => {
              this.setState({
                venues: response
              })
            })
          }
      
         componentDidMount() {
          this.geolocateMe();
        }

    
    render(){
        return (
        <div>
            <h1> Find</h1>

            <MapContainer />
        </div>
        );
    }
}

export default Find;

