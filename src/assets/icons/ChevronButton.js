import React from 'react';
import { number, string } from 'prop-types';

export const ChevronButton = ({
	componentName = 'chevron-button',
	additionalClassName = '',
	dimensions = 24,
	viewBox = '0 -960 960 960',
	fill = '#333',
}) => (
	<svg
		className={`icon ${componentName} ${additionalClassName}`}
		width={dimensions}
		height={dimensions}
		viewBox={viewBox}
	>
		<path
			fill={fill}
			d='M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-400H160v400Zm140-40-56-56 103-104-104-104 57-56 160 160-160 160Zm180 0v-80h240v80H480Z'
		/>
	</svg>
);

ChevronButton.propTypes = {
	componentName: string,
	additionalClassName: string,
	dimensions: number,
	viewBox: string,
	fill: string,
};

ChevronButton.defaultProps = {
	dimensions: 24,
	viewBox: '0 -960 960 960',
	fill: '#333',
	componentName: 'chevron-button',
};
