// Button.js
import React from 'react';
import { string, any } from 'prop-types';

const ProgramDates = ({ componentName, backgroundColor }) => {
	return (
		<div
			className={`${componentName} ${backgroundColor}`}
			data-testid={componentName}
		>
			<div className='container'>
				<div className='images'>
					<div className='row row-1'>IMAGES</div>
					<div className='row row-2'>IMAGES</div>
				</div>

				<div className='information'>
					<div className='location'>LOCATION</div>
					<div className='cost'>COST</div>
					<div className='days'>DAYS</div>
					<div className='dates'>DATES</div>
					<div className='time'>TIME</div>
				</div>
			</div>
		</div>
	);
};

ProgramDates.propTypes = {
	/**
	 * Define component name
	 */
	componentName: string,
	backgroundColor: string,
};

ProgramDates.defaultProps = {
	componentName: 'program-dates',
};

export default ProgramDates;
