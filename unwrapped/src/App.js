import React, { Component } from 'react';
import './App.css';
import Find from './components/find'
import Register from './components/register'

class App extends Component {
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
      <div className="App">
        <header className="App-header">
          <h1>Unwrapped</h1>
        </header>
        { this.state.userJourney === 'mainMenu' && 
         <div className='mainMenuButton'>
            <button onClick={()=>{this.changeUserJourney('find')}}>find a store</button>
            <button onClick={()=>{this.changeUserJourney('register')}}>register a store</button>
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

export default App;
