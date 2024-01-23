import React from 'react';
import { string } from 'prop-types';

export const Close = ({
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
			d='m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z'
			fill={fill}
		/>
	</svg>
);

Close.defaultProps = {
	dimensions: 24,
	viewBox: '0 -960 960 960',
	fill: '#333',
	componentName: 'close',
};
