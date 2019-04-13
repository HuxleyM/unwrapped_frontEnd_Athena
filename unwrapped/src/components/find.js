import React, { Component } from 'react';
import MapContainer from './map'
import SearchBar from './searchbar'

class Find extends Component{
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

