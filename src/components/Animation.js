// animation.js
import React from 'react';
import { string, any } from 'prop-types';

const Animation = ({
	componentName = 'animation',
	children,
	typeOfAnimation = '',
}) => {
	return (
		<span
			className={`${componentName} ${typeOfAnimation}`}
			data-testid={componentName}
		>
			{children}
		</span>
	);
};

Animation.propTypes = {
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

export default Animation;
