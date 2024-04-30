// Button.js
import React from 'react';
import { string, any } from 'prop-types';

const Button = ({
	componentName,
	children,
	applicationSide,
	forSubmit,
	additionalClass,
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

Button.defaultProps = {
	componentName: 'button',
	applicationSide: 'default',
	forSubmit: 'submit',
};

export default Button;
