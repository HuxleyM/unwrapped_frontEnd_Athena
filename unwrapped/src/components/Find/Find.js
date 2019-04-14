import React, { Component } from 'react';
import './Find.css';

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
        <div><h2>MAP GOES HERE</h2></div>
    </div>
    );
    }
}

export default Find;