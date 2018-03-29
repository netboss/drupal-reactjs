import React from 'react';
import PropTypes from 'prop-types';

const EmailField = (props) => (
	<div>
		<label>{props.label}</label>
    <input 
    	id="email"
     	type="email"
     	onChange={ props.onChange } 
			value={ props.value }
   	/>
	</div>
);

EmailField.propTypes = {
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired
}

export default EmailField;