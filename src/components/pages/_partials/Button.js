import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {getDomainApiUrl, source} from '../../conf/Conf';

const API = source.contact;

class Button extends Component {
	static propTypes = {
		email: PropTypes.string.isRequired,
		formValues: PropTypes.shape({
			name: PropTypes.string.isRequired,
			email: PropTypes.string.isRequired,
			message: PropTypes.string.isRequired,
		}).isRequired,
	};

	constructor(props) {
		super(props);
		this.state = {
			isClicked: false
		};
		this.submitFormData = this.submitFormData.bind(this);
		this.postData = this.postData.bind(this);
	}

	postData(url, data) {
	  // Add initial values
		var csrftoken = 'pOaTamBHjPu-wOYL9orim2fS4CIop41aRtypAh73-VM'; // from "/rest/session/token"
		var headers = new Headers({
			'Content-Type': 'application/json',
			'X-CSRF-Token': csrftoken
		});
	  // Default options are marked with *
	  return fetch(url, {
	    body: JSON.stringify(data), // must match 'Content-Type' header
	    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
	    credentials: 'same-origin', // include, same-origin, *omit
	    headers: headers,
	    method: 'POST', // *GET, POST, PUT, DELETE, etc.
	    mode: 'cors', // no-cors, cors, *same-origin
	    redirect: 'follow', // *manual, follow, error
	    referrer: 'no-referrer' // *client, no-referrer
	  })
	  .then(response => response.json()) // parses response to JSON
	}

	submitFormData(event) {
		event.preventDefault();
		this.setState({ isClicked: true });
		var formData = {
		  'contact_form':[{'target_id':'reactcontact'}],
	    'name':[{'value':`${this.props.formValues.name}`}],
	    'mail':[{'value':`${this.props.formValues.email}`}],
	    'subject':[{'value':'Job opportunity'}],
	    'message':[{'value':`${this.props.formValues.message}`}]
		};
		//console.log( 'formData.mail[0].value: ' + formData.mail[0].value + ' - this.props.formValues.name: ' + this.props.formValues.name );
		this.postData(API, formData).then(data => console.log(data)).catch(error => console.error(error));
	}

	render() {
		return(
			<button
				className="button submit-button"
				disabled={this.state.isClicked}
				onClick={this.submitFormData}
			>
				Contact Me
			</button>
		);
	}
}

export default Button;