import React from 'react';
import { string } from 'prop-types';

const AddPhoto = ({
	componentName = 'add-photo',
	additionalClassName,
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
		<path d='M773 402v-86h-86v-60h86v-87h60v87h87v60h-87v86h-60ZM94 976q-24 0-42-18t-18-42V403q0-23 18-41.5T94 343h147l73-87h280v60H342l-73 87H94v513h680V496h60v420q0 24-18.5 42T774 976H94Zm339.5-146q72.5 0 121.5-49t49-121.5q0-72.5-49-121T433.5 490q-72.5 0-121 48.5t-48.5 121q0 72.5 48.5 121.5t121 49Zm0-60q-47.5 0-78.5-31.5t-31-79q0-47.5 31-78.5t78.5-31q47.5 0 79 31t31.5 78.5q0 47.5-31.5 79t-79 31.5Zm.5-110Z' />
	</svg>
);

AddPhoto.propTypes = {
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

export default AddPhoto;
