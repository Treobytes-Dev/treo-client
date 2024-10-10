import React from 'react';
import { string } from 'prop-types';

const Trash = ({
	componentName = 'trash',
	additionalClassName = '',
	fill = '#333',
	dimensions = '24',
	viewBox = '0 -960 960 960',
}) => (
	<svg
		className={`icon ${componentName} ${additionalClassName}`}
		fill={fill}
		height={dimensions}
		width={dimensions}
		viewBox={viewBox}
	>
		<path d='m376-300 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 180q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520Zm-400 0v520-520Z' />
	</svg>
);

Trash.propTypes = {
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

export default Trash;
