import { string } from 'prop-types';

import ProgramDates from './ProgramDates';
import IntroToCamp from './IntroToCamp';
import ThingsToKnow from './ThingsToKnow';

const SummerOfSTEM = ({ componentName, listItemsSummerCamps }) => (
	<div className={componentName}>
		<ProgramDates
			image1='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710429934/summer-of-stem-1_n2voyq.jpg'
			image2='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710429934/summer-of-stem-2_zqfgjx.jpg'
			image3='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710429934/summer-of-stem-3_pssexv.jpg'
			image4='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710429934/summer-of-stem-4_ivn4mz.jpg'
			description1={`Game Development and Design`.toUpperCase()}
			description2={`STEM Sports + Tech`.toUpperCase()}
			description3={`Infento Building`.toUpperCase()}
			description4={`STEMFaire: Cardboard Engineering`.toUpperCase()}
			contentLocation={
				<p className='paragraph'>
					Mesa College Business and Technology Building
				</p>
			}
			contentCost={
				<>
					<p className='paragraph'>$650 per week</p>

					<p className='paragraph'>
						($25 off each week if you sign up before March 1st)
					</p>
				</>
			}
			contentDays={<p className='paragraph'>Monday - Friday</p>}
			contentDates={
				<>
					<p className='paragraph'>June 10th - June 14th</p>
					<p className='paragraph'>June 17th - June 21st</p>
					<p className='paragraph'>June 24th - June 28th</p>
					<p className='paragraph'>July 1st - July 5th **</p>
					<p className='paragraph'>
						<strong style={{ fontWeight: '700' }}>
							** No Camp on July 4th
						</strong>
					</p>
				</>
			}
			contentTime={<p className='paragraph'>9:00am -4:00pm</p>}
		/>

		<IntroToCamp
			listItemMarks={listItemsSummerCamps.map((item, index) => (
				<li className='list-item' key={index}>
					<img
						className='check'
						src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710524188/program-checkmark_rwdl56.png'
						alt='check mark'
					/>
					<p className='paragraph'>{item.copy}</p>
				</li>
			))}
			collegeName='Mesa College'
			collegeText='Business and Technology Building'
		/>

		<ThingsToKnow />
	</div>
);

SummerOfSTEM.propTypes = {
	componentName: string,
};

SummerOfSTEM.defaultProps = {
	componentName: 'summer-of-stem',
};

export default SummerOfSTEM;