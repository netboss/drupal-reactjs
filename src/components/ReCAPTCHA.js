var React = require("react").default;
var render = require("react-dom").render
var ReCAPTCHA = require("react-google-recaptcha");
 
function onChange(value) {
  console.log("Captcha value:", value);
}
 
render(
  <ReCAPTCHA
    ref="recaptcha"
    sitekey="6Ld6KlAUAAAAAOE2taDjn3-OMoghtmTeH7lQ9Z3r"
    onChange={onChange}
  />,
  document.body
);