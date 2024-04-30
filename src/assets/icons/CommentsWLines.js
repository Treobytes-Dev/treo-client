import React from 'react';
import { string } from 'prop-types';

const CommentsWLines = ({
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
		<path d='M240-400h480v-80H240v80Zm0-120h480v-80H240v80Zm0-120h480v-80H240v80ZM880-80 720-240H160q-33 0-56.5-23.5T80-320v-480q0-33 23.5-56.5T160-880h640q33 0 56.5 23.5T880-800v720ZM160-320h594l46 45v-525H160v480Zm0 0v-480 480Z' />
	</svg>
);

CommentsWLines.propTypes = {
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

CommentsWLines.defaultProps = {
	componentName: 'comments-w-lines',
	dimensions: '24',
	viewBox: '0 -960 960 960',
};

export default CommentsWLines;
