import React from 'react';
import { string } from 'prop-types';

export const CarrotDown = ({
	componentName,
	additionalClassName = '',
	dimensions,
	viewBox,
	fill,
}) => (
	<svg
		className={`icon ${componentName} ${additionalClassName}`}
		height={dimensions}
		viewBox={viewBox}
		width={dimensions}
	>
		<path
			fill={fill}
			d='M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z'
		/>
	</svg>
);

CarrotDown.defaultProps = {
	componentName: 'carrot-down',
	dimensions: '24',
	viewBox: '0 96 960 960',
	fill: '#333',
};
