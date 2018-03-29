import React, { Component } from 'react';
import Field from './Field'; 
import EmailField from './EmailField';
import Button from './Button';
import $ from 'jquery';

const defaultEmail = "igl67@yahoo.com";

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: ''
		};
		// To ensure this.updateField refers to Form and not Field
		this.updateField = this.updateField.bind(this);
		this.validateEmail = this.validateEmail.bind(this);
		this.validateEmails = this.validateEmails.bind(this);
		this.validateTextField = this.validateTextField.bind(this);
		this.validateTextFields = this.validateTextFields.bind(this);
		//this.validate = this.validate.bind(this);
	}

	updateField(field, value) {
		this.setState({ [field]: value })
	}

	validateTextFields(field) {
		// /^[a-zA-Z]+$/ - // Only alphabets allowed
		// ^\\s+$ - // Check empty space
		const textRegexPattern = /^[a-zA-Z]+$/;
		var re = textRegexPattern;
	  return re.match(field);
	}

	validateTextField(field) {
	  var $nameResult = $('.name-result');
	  var name = $('#field-name').val();
	  $nameResult.text('');
	  $nameResult.hide();

		if (name.length <= 1) {
	  	$nameResult.text('The "Name" field can\'t be empty.');
	    $nameResult.css({'color': 'red'}).show();
	  }
	  return field;
	}

	validateEmails(email) {
	  // Regex taken from here: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
		const emailRegexPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  var re = emailRegexPattern;
	  return re.test(email);
	}

	validateEmail(email) {
	  var $emailResult = $('.email-result');
	  var email = $('#email').val();
	  $emailResult.text('');
	  $emailResult.hide();
		if (!this.validateEmails(email)) {
	    $emailResult.text(email + ' is not a valid email.');
	    $emailResult.css({'color': 'red'}).show();
	  }
	  return email;
	}

	render() {
		return(
			<div className="contact-panel" id="contact-panel" data-toggler=".is-active">
			  <a className="contact-panel-button" data-toggle="contact-panel">Contact me</a>
			  <form name="reactForm" action="">
			    <div className="row name">
			      <Field 
							label="Name"	
							name="name"
							onChange={(event) => this.validateTextField(this.updateField('name', event.target.value))}
							value={this.state.name}
						/>
						<p className="name-result"></p>
			    </div>
			    <div className="row email">
			      <EmailField 
							label="Email"
							onChange={(event) => this.validateEmail(this.updateField('email', event.target.value)) }
							value={this.state.email}
						/>
						<p className="email-result"></p>
			    </div>
			    <div className="row message">
			      <Field 
							label="Message"
							onChange={(event) => this.updateField('message', event.target.value)}
							textarea={true}
							value={this.state.message}
						/>
			    </div>
			    <div className="contact-panel-actions">
			      <button className="cancel-button">Nevermind</button>
						<Button
							email={defaultEmail}
							formValues={this.state}
						/>
			    </div>
			  </form>
			</div>
		);
	}
}

export default Form;


/*
New form backup:

			<div className="form-container">
				<Field 
					label="Name"	
					onChange={(event) => this.updateField('name', event.target.value)}
					value={this.state.name}
				/>
				<Field 
					label="Email"	
					onChange={(event) => this.updateField('email', event.target.value)}
					value={this.state.email}
				/>
				<Field 
					label="Message"
					onChange={(event) => this.updateField('message', event.target.value)}
					textarea={true}
					value={this.state.message}
				/>
				<Button
					email={personalEmail}
					formValues={this.state}
				/>
			</div>

Orignal form backup:

const Contact = () => (
	<div className="contact-panel" id="contact-panel" data-toggler=".is-active">
	  <a className="contact-panel-button" data-toggle="contact-panel">Contact us</a>
	  <form action="">
	    <div className="row">
	      <label>Full name *
	        <input type="text" placeholder="Full name" />
	      </label>
	    </div>
	    <div className="row">
	      <label>Email *
	        <input type="email" placeholder="Email address" />
	      </label>
	    </div>
	    <div className="row">
	      <label>Message *
	        <textarea placeholder="Describe your needs" rows="3"></textarea>
	      </label>
	    </div>
	    <div className="contact-panel-actions">
	      <button className="cancel-button" data-toggle="contact-panel">Nevermind</button>
	      <input type="submit" className="button submit-button" value="Submit" />
	    </div>
	  </form>
	</div>
);			
*/
