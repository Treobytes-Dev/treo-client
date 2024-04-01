import Head from 'next/head';

// components
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { TemplateIntro } from '../../components/TemplateIntro';
import ProgramDates from '../../components/ProgramDates';
import IntroToCamp from '../../components/IntroToCamp';
import ProgramContainer from '../../components/ProgramContainer';
import IntroSignUp from '../../components/IntroSignUp';
import TracksSection from '../../components/TracksSection';

const LevelUpCityCollege = ({ componentName }) => {
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
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710796588/hero-level-up-city-college_bqeyav.jpg';

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

	const gameJamThumbnails = [
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710786700/game-development-thumbnail-1_lb3hgs.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710786700/game-development-thumbnail-2_h0nwel.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710786700/game-development-thumbnail-3_w3qbp6.jpg',
	];

	const legoMastersThumbnails = [
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710796861/lego-master-thumbnail-1_aqov0f.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710796864/lego-master-thumbnail-2_xcgifa.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710796866/lego-master-thumbnail-3_fotnxy.jpg',
	];

	const circuitsPluggedInThumbnails = [
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710797099/circuits-plugged-in-thumbnail-1_ob8ecg.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710797102/circuits-plugged-in-thumbnail-2_mfz69y.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710010480/donate-image-3_d0mjtw.jpg',
	];

	const cardboardEngineeringThumbnails = [
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710795237/card-board-thumbnail-2_hx82nl.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710797693/cardboard-thumbnail-2_cjqoit.jpg',
		'https://res.cloudinary.com/dtjvswb7v/image/upload/v1710795239/card-board-thumbnail-3_jtri7v.jpg',
	];

	// scroll to logic
	const scrollToTarget = () => {
		const targetElement = document.getElementById('scroll-to-el');
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	return (
		<>
			{head()}
			<Navigation />
			<div className={`page ${componentName}`}>
				<TemplateIntro
					heroImage={hero}
					introHeader={`treobytes summer level up camp at city college`.toUpperCase()}
					scrollToTarget={scrollToTarget}
				/>

				{/* scrollTo */}
				<div id='scroll-to-el' />
				<IntroSignUp
					href='https://www.inplay.org/providers/treobytes'
					btnText={`sign up on inplay`.toUpperCase()}
				/>

				<ProgramDates
					image1='https://res.cloudinary.com/dtjvswb7v/image/upload/v1709692266/summer-of-stem-camps-hero_fvqzmt.jpg'
					image2='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710793452/sky-sea-tech-thumbnail-2_cenuwr.jpg'
					image3='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710793726/aerial-drone-soccer-single-image_xm9xla.jpg'
					image4='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710793150/dream-garage-single-image_ixhtnj.jpg'
					description1={`Stemprenuers smart city 2.0`.toUpperCase()}
					description2={`Sky and sea tech`.toUpperCase()}
					description3={`Aerial drone soccer`.toUpperCase()}
					description4={`Dream garage with infento`.toUpperCase()}
					contentLocation={
						<p className='paragraph'>
							City College Business and Technology Building
						</p>
					}
					contentCost={<p className='paragraph'>Free</p>}
					contentDays={<p className='paragraph'>Monday - Friday</p>}
					contentDates={
						<>
							<p className='paragraph'>Jul 29th - Aug 9th</p>
							<p className='paragraph'>* 10 day camp</p>
						</>
					}
					contentTime={<p className='paragraph'>9:00am - 4:00pm</p>}
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
					collegeImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710796859/hero-city-college_l1jbvu.jpg'
					collegeName={`city college`.toUpperCase()}
					collegeText='Business and Technology Building'
				/>

				<TracksSection />

				<ProgramContainer
					hasIcon={
						<img
							className='icon'
							src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710883012/game-jam_x6htkh.png'
							alt='game jam'
						/>
					}
					programTitle={`game jam 2.0`.toUpperCase()}
					programSubtitle='Create games, learn programming, play, share, prototype, and jam!'
					programDescription={`In this class, you will write your game code, design your best sprites, collaborate, control your game with a gamepad, keyboard, or mouse input, and export in a single click!`}
					programFootText='Will your game be the best of Game Jam 2.0? Join us to see.'
					btnColor='royal-blue'
					href='https://www.inplay.org/providers/treobytes'
					thumbnails={gameJamThumbnails}
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710786700/game-development-single-image_eic0qd.jpg'
					singleAltTag='game jam 2.0'
				/>

				<ProgramContainer
					hasIcon={
						<img
							className='icon'
							src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710883627/lego-masters_gr6bxb.png'
							alt='lego master series'
						/>
					}
					programTitle={`lego master series`.toUpperCase()}
					programSubtitle={`It's BACK! Are you a true Lego Master?`}
					programDescription={`Venture into the depths of Legos exploring LEGO Technic/Classic sets, LEGO SPIKE Prime Rubik's cube solver and the NEW Lego Fortnite`}
					programFootText={`Don't delay...This will fill up quickly!`}
					btnColor='mustard-yellow'
					href='https://www.inplay.org/providers/treobytes'
					thumbnails={legoMastersThumbnails}
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710796591/level-up-city-college-thumbnail-2_jlg34h.jpg'
					singleAltTag='lego master series'
				/>

				<ProgramContainer
					hasIcon={
						<img
							className='icon'
							src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710884036/circuits-plugged-in_lsd3t0.png'
							alt='circuits plugged-in'
						/>
					}
					programTitle={`circuits plugged-in`.toUpperCase()}
					programSubtitle={`In circuits Plugged-In, students will embark on an exciting journey to explore the fundamentals of Arduino technology and it's practical applications to real-world challenges.`}
					programDescription={`Through hands-on experience, they will learn the art of programming, allowing them to bring their innovative ideas to life.`}
					programFootText={`The course delves into the fascinating realm of structures and aerospace engineering, providing insights into designing and building robust systems.`}
					btnColor='pale'
					href='https://www.inplay.org/providers/treobytes'
					thumbnails={circuitsPluggedInThumbnails}
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710797096/circuits-plugged-in-single-image_iyysco.jpg'
					singleAltTag='circuits plugged-in'
				/>

				<ProgramContainer
					hasIcon={
						<img
							className='icon'
							src='https://res.cloudinary.com/dtjvswb7v/image/upload/v1710812370/stemfaire-cardboard_ylckig.png'
							alt='cardboard engineering + robotics'
						/>
					}
					programTitle={`stemfaire: cardboard engineering + robotics`.toUpperCase()}
					programSubtitle={`Welcome to STEMfaire, the Cardboard Engineering Projects Camp, where imagination takes shape and creativity know no bounds.`}
					programDescription={`Our camp is an exciting journey into the world of engineering, design, and hands-on innovation-all with the humble yet versatile material, cardboard.`}
					programFootText={`Participants will lembark on a thrilling exploration of engineering principles and design thinking.`}
					btnColor='lime-green'
					href='https://www.inplay.org/providers/treobytes'
					thumbnails={cardboardEngineeringThumbnails}
					singleImage='https://res.cloudinary.com/dtjvswb7v/image/upload/v1711305819/IMG_4774_xlsdok.jpg'
					singleAltTag='cardboard engineering + robotics'
				/>
				<Footer />
			</div>
		</>
	);
};

LevelUpCityCollege.defaultProps = {
	componentName: 'level-up-city-college',
};

export default LevelUpCityCollege;
