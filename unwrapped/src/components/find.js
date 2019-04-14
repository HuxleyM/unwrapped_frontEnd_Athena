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
            var coordinatesObject = {lat : position.coords.latitude.toFixed(2),  long : position.coords.longitude.toFixed(2)}

            let location =  {location : coordinatesObject};
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
                venues: response,
                currentLocation:  coordinatesObject
              })
            })
          }
      
         componentDidMount() {
          this.geolocateMe();
        }

    
    render(){
        console.dir(this.state.venues)
        return (
        <div>
            <h1> Find</h1>
            { this.state.venues.length > 0  &&
                <MapContainer
                markers={this.state.venues} 
                currentLocation={this.state.currentLocation}
                />
            }
       
        </div>
        );
    }
}

export default Find;

