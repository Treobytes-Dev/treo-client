import React from 'react';
import { number, string } from 'prop-types';

export const Time = ({
	componentName = 'time',
	additionalClassName = '',
	dimensions = 24,
	viewBox = '0 0 512 512',
	fill = '#333',
}) => (
	<svg
		className={`icon ${componentName} ${additionalClassName}`}
		width={dimensions}
		height={dimensions}
		viewBox={viewBox}
		fill={fill}
	>
		<path
			d='M0 256c0 141.385 114.615 256 256 256s256-114.615 256-256S397.385 0 256 0 0 114.615 0 256zM226 90c0-16.569 13.431-30 30-30s30 13.431 30 30v148.679l76.799 44.34c14.349 8.284 19.265 26.632 10.981 40.981s-26.632 19.265-40.981 10.981l-91.799-53c-9.615-5.552-14.987-15.623-14.996-25.981H226V90z'
			fill='inherit'
		/>
	</svg>
);

Time.propTypes = {
	componentName: string,
	additionalClassName: string,
	dimensions: number,
	viewBox: string,
	fill: string,
};
