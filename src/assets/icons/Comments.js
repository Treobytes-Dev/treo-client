import React from 'react';
import { string } from 'prop-types';

const Comments = ({
	componentName = 'comments',
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
		<path d='M280-240q-17 0-28.5-11.5T240-280v-80h520v-360h80q17 0 28.5 11.5T880-680v600L720-240H280ZM80-280v-560q0-17 11.5-28.5T120-880h520q17 0 28.5 11.5T680-840v360q0 17-11.5 28.5T640-440H240L80-280Zm520-240v-280H160v280h440Zm-440 0v-280 280Z' />
	</svg>
);

Comments.propTypes = {
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

export default Comments;
