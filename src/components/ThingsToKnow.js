import { string } from 'prop-types';

import { DrawnArrow } from '../assets/icons/DrawnArrow';

const ThingsToKnow = ({ componentName = 'things-to-know' }) => (
	<div className={componentName}>
		<div className='container'>
			<h2 className='header header-two intro-header'>THINGS TO KNOW</h2>
			<div className='columns'>
				<div className='col col-1'>
					<h3 className='header header-three'>Summer of STEM</h3>

					<div className='block'>
						<h6 className='header header-six'>{`Dates`.toUpperCase()}</h6>
						<div className='groups'>
							<div className='group'>
								<p className='paragraph'>June 10th - June 14th</p>
								<p className='paragraph'>June 17th - June 21st</p>
							</div>
							<div className='group'>
								<p className='paragraph'>June 24th - June 28th</p>
								<p className='paragraph'>July 1st - July 5th</p>
							</div>
						</div>
					</div>

					<div className='block'>
						<h6 className='header header-six'>{`Locations`.toUpperCase()}</h6>
						<p className='paragraph'>Mesa College</p>
					</div>

					<div className='wrapper-buttons'>
						<h6 className='header header-six'>{`Sign Up`.toUpperCase()}</h6>
						<a
							href='https://www.hisawyer.com/treobytes/schedules?sched_ids%5B%5D=191129&schedule_id=camps'
							target='_blank'
							rel='noreferrer noopener'
							className='anchor'
						>
							JOIN NOW
						</a>
					</div>

					<div className='block'>
						<h6 className='header header-six'>{`Enrollment`.toUpperCase()}</h6>
						<p className='paragraph'>Immediate access | Open to all students</p>
					</div>
				</div>
				<div className='col col-2'>
					<h3 className='header header-three'>Level Up</h3>

					<div className='block'>
						<h6 className='header header-six'>{`Dates`.toUpperCase()}</h6>
						<p className='paragraph'>July 15 through August 9</p>
					</div>

					<div className='block'>
						<h6 className='header header-six'>{`Locations`.toUpperCase()}</h6>
						<p className='paragraph'>Mesa College and City College</p>
					</div>

					<div className='block'>
						<h6 className='header header-six'>{`Sign Up`.toUpperCase()}</h6>
						<p className='paragraph'>Inplay (announced by SDUSD)</p>
					</div>

					<div className='block'>
						<h6 className='header header-six'>{`Enrollment`.toUpperCase()}</h6>
						<p className='paragraph'>
							Priority registration <DrawnArrow /> Open Enrollment
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
);

ThingsToKnow.propTypes = {
	componentName: string,
};

export default ThingsToKnow;
