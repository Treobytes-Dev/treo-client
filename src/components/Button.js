// Button.js
import React from 'react';
import { string, any } from 'prop-types';

const Button = ({
	componentName = 'button',
	children,
	applicationSide = 'default',
	forSubmit = 'submit',
	additionalClass = '',
}) => {
	return (
		<button
			className={`${componentName} ${applicationSide} ${forSubmit} ${additionalClass}`}
			data-testid={componentName}
		>
			{children}
		</button>
	);
};

Button.propTypes = {
	/**
	 * Define component name
	 */
	componentName: string,
	/**
	 * Define applicationSide class name
	 */
	componentName: string,
	/**
	 * Define content to animate
	 */
	children: any.isRequired,
};

export default Button;
