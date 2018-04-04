import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getApiSource, getDrupalToken } from '../../conf/Conf';

const API = getApiSource('contact_message');

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
		var csrftoken = getDrupalToken();
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
		  //'contact_form':[{'target_id':'reactcontact'}],
		  'contact_form':[{'target_id':'feedback'}],
	    'name':[{'value':`${this.props.formValues.name}`}],
	    'mail':[{'value':`${this.props.formValues.email}`}],
	    'subject':[{'value':'Feedback from ilatorre.me'}],
	    'message':[{'value':`${this.props.formValues.message}`}]
		};
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