import React from 'react';
import { number, string } from 'prop-types';

export const RunningPerson = ({
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
			d='m216-160-56-56 384-384H440v80h-80v-160h233q16 0 31 6t26 17l120 119q27 27 66 42t84 16v80q-62 0-112.5-19T718-476l-40-42-88 88 90 90-262 151-40-69 172-99-68-68-266 265Zm-96-280v-80h200v80H120ZM40-560v-80h200v80H40Zm739-80q-33 0-57-23.5T698-720q0-33 24-56.5t57-23.5q33 0 57 23.5t24 56.5q0 33-24 56.5T779-640Zm-659-40v-80h200v80H120Z'
		/>
	</svg>
);

RunningPerson.propTypes = {
	componentName: string,
	additionalClassName: string,
	dimensions: number,
	viewBox: string,
	fill: string,
};

RunningPerson.defaultProps = {
	dimensions: 24,
	viewBox: '0 -960 960 960',
	fill: '#333',
	componentName: 'running-person',
};
