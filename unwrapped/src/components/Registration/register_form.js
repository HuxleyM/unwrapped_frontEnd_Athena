import React from 'react';
import './Registration.css';
// import Dropdown from 'react-bootstrap/Dropdown';
import FormDropdown from '../Registration/register_form_dropdown';

const RegisterForm = ({ handleForm }) => {
  return (
		<div className='container'>
			<div><h2>Fill in details below to register a shop</h2></div>
			<div className='business-info'>
				<form className='shop-form' onSubmit={handleForm}>
					<label className='business-label'>Business Name: </label>
					<input className='business-input'
						type="text"
						id="businessname"
						placeholder="business name"
						required
					/>
					<label className='business-label'>Business Address: </label>
					<input className='business-input'
						type="text"
						id="businessaddress"
						placeholder="business address"
						required
					/>
					<label> <h3>Select the available naked products: </h3></label>
					<p>Hint: hold ctrl to select multiple goods</p>
					< FormDropdown />
					<input
						className="submitForm action-button"
						id="submit_form"
						type="submit"
						value="Add"
					/>
				</form>
			</div>
		</div>
  );
};

export default RegisterForm;

// OLD FORM INPUT
{/* <form className='shop-form' onSubmit={handleForm}>
				<link
			rel="stylesheet"
			href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
			crossorigin="anonymous"
			/>
			<div className='business-info'>
				<label>Business Name: </label>
				<input className ='business-input' type="text" id="shopname" placeholder="market shop" required />
			</div> 
			<div className='business-info'>
				<label>Business Address: </label>
				<input
					type="text"
					id="shopaddress"
					placeholder="business address"
					required
				/>
				</div>
				{/* <div className='business-info'> */}
				{/* <label>Select the available naked products: </label>
				<FormDropdown />

				<input
					className="submitForm action_button"
					id="submit_form"
					type="submit"
					value="Add"
				/> */}
				
			{/* </form> */}