import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown'
import FormDropdown from './register_form_dropdown';



const RegisterForm = ( { handleForm } ) => {

	return (
	<form onSubmit ={ handleForm }>
	  	<link
		rel="stylesheet"
		href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
		integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
		crossorigin="anonymous"
		/>
		<label>Venue Name</label>
		<input
			type='text'
			id='venuename'
			placeholder='Crisis Cafe'
			required
		></input>

		<label>Venue Address</label>
		<input
			type='text'
			id='venueaddress'
			placeholder='10 Commercial Street'
			required
		></input>
        
        <label>Unwrapped Items</label>
		<FormDropdown/>

       

		<input
		    className="submitForm action_button"
			id='submit_form'
			type="submit"
			value="Submit"
		></input>
	</form>
	)
}

export default RegisterForm;