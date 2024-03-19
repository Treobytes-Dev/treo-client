import { useContext, useEffect, useState } from 'react';
import Head from 'next/head';

// components
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import SummerOfSTEM from '../../components/SummerOfSTEM';
import ProgramContainer from '../../components/ProgramContainer';
import { TemplateIntro } from '../../components/TemplateIntro';

// icons
import SportsTech from '../../assets/icons/SportsTech';
import GameDevelopment from '../../assets/icons/GameDevelopment';
import Link from 'next/link';

const SummerCamps = ({ componentName }) => {
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

	const [isSummerOfStemVisible, setIsSummerOfStemVisible] = useState(false);

	const hero =
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1709693053/leadership-hero_tgmuu8.jpg';

	const listItemsSummerCamps = [
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

	const tradeMark = '\u2122';
	return (
		<>
			{head()}
			<Navigation />
			<div className={`page ${componentName}`}>
				<TemplateIntro
					heroImage={hero}
					heroHeader='Programs'
					introHeader='SUMMER OF STEM CAMP'
				/>
				<div className='intro-join-today'>
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
				</div>

				<SummerOfSTEM listItemsSummerCamps={listItemsSummerCamps} />

				<div className='title-section'>
					<div className='container'>
						<h3 className='header header-three'>
							{`Tracks 2024`.toUpperCase()}
						</h3>
						<h6 className='header header-six'>
							Note:
							<span className='callout'>
								Each track's curriculum will repeat each week
							</span>
						</h6>
					</div>
				</div>

				<ProgramContainer
					hasIcon={<SportsTech />}
					programTitle='Stem Sports + Tech'
					programSubtitle='Combine physical movement and technology!'
					programDescription={`Utilizing the Garmin ${tradeMark} technology system, this camp builds a student wellness portfolio (daily-to-yearly, delivering heart rate data, reflective journaling, and performance metrics) that can correlate to academic, social, and emotional growth`}
					programFootText='Each day, students will take part in various health and nutrition activities incorporating different STEM sports and technologies'
					btnColor='purple'
					thumbnails={stemSportsThumbnails}
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710786700/stem-sports-single-image_r0gqja.jpg'
					singleAltTag='Stem Sports + Tech'
				/>

				<ProgramContainer
					hasIcon={<GameDevelopment />}
					programTitle='Game Development'
					programSubtitle='New Curriculum! '
					programDescription='Build the video game you have always wanted to play! Game Development and Design involves design, audio, sound, coding, scripting, and narration'
					programFootText='Students will develop all these key skills as they work in groups with the culmination of a video game development and design'
					btnColor='blue'
					thumbnails={gameDevelopmentThumbnails}
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710786700/game-development-single-image_eic0qd.jpg'
					singleAltTag='Game Development'
				/>

				<ProgramContainer
					hasIcon={
						<img
							className='icon'
							src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710812370/stemfaire-cardboard_ylckig.png'
							alt='stemfaire cardboard engineering'
						/>
					}
					programTitle='Stemfaire: Cardboard Engineering'
					programSubtitle='Combine physical movement and technology!'
					programDescription='Utilizing an interactive technology ecosystem, this camp builds a student wellness portfolio (daily-to-yearly, delivering heart rate data, reflective journaling, and performance metrics) that can correlate to academic, social, and emotional growth.'
					programFootText='Each day, students will participate in diffrerent sports and technology activities.'
					btnColor='lime-green'
					thumbnails={gameDevelopmentThumbnails}
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710786700/game-development-single-image_eic0qd.jpg'
					singleAltTag='Stemfaire Cardboard Engineering'
				/>

				<Link href='/programs/level-up-at-mesa-college'>
					Level Up At Mesa College
				</Link>

				<Footer />
			</div>
		</>
	);
};

SummerCamps.defaultProps = {
	componentName: 'summer-camps',
};

export default SummerCamps;
