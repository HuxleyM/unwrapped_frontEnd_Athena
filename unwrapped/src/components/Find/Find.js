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
        <br />
        <div>
            <img 
            src='./map.png'
            alt='map'
            />
        </div>
        <div>
            <h2>Bring your own shop</h2>
            <h3>Products: </h3>
            <p>- Dry Goods</p>
        </div>
    </div>
    );
    }
}

export default Find;