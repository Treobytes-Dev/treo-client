import React from 'react';
import { number, string } from 'prop-types';

export const ComputerScreen = ({
	componentName,
	additionalClassName = '',
	dimensions,
	viewBox,
	fill,
}) => (
	<svg
		className={`icon ${componentName} ${additionalClassName}`}
		width={dimensions}
		height={dimensions}
		viewBox={viewBox}
	>
		<path
			fill={fill}
			d='M40-120v-80h880v80H40Zm120-120q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H160Zm0-80h640v-440H160v440Zm0 0v-440 440Z'
		/>
	</svg>
);

ComputerScreen.propTypes = {
	componentName: string,
	additionalClassName: string,
	dimensions: number,
	viewBox: string,
	fill: string,
};

ComputerScreen.defaultProps = {
	dimensions: 24,
	viewBox: '0 -960 960 960',
	fill: '#333',
	componentName: 'computer-screen',
};
