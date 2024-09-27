import React from 'react';
import { string } from 'prop-types';

const Menu = ({
	componentName = 'menu',
	additionalClassName = '',
	fill = '#333',
	dimensions = '24',
	viewBox = '0 -960 960 960',
}) => (
	<svg
		className={`icon icon-${componentName} ${additionalClassName}`}
		fill={fill}
		height={dimensions}
		width={dimensions}
		viewBox={viewBox}
	>
		<path d='M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z' />
	</svg>
);

Menu.propTypes = {
	/**
	 * Optional additional className
	 */
	additionalClassName: string,

	/**
	 * Define icon height and width
	 */
	dimensions: string,

	/**
	 * Define icon viewBox
	 */
	viewBox: string,
};

export default Menu;
