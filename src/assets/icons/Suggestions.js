import React from 'react';
import { string } from 'prop-types';

const Suggestions = ({
	componentName = 'suggestions',
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
		<path d='M240-400h122l200-200q9-9 13.5-20.5T580-643q0-11-5-21.5T562-684l-36-38q-9-9-20-13.5t-23-4.5q-11 0-22.5 4.5T440-722L240-522v122Zm280-243-37-37 37 37ZM300-460v-38l101-101 20 18 18 20-101 101h-38Zm121-121 18 20-38-38 20 18Zm26 181h273v-80H527l-80 80ZM80-80v-720q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H240L80-80Zm126-240h594v-480H160v525l46-45Zm-46 0v-480 480Z' />
	</svg>
);

Suggestions.propTypes = {
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

export default Suggestions;
