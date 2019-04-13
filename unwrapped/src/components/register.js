import React, { Component } from 'react';
import RegisterForm from './register_form';


class Register extends Component{
 
    render(){
        return (<div>
              <h1> Register</h1>
              <RegisterForm/>
            </div>);
    }
}

export default Register;