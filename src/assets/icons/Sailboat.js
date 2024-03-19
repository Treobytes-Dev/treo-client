import React from 'react';
import { string } from 'prop-types';

const Sailboat = ({
	componentName,
	additionalClassName,
	fill,
	dimensions,
	viewBox,
}) => (
	<svg
		className={`${componentName} ${additionalClassName}`}
		fill='#000'
		viewBox={viewBox}
		width={dimensions}
		height={dimensions}
	>
		<g fill='#d5d5d5'>
			<path
				d='M72.422 787.31c-6.099 0-11.051 4.952-11.051 11.051 0 3.553 1.733 6.658 4.34 8.678v229.02H-48.46s63.838 79.423 112.48 81.833c97.644 4.839 209.7-81.833 209.7-81.833H79.41V806.83c2.453-2.025 4.067-5.044 4.067-8.475 0-6.099-4.952-11.05-11.051-11.05zm15.458 16.882c16.426 84.169 28.339 164.73 0 213.09l161.97.203c-30.339-71.094-77.277-142.2-161.97-213.29zm-30.306 71.46c-15.299 77.067-69.326 103.25-109.36 141.97l109.36-.136v-141.83z'
				fill='#0cc0df'
				transform='translate(53.098 -678.62) scale(.87023)'
			/>
		</g>
	</svg>
);

Sailboat.propTypes = {
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

Sailboat.defaultProps = {
	componentName: 'sail-boat',
	dimensions: '24px',
	viewBox: '8 6.5 283.3 291.9',
};

export default Sailboat;
