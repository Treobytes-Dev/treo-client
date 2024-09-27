// Button.js
import React from 'react';
import { string, any } from 'prop-types';
import { Time } from '../assets/icons/Time';

const ProgramDates = ({
	componentName = 'program-dates',
	image1,
	image2,
	image3,
	image4,
	description1,
	description2,
	description3,
	description4,
	contentLocation,
	contentCost,
	contentDays,
	contentDates,
	contentTime,
	contentGrades,
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
							{description1 && (
								<div className='copy'>
									<p className='paragraph paragraph-1'>{description1}</p>
								</div>
							)}
						</div>

						<div
							className='image image-2'
							style={{
								backgroundImage: 'url(' + image2 + ')',
							}}
						>
							{description2 && (
								<div className='copy'>
									<p className='paragraph paragraph-2'>{description2}</p>
								</div>
							)}
						</div>
					</div>
					<div className='row row-2'>
						<div
							className='image image-3'
							style={{
								backgroundImage: 'url(' + image3 + ')',
							}}
						>
							{description3 && (
								<div className='copy'>
									<p className='paragraph paragraph-3'>{description3}</p>
								</div>
							)}
						</div>
						<div
							className='image image-4'
							style={{
								backgroundImage: 'url(' + image4 + ')',
							}}
						>
							{description4 && (
								<div className='copy'>
									<p className='paragraph paragraph-4'>{description4}</p>
								</div>
							)}
						</div>
					</div>
				</div>

				<div className='information'>
					<h4 className='header header-four'>{`Program Dates in Summer ${new Date().getFullYear()}: `}</h4>
					<div className='boxes'>
						<div className='boxes-1'>
							<div className='box location'>
								<div className='heading'>
									<div className='icon'>
										<img
											src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710429934/icon-location_z4gqvm.png'
											alt='location icon'
										/>
									</div>
									<h6 className='header header-six'>LOCATION</h6>
								</div>

								<div className='content'>{contentLocation}</div>
							</div>
							<div className='box cost'>
								<div className='heading'>
									<div className='icon'>
										<img
											src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710429934/icon-cost_sdcjdd.png'
											alt='cost icon'
										/>
									</div>
									<h6 className='header header-six'>COST</h6>
								</div>

								<div className='content'>{contentCost}</div>
							</div>
							<div className='box days'>
								<div className='heading'>
									<div className='icon'>
										<img
											src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710429934/icon-dates_uo6bq6.png'
											alt='days icon'
										/>
									</div>
									<h6 className='header header-six'>DAYS</h6>
								</div>

								<div className='content'>{contentDays}</div>
							</div>
						</div>

						<div className='boxes-2'>
							<div className='box dates'>
								<div className='heading'>
									<div className='icon'>
										<img
											src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710429934/icon-dates_uo6bq6.png'
											alt='days icon'
										/>
									</div>
									<h6 className='header header-six'>DATES</h6>
								</div>

								<div className='content'>{contentDates}</div>
							</div>

							<div className='box time'>
								<div className='heading'>
									<div className='icon'>
										<Time fill='#fff' />
									</div>
									<h6 className='header header-six'>TIME</h6>
								</div>
								<div className='content'>{contentTime}</div>
							</div>

							{contentGrades && (
								<div className='box grades'>
									<div className='heading'>
										<div className='icon'>
											<Time fill='#fff' />
										</div>
										<h6 className='header header-six'>GRADES</h6>
									</div>
									<div className='content'>{contentGrades}</div>
								</div>
							)}
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
	image1: string,
	image2: string,
	image3: string,
	image4: string,
	description1: string,
	description2: string,
	description3: string,
	description4: string,
	contentLocation: any,
	contentCost: any,
	contentDays: any,
	contentDates: any,
	contentTime: any,
};

export default ProgramDates;
