// Button.js
import React from 'react';
import { string, any } from 'prop-types';
import { Time } from '../assets/icons/Time';

const ProgramDates = ({
	componentName,
	image1,
	image2,
	image3,
	image4,
	paragraph1,
	paragraph2,
	paragraph3,
	paragraph4,
}) => {
	return (
		<div className={`${componentName} `} data-testid={componentName}>
			<div className='container'>
				<div className='images'>
					<div className='row row-1'>
						<div
							className='image image-1'
							style={{
								backgroundImage: 'url(' + image1 + ')',
							}}
						>
							<div className='copy'>
								<p className='paragraph paragraph-1'>{paragraph1}</p>
							</div>
						</div>

						<div
							className='image image-2'
							style={{
								backgroundImage: 'url(' + image2 + ')',
							}}
						>
							<div className='copy'>
								<p className='paragraph paragraph-2'>{paragraph2}</p>
							</div>
						</div>
					</div>
					<div className='row row-2'>
						<div
							className='image image-3'
							style={{
								backgroundImage: 'url(' + image3 + ')',
							}}
						>
							<div className='copy'>
								<p className='paragraph paragraph-3'>{paragraph3}</p>
							</div>
						</div>
						<div
							className='image image-4'
							style={{
								backgroundImage: 'url(' + image4 + ')',
							}}
						>
							<div className='copy'>
								<p className='paragraph paragraph-4'>{paragraph4}</p>
							</div>
						</div>
					</div>
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
