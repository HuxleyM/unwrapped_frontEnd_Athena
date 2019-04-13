import React, { Component } from 'react';
import './Homepage.css';
import Find from '../find'
import Register from '../register'

class Homepage extends Component {
  constructor() {
    super();
    this.state = {
      userJourney: 'mainMenu' 
    };
  }
  
  changeUserJourney(path){
    this.setState({
      userJourney: path
    })
  }

  render() {
    return (
      <div className="Container">
        <header className="Container-header">
          <h1>UnWrapped</h1>
        </header>
        <section className='Container-about'>
          <h2 className='teal'>naked food</h2>
          <h2>made easy</h2>
          <p>
            Find or register the nearest shop that sells products free of plastic packaging.
          </p>
        </section>
        { this.state.userJourney === 'mainMenu' && 
        <div>
          <div className='mainMenuButton'>
              <button className='btn find' onClick={()=>{this.changeUserJourney('find')}}>find a store</button>
              <button className='btn register' onClick={()=>{this.changeUserJourney('register')}}>register a store</button>
          </div>
          <div>
            <button className='plastic-button btn' onClick={()=>{this.changeUserJourney('facts')}}>learn more</button>
          </div>
        </div> 
        }

        { this.state.userJourney === 'register' && 
           <Register/>
        }

        { this.state.userJourney === 'find' && 
           <Find/>
        }
      </div>
    );
  }
}

export default Homepage;
