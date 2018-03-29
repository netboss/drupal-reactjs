//import React, { PropTypes } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import Link, { LinkedComponent } from 'valuelink';

// If you're using TypeScript or the modern module bundler (like webpack 2) supporting ES6 imports and "tree shaking".
//import { Input, TextArea, Select, Radio, Checkbox } from 'valuelink/lib/tags';

// For all other cases there's CommonJS tags module, when previous option won't work.
import { Input, TextArea, Select, Radio, Checkbox } from 'valuelink/tags';

const FormInput = ({ label, ...props }) => (
	<div>
		<label>{ label }
			<Input { ...props } />
			<div class="error-placeholder">
				{ props.valueLink.error || '' }
			</div>
		</label>
	</div>
);

export default FormInput;