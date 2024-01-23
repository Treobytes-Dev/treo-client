import React from 'react';
import { string } from 'prop-types';

const Menu = ({
	componentName,
	additionalClassName,
	fill,
	dimensions,
	viewBox,
}) => (
	<svg
		className={`icon ${componentName} ${additionalClassName}`}
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

Menu.defaultProps = {
	componentName: 'menu',
	dimensions: '24',
	viewBox: '0 -960 960 960',
	fill: '#333',
};

export default Menu;
