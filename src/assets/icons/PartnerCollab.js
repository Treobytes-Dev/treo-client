import React from 'react';
import { string } from 'prop-types';

const PartnerCollab = ({ componentName, additionalClassName }) => (
	<svg
		className={`${componentName} ${additionalClassName}`}
		x={0}
		y={0}
		style={{
			fill: '#fff',
			stroke: '#000',
			strokeWidth: 2,
			strokeLinecap: 'round',
			strokeLinejoin: 'round',
			strokeMiterlimit: 10,
		}}
		viewBox='0 0 96 100'
	>
		<g
			style={{
				opacity: 0.6,
			}}
		>
			<path
				d='m7.9 39.2 18.2-9.5c1.8-.9 3.3-2.4 4.2-4.2L42.1 2.8c.4-.8-.4-1.7-1.3-1.3L18.1 13.4c-1.8.9-3.3 2.4-4.2 4.2L2.1 40.3v11.5'
				className='st1'
				style={{
					fill: '#fff',
				}}
			/>
			<path
				d='m37.8 11.5 8.7 8.7c.8.8 1 1.9.6 3-4 10.8-12.5 19.3-23.3 23.4-1 .4-2.2.1-3-.6l-8.7-8.7'
				className='st1'
				style={{
					fill: '#fff',
				}}
			/>
			<path
				d='M51.6 23.1h32.7c2.7 0 4.9 2.2 4.9 4.9v38.9c0 2.7-2.2 4.9-4.9 4.9H28.5c-2.7 0-4.9-2.2-4.9-4.9V50.7'
				className='st1'
				style={{
					fill: '#fff',
				}}
			/>
			<path
				d='m39.7 71.7-3 7.5h39.4l-3-7.5M83.9 84.9l5.7 10.3c.9 1.5-.3 3.4-2 3.4H25.2c-1.8 0-2.9-1.9-2-3.4l5.7-10.3h55z'
				className='st1'
				style={{
					fill: '#fff',
				}}
			/>
		</g>
	</svg>
);

PartnerCollab.propTypes = {
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

PartnerCollab.defaultProps = {
	componentName: 'partner-collab',
};

export default PartnerCollab;
