import React from 'react';
import { string, any } from 'prop-types';

export const Hero = ({
	componentName,
	additionalClassName,
	children,
	background,
}) => {
	return (
		<div
			className={`${componentName} ${additionalClassName}`}
			data-test-id={componentName}
			style={{ backgroundImage: `url(${background})` }}
		>
			<div className='body'>{children}</div>
		</div>
	);
};

Hero.propTypes = {
	/**
	 * Add an additional className
	 */
	additionalClassName: string,

	/**
	 * Add Hero contents
	 */
	children: any,

	/**
	 * Add Hero image
	 */
	background: string,
};

Hero.defaultProps = {
	componentName: 'hero',
	additionalClassName: '',
};
