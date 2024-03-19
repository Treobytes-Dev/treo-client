// next
import Head from 'next/head';
import Link from 'next/link';

// components
import { TemplateIntro } from '../../components/TemplateIntro';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import ProgramDates from '../../components/ProgramDates';
import IntroToCamp from '../../components/IntroToCamp';
import ThingsToKnow from '../../components/ThingsToKnow';
import TracksSection from '../../components/TracksSection';
import ProgramContainer from '../../components/ProgramContainer';
import IntroSignUp from '../../components/IntroSignUp';

// icons
import SportsTech from '../../assets/icons/SportsTech';
import GameDevelopment from '../../assets/icons/GameDevelopment';

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

	const stemSportsThumbnails = [
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710786701/stem-sports-thumbnail-3_yazona.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710786700/stem-sports-thumbnail-1_acak3a.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710796588/hero-level-up-city-college_bqeyav.jpg',
	];

	const gameDevelopmentThumbnails = [
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710786700/game-development-thumbnail-3_w3qbp6.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710796010/web-developers-thumbnail-3_i06zxz.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710786700/game-development-thumbnail-2_h0nwel.jpg',
	];

	const infentoThumbnails = [
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710793149/dream-garage-thumbnail-1_mplx10.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710793150/dream-garage-thumbnail-2_c3zzdu.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710866943/infento-thumbnail-3_pjwqpl.jpg',
	];

	const stemFaireThumbnails = [
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710795236/card-board-thumbnail-1_pwd3nt.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710795237/card-board-thumbnail-2_hx82nl.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710795239/card-board-thumbnail-3_jtri7v.jpg',
	];

	const tradeMark = '\u2122';

	return (
		<>
			{head()}
			<Navigation />
			<div className={`page ${componentName}`}>
				<TemplateIntro heroImage={hero} introHeader='SUMMER OF STEM CAMP' />

				<IntroSignUp
					href='https://www.hisawyer.com/treobytes/schedules?sched_ids%5B%5D=191129&schedule_id=camps'
					btnText={`join today!`.toUpperCase()}
				/>

				<ProgramDates
					image1='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710429934/summer-of-stem-1_n2voyq.jpg'
					image2='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710786700/stem-sports-thumbnail-1_acak3a.jpg'
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
					collegeImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710524188/mesa-college_pbflas.jpg'
					collegeName='Mesa College'
					collegeText='Business and Technology Building'
				/>

				<ThingsToKnow />

				<TracksSection />

				<ProgramContainer
					hasIcon={<SportsTech />}
					programTitle={`Stem Sports + Tech`.toUpperCase()}
					programSubtitle='Combine physical movement and technology!'
					programDescription={`Utilizing the Garmin ${tradeMark} technology system, this camp builds a student wellness portfolio (daily-to-yearly, delivering heart rate data, reflective journaling, and performance metrics) that can correlate to academic, social, and emotional growth`}
					programFootText='Each day, students will take part in various health and nutrition activities incorporating different STEM sports and technologies'
					btnColor='purple'
					href='https://www.hisawyer.com/treobytes/schedules/activity-set/673279'
					thumbnails={stemSportsThumbnails}
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710786700/stem-sports-single-image_r0gqja.jpg'
					singleAltTag='Stem Sports + Tech'
				/>

				<ProgramContainer
					hasIcon={<GameDevelopment />}
					programTitle={`Game Development`.toUpperCase()}
					programSubtitle='New Curriculum! '
					programDescription='Build the video game you have always wanted to play! Game Development and Design involves design, audio, sound, coding, scripting, and narration'
					programFootText='Students will develop all these key skills as they work in groups with the culmination of a video game development and design'
					btnColor='blue'
					href='https://www.hisawyer.com/treobytes/schedules/activity-set/667822'
					thumbnails={gameDevelopmentThumbnails}
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710786700/game-development-single-image_eic0qd.jpg'
					singleAltTag='Game Development'
				/>

				<ProgramContainer
					hasIcon={
						<img
							className='icon'
							src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710867079/infento-icon_j2pfui.png'
							alt='stemfaire cardboard engineering'
						/>
					}
					programTitle={`Infento`.toUpperCase()}
					programSubtitle='Combine physical movement and technology!'
					programDescription='Utilizing an interactive technology ecosystem, this camp builds a student wellness portfolio (daily-to-yearly, delivering heart rate data, reflective journaling, and performance metrics) that can correlate to academic, social, and emotional growth.'
					programFootText='Each day, students will participate in diffrerent sports and technology activities.'
					btnColor='neon-orange'
					href='https://www.hisawyer.com/treobytes/schedules/activity-set/667843'
					thumbnails={infentoThumbnails}
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710793150/dream-garage-single-image_ixhtnj.jpg'
					singleAltTag='Infento'
				/>

				<ProgramContainer
					hasIcon={
						<img
							className='icon'
							src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710812370/stemfaire-cardboard_ylckig.png'
							alt='stemfaire cardboard engineering'
						/>
					}
					programTitle={`Stemfaire: Cardboard Engineering`.toUpperCase()}
					programSubtitle='Combine physical movement and technology!'
					programDescription='Utilizing an interactive technology ecosystem, this camp builds a student wellness portfolio (daily-to-yearly, delivering heart rate data, reflective journaling, and performance metrics) that can correlate to academic, social, and emotional growth.'
					programFootText='Each day, students will participate in diffrerent sports and technology activities.'
					btnColor='lime-green'
					href='https://www.hisawyer.com/treobytes/schedules/activity-set/667830'
					thumbnails={stemFaireThumbnails}
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710813318/cardboard-engineering-helmet-2_vmluii.jpg'
					singleAltTag='Stemfaire Cardboard Engineering'
				/>

				<Footer />
			</div>
		</>
	);
};

SummerOfSTEM.defaultProps = {
	componentName: 'summer-of-stem',
};

export default SummerOfSTEM;
