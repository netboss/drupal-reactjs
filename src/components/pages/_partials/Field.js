//import React, { PropTypes } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

const Field = (props) => (
	<div>
		<label>{props.label}</label>
		<input
			onChange={props.onChange}
			id={props.textarea ? 'field-message' : 'field-name'}
			type={props.textarea ? 'textarea' : 'text'}
			value={props.value}
		/>
	</div>
);

Field.propTypes = {
	label: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	textarea: PropTypes.bool.isRequired,
}

Field.defaultProps = {
	textarea: false,
}

export default Field;