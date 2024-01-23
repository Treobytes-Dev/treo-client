// animation.js
import React from 'react';
import { string, any } from 'prop-types';

const TemplatePage = ({ componentName, children }) => {
	return (
		<div className={`${componentName}`} data-testid={componentName}>
			{children}
		</div>
	);
};

TemplatePage.propTypes = {
	/**
	 * Define component name
	 */
	componentName: string,
	/**
	 * Define content to animate
	 */
	children: any.isRequired,
	/**
	 * Define type of animation
	 * OPTIONS: fade-in, fade-out, vibrate, wobble, flip-in, flip-out
	 */
	typeOfAnimation: string,
};

TemplatePage.defaultProps = {
	componentName: 'template-page',
};

export default TemplatePage;
