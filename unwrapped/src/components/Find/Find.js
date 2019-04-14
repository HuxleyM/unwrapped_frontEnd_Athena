import React, { Component } from 'react';
import './Find.css';
import map from './map.png';

class Find extends Component{
    render(){
    return (
    <div className='container'>
        <h2>We think food looks better without plastic</h2>
        <h4>Find local sellers who love not plastic</h4>
        <div className='search-container'>
            <input className='address-input' placeholder='enter your postcode'></input>
            <input className='address-btn' type='Submit' value='GO'></input>
        </div>
        <br />
        <div className='map-container'>
            <img 
            src={map}
            alt='map'
            />
        </div>
        <div>
            <h2 className='business-title'>1. E5  Bakehouse</h2>
            <p>Address: Arch 395, Mentmore Terrace, London E8 3PH</p>
            <h3>Products: </h3>
            <ul>
                <li>Dry Goods</li>
            </ul>
        </div>
        <div>
            <h2 className='business-title'>2. Bulk Market</h2>
            <p>Address: 6 Bohemia Place, E8 1DU </p>
            <h3>Products: </h3>
            <ul>
                <li>Fruits</li>
                <li>Vegetables</li>
                <li>Beauty Products</li>
            </ul>
        </div>
    </div>
    );
    }
}

export default Find;