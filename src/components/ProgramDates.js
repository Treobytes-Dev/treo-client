// Button.js
import React from 'react';
import { string, any } from 'prop-types';
import { Time } from '../assets/icons/Time';

const ProgramDates = ({ componentName, image1 }) => {
	return (
		<div className={`${componentName} `} data-testid={componentName}>
			<div className='container'>
				<div className='images'>
					<div className='row row-1'>
						<div className='image'>
							<img src={image1} alt='Summer of stem camp thumbnail' />
						</div>
					</div>
					<div className='row row-2'>IMAGES</div>
				</div>

				<div className='information'>
					<h4 className='header header-four'>Program Dates in Summer 2024: </h4>
					<div className='boxes'>
						<div className='box location'>LOCATION</div>
						<div className='box cost'>COST</div>
						<div className='box days'>DAYS</div>
						<div className='box dates'>DATES</div>
						<div className='box time'>
							<Time />
							TIME
						</div>
					</div>
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
