import React from 'react';
import { string } from 'prop-types';

const Posts = ({
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
		<path d='M120-120v-720h720v720H120Zm600-160H240v60h480v-60Zm-480-60h480v-60H240v60Zm0-140h480v-240H240v240Zm0 200v60-60Zm0-60v-60 60Zm0-140v-240 240Zm0 80v-80 80Zm0 120v-60 60Z' />
	</svg>
);

Posts.propTypes = {
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

Posts.defaultProps = {
	componentName: 'posts',
	dimensions: '24',
	viewBox: '0 -960 960 960',
};

export default Posts;
