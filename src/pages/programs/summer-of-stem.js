import Head from 'next/head';

// components
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import ProgramDates from '../../components/ProgramDates';
import IntroToCamp from '../../components/IntroToCamp';
import ThingsToKnow from '../../components/ThingsToKnow';

import { TemplateIntro } from '../../components/TemplateIntro';

const SummerOfSTEM = ({ componentName }) => {
	const head = () => (
		<Head>
			<title>{`Treobytes | ${componentName}`}</title>
			<meta name='description' content={`Treobytes ${componentName} page`} />
			<meta name='og:description' content={`Treobytes ${componentName} page`} />
			<meta property='og:type' content='website' />
			{/* update site name below based on project */}
			<meta property='og:site_name' content='Social' />
			{/* update url below based on project */}
			<meta property='og:url' content='' />
			{/* update image below based on project
			 * image appears when shown on other social networks
			 * must provide full path to image
			 */}
			<meta property='og:image:secure_url' content='' />
		</Head>
	);

	const hero =
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1709693053/leadership-hero_tgmuu8.jpg';

	const listItemsSummerOfSTEM = [
		{ copy: 'World class STEM instruction' },
		{ copy: 'Access to industry-level tools and equipment' },
		{ copy: 'Solving complex problems' },
		{
			copy: 'Developing soft skills: work in groups, communication, conflict resolution',
		},
		{ copy: 'Vocational pathways' },
		{ copy: 'Develop intellectual curiosity' },
		{ copy: 'Replicate industry roles' },
		{ copy: 'Experiential Learning' },
		{ copy: 'Having fun and building last friendships' },
	];

	return (
		<>
			{head()}
			<Navigation />
			<div className={`page ${componentName}`}>
				<TemplateIntro
					heroImage={hero}
					heroHeader='Students'
					introHeader='SUMMER OF STEM CAMP'
				/>
				<div className='container'>
					<a
						href='https://www.hisawyer.com/treobytes/schedules?sched_ids%5B%5D=191129&schedule_id=camps'
						target='_blank'
						rel='noreferrer noopener'
						className='wrapper-btn'
					>
						<Button children='JOIN TODAY!' additionalClass='red' />
					</a>
				</div>

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
					listItemMarks={listItemsSummerOfSTEM.map((item, index) => (
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
				<Footer />
			</div>
		</>
	);
};

SummerOfSTEM.defaultProps = {
	componentName: 'summer-of-stem',
};

export default SummerOfSTEM;
