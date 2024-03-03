import React from 'react';
import { number, string } from 'prop-types';

export const FAQs = ({
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
		fill={fill}
	>
		<path d='M560-360q17 0 29.5-12.5T602-402q0-17-12.5-29.5T560-444q-17 0-29.5 12.5T518-402q0 17 12.5 29.5T560-360Zm-30-128h60q0-29 6-42.5t28-35.5q30-30 40-48.5t10-43.5q0-45-31.5-73.5T560-760q-41 0-71.5 23T446-676l54 22q9-25 24.5-37.5T560-704q24 0 39 13.5t15 36.5q0 14-8 26.5T578-596q-33 29-40.5 45.5T530-488ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z' />
	</svg>
);

FAQs.propTypes = {
	componentName: string,
	additionalClassName: string,
	dimensions: number,
	viewBox: string,
	fill: string,
};

FAQs.defaultProps = {
	dimensions: 24,
	viewBox: '0 -960 960 960',
	fill: 'rgb(173, 33, 70)',
	componentName: 'add-circle',
};
